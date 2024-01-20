import { create } from 'zustand'

export interface PanelState {
  counter: number
  increase: (by: number) => void
}

export const useStore = create<PanelState>()((set) => ({
  counter: 0,
  increase: (by) => set((state) => ({ counter: state.counter + by })),
}))
