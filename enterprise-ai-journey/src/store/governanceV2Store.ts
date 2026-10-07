import { create } from 'zustand';

interface GovernanceV2State {
  // Navigation / active section tracking
  activeSectionV2: number;
  
  // Section 1: Proliferation phase
  section1Phase: number;
  selectedZoneId: string | null;

  // Section 2: Production workloads
  selectedWorkloadId: string;
  activeWorkloadTab: 'overview' | 'telemetry' | 'risk';

  // Section 3: Governance gap
  selectedGapIndex: number;

  // Section 4: Team viewpoints
  activeViewpointId: 'business' | 'security' | 'risk' | 'compliance' | 'architecture' | 'engineering';

  // Section 5: Regulatory obligations
  selectedRegulatoryId: string;

  // Section 6 & 7: Runtime AI flow & Architecture
  activeRuntimeStep: number;
  highlightedCapability: string | null;

  // Section 8: Differentiator view
  activeDifferentiatorIndex: number;

  // Section 9: AI Type comparison
  selectedAITypeIndex: number;

  // Section 10: IBM Architecture layer
  activeArchTier: number;
  showGuardiumSignalModal: boolean;

  // Section 11: Transformation view
  activePillarIndex: number;

  // Actions
  setActiveSectionV2: (index: number) => void;
  setSection1Phase: (phase: number) => void;
  advanceSection1Phase: () => void;
  setSelectedZoneId: (id: string | null) => void;
  setSelectedWorkloadId: (id: string) => void;
  setActiveWorkloadTab: (tab: 'overview' | 'telemetry' | 'risk') => void;
  setSelectedGapIndex: (index: number) => void;
  setActiveViewpointId: (id: 'business' | 'security' | 'risk' | 'compliance' | 'architecture' | 'engineering') => void;
  setSelectedRegulatoryId: (id: string) => void;
  setActiveRuntimeStep: (step: number) => void;
  setHighlightedCapability: (cap: string | null) => void;
  setActiveDifferentiatorIndex: (index: number) => void;
  setSelectedAITypeIndex: (index: number) => void;
  setActiveArchTier: (tier: number) => void;
  setShowGuardiumSignalModal: (show: boolean) => void;
  setActivePillarIndex: (index: number) => void;
}

export const useGovernanceV2Store = create<GovernanceV2State>((set) => ({
  activeSectionV2: 0,
  section1Phase: 2, // Start with phase 2 showing foundational presence
  selectedZoneId: null,
  selectedWorkloadId: 'workload-1',
  activeWorkloadTab: 'overview',
  selectedGapIndex: 0,
  activeViewpointId: 'business',
  selectedRegulatoryId: 'reg-1',
  activeRuntimeStep: 1,
  highlightedCapability: null,
  activeDifferentiatorIndex: 0,
  selectedAITypeIndex: 0,
  activeArchTier: 2,
  showGuardiumSignalModal: false,
  activePillarIndex: 0,

  setActiveSectionV2: (index) => set({ activeSectionV2: index }),
  setSection1Phase: (phase) => set({ section1Phase: Math.max(1, Math.min(phase, 6)) }),
  advanceSection1Phase: () => set((s) => ({ section1Phase: Math.min(s.section1Phase + 1, 6) })),
  setSelectedZoneId: (id) => set({ selectedZoneId: id }),
  setSelectedWorkloadId: (id) => set({ selectedWorkloadId: id }),
  setActiveWorkloadTab: (tab) => set({ activeWorkloadTab: tab }),
  setSelectedGapIndex: (index) => set({ selectedGapIndex: index }),
  setActiveViewpointId: (id) => set({ activeViewpointId: id }),
  setSelectedRegulatoryId: (id) => set({ selectedRegulatoryId: id }),
  setActiveRuntimeStep: (step) => set({ activeRuntimeStep: step }),
  setHighlightedCapability: (cap) => set({ highlightedCapability: cap }),
  setActiveDifferentiatorIndex: (index) => set({ activeDifferentiatorIndex: index }),
  setSelectedAITypeIndex: (index) => set({ selectedAITypeIndex: index }),
  setActiveArchTier: (tier) => set({ activeArchTier: tier }),
  setShowGuardiumSignalModal: (show) => set({ showGuardiumSignalModal: show }),
  setActivePillarIndex: (index) => set({ activePillarIndex: index }),
}));
