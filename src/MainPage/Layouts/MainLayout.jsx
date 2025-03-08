import { useStorePanel } from "@storePanel";

export const MainLayout = () => {
  const { view } = useStorePanel();

  return <main className="w-3/4 h-50 overflow-scroll">{view}</main>;
};
