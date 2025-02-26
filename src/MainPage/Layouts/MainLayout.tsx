import React from "react";
import useStorePanel from "../../store/storePanel";

export const MainLayout = () => {
  const { view } = useStorePanel();

  return <main className="w-3/4">{view}</main>;
};
