import { create } from "zustand";
import { EmployeesView } from "../MainPage/Views/";

const useStorePanel = create((set) => ({
  view: <EmployeesView />,
  changeView: (newView) => set({ view: newView }),
}));

export default useStorePanel;
