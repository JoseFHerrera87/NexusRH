import { EmployeesView } from "../MainPage/Views";

export const viewSlice = (set) => ({
  view: <EmployeesView />,
  changeView: (newView) => set({ view: newView }),
});
