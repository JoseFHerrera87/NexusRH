import { create } from "zustand";

import { EmployeesView } from "../MainPage/Views";

export const useStorePanel = create((set) => ({
  view: <EmployeesView />,
  changeView: (newView) => set({ view: newView }),
}));
