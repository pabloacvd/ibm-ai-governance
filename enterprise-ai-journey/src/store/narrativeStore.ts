import { create } from 'zustand';
import type { AIType } from '../models/types';

// ─── State shape ─────────────────────────────────────────────────────────────

interface NarrativeState {
  activeSection: number;
  proliferationPhase: number;
  expandedInitiativeIds: string[];
  activePerspectiveId: string | null;
  selectedConsequenceId: string | null;
  activeAIType: AIType | null;
  securityScenarioStep: number;
  reducedMotion: boolean;

  // Actions
  setActiveSection: (index: number) => void;
  advanceProliferation: () => void;
  setProliferationPhase: (phase: number) => void;
  expandInitiative: (id: string) => void;
  collapseInitiative: (id: string) => void;
  activatePerspective: (id: string | null) => void;
  selectConsequence: (id: string | null) => void;
  setActiveAIType: (type: AIType | null) => void;
  advanceSecurityScenario: () => void;
  resetSecurityScenario: () => void;
  setReducedMotion: (val: boolean) => void;
}

// ─── Store ───────────────────────────────────────────────────────────────────

export const useNarrativeStore = create<NarrativeState>((set) => ({
  activeSection: 0,
  proliferationPhase: 0,
  expandedInitiativeIds: [],
  activePerspectiveId: null,
  selectedConsequenceId: null,
  activeAIType: null,
  securityScenarioStep: 0,
  reducedMotion: false,

  setActiveSection: (index) => set({ activeSection: index }),

  advanceProliferation: () =>
    set((s) => ({
      proliferationPhase: Math.min(s.proliferationPhase + 1, 9),
    })),

  setProliferationPhase: (phase) =>
    set({ proliferationPhase: Math.max(0, Math.min(phase, 9)) }),

  expandInitiative: (id) =>
    set((s) => ({
      expandedInitiativeIds: s.expandedInitiativeIds.includes(id)
        ? s.expandedInitiativeIds
        : [...s.expandedInitiativeIds, id],
    })),

  collapseInitiative: (id) =>
    set((s) => ({
      expandedInitiativeIds: s.expandedInitiativeIds.filter((x) => x !== id),
    })),

  activatePerspective: (id) => set({ activePerspectiveId: id }),

  selectConsequence: (id) => set({ selectedConsequenceId: id }),

  setActiveAIType: (type) => set({ activeAIType: type }),

  advanceSecurityScenario: () =>
    set((s) => ({
      securityScenarioStep: Math.min(s.securityScenarioStep + 1, 5),
    })),

  resetSecurityScenario: () => set({ securityScenarioStep: 0 }),

  setReducedMotion: (val) => set({ reducedMotion: val }),
}));

// ─── Reduced-motion listener ──────────────────────────────────────────────────

export function initReducedMotionListener(): void {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  useNarrativeStore.getState().setReducedMotion(mq.matches);
  mq.addEventListener('change', (e) => {
    useNarrativeStore.getState().setReducedMotion(e.matches);
  });
}
