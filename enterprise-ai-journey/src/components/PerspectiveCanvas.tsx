import React, { useMemo, useRef, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — no typings for react-cytoscapejs
import CytoscapeComponent from 'react-cytoscapejs';
import cytoscape from 'cytoscape';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore — no typings for cytoscape-dagre
import dagre from 'cytoscape-dagre';
import type { Core, ElementDefinition, Css, NodeSingular } from 'cytoscape';
import { PERSPECTIVE_NODES, PERSPECTIVE_EDGES } from '../data/perspectives-network';
import { ORG_PERSPECTIVES } from '../data/perspectives';

// Register dagre layout once at module level
let dagreRegistered = false;
if (!dagreRegistered) {
  cytoscape.use(dagre);
  dagreRegistered = true;
}

// Node colours by category
const NODE_COLOURS: Record<string, string> = {
  'ai-asset':      '#0f62fe',
  'data-source':   '#697077',
  'model':         '#8a3ffc',
  'team':          '#007d79',
  'platform':      '#4d5358',
  'business-unit': '#a2a9b0',
};

const NODE_TEXT_COLOURS: Record<string, string> = {
  'ai-asset':      '#ffffff',
  'data-source':   '#ffffff',
  'model':         '#ffffff',
  'team':          '#ffffff',
  'platform':      '#ffffff',
  'business-unit': '#161616',
};

const NODE_SHAPES: Record<string, Css.Node['shape']> = {
  'ai-asset':      'roundrectangle',
  'data-source':   'barrel',
  'model':         'diamond',
  'team':          'ellipse',
  'platform':      'octagon',
  'business-unit': 'rectangle',
};

const GOV_NODE_IDS = new Set(['policy-risk', 'compliance-framework', 'audit-trail']);

interface PerspectiveCanvasProps {
  activePerspectiveId: string | null;
}

const PerspectiveCanvas: React.FC<PerspectiveCanvasProps> = ({ activePerspectiveId }) => {
  const cyRef = useRef<Core | null>(null);

  const activePerspective = useMemo(
    () => ORG_PERSPECTIVES.find((p) => p.id === activePerspectiveId) ?? null,
    [activePerspectiveId]
  );

  const { visibleIds, dimmedIds, flaggedIds } = useMemo(() => {
    if (!activePerspective) {
      return { visibleIds: new Set<string>(), dimmedIds: new Set<string>(), flaggedIds: new Set<string>() };
    }
    const visible = new Set(activePerspective.visibleNodeIds);
    const flagged = new Set([
      ...activePerspective.missingOwnership,
      ...activePerspective.missingEvidence,
    ]);
    const allNodeIds = PERSPECTIVE_NODES.filter((n) => !GOV_NODE_IDS.has(n.id)).map((n) => n.id);
    const dimmed = new Set(allNodeIds.filter((id) => !visible.has(id)));
    return { visibleIds: visible, dimmedIds: dimmed, flaggedIds: flagged };
  }, [activePerspective]);

  const elements = useMemo<ElementDefinition[]>(() => {
    const nodes = PERSPECTIVE_NODES
      .filter((n) => !GOV_NODE_IDS.has(n.id))
      .map((n) => ({
        data: { id: n.id, label: n.label, category: n.category },
        ...(n.x !== undefined && n.y !== undefined
          ? { position: { x: n.x, y: n.y } }
          : {}),
      }));
    const edges = PERSPECTIVE_EDGES.map((e) => ({
      data: { id: e.id, source: e.source, target: e.target, label: e.label ?? '' },
    }));
    return [...nodes, ...edges];
  }, []);

  // Base stylesheet — function mappers for per-node colour/shape
  const baseStylesheet = useMemo(() => [
    {
      selector: 'node',
      style: {
        label: 'data(label)',
        'font-size': 12,
        'font-family': '"IBM Plex Sans", system-ui, sans-serif',
        'font-weight': 600,
        'text-valign': 'center',
        'text-halign': 'center',
        'text-wrap': 'wrap',
        'text-max-width': 110,
        width: 140,
        height: 50,
        'background-color': (ele: NodeSingular) =>
          NODE_COLOURS[ele.data('category') as string] ?? '#6f6f6f',
        color: (ele: NodeSingular) =>
          NODE_TEXT_COLOURS[ele.data('category') as string] ?? '#ffffff',
        shape: (ele: NodeSingular) =>
          (NODE_SHAPES[ele.data('category') as string] ?? 'roundrectangle') as Css.Node['shape'],
        'border-width': 0,
        opacity: 1,
      } as unknown as Css.Node,
    },
    {
      selector: 'edge',
      style: {
        'curve-style': 'bezier' as const,
        'target-arrow-shape': 'triangle' as const,
        'arrow-scale': 0.8,
        'line-color': '#c1c7cd',
        'target-arrow-color': '#c1c7cd',
        width: 1.5,
        label: 'data(label)',
        'font-size': 9,
        'font-family': '"IBM Plex Sans", system-ui, sans-serif',
        'text-background-color': '#ffffff',
        'text-background-opacity': 0.8,
        'text-background-padding': '2px' as unknown as number,
        opacity: 0.8,
      } as unknown as Css.Edge,
    },
  ], []);

  // Apply perspective highlighting imperatively
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;

    if (!activePerspectiveId) {
      cy.nodes().style({ opacity: 1, 'border-width': 0 } as Css.Node);
      return;
    }

    cy.nodes().forEach((node) => {
      const id = node.id();
      if (visibleIds.has(id)) {
        node.style({
          opacity: 1,
          'border-width': flaggedIds.has(id) ? 2 : 3,
          'border-style': flaggedIds.has(id) ? 'dashed' : 'solid',
          'border-color': flaggedIds.has(id) ? '#da1e28' : '#0f62fe',
          'background-color': NODE_COLOURS[node.data('category') as string] ?? '#6f6f6f',
        } as Css.Node);
      } else if (dimmedIds.has(id)) {
        node.style({ opacity: 0.18, 'border-width': 0, 'background-color': '#c1c7cd' } as Css.Node);
      } else {
        node.style({ opacity: 0.45, 'border-width': 0 } as Css.Node);
      }
    });
  }, [activePerspectiveId, visibleIds, dimmedIds, flaggedIds]);

  const hasPositions = PERSPECTIVE_NODES.filter((n) => !GOV_NODE_IDS.has(n.id)).every(
    (n) => n.x !== undefined && n.y !== undefined
  );

  const layout = hasPositions
    ? { name: 'preset', fit: true, padding: 60 }
    : {
        name: 'dagre',
        rankDir: 'LR',
        nodeSep: 80,
        rankSep: 120,
        edgeSep: 15,
        ranker: 'network-simplex',
        nodeDimensionsIncludeLabels: true,
        animate: false,
        fit: true,
        padding: 60,
      };

  return (
    <CytoscapeComponent
      elements={elements}
      layout={layout}
      stylesheet={baseStylesheet}
      style={{ width: '100%', height: '100%', background: '#ffffff' }}
      cy={(cy: Core) => { cyRef.current = cy; }}
      minZoom={0.4}
      maxZoom={2}
    />
  );
};

export default PerspectiveCanvas;
