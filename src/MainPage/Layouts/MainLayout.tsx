import React from "react";
import useStorePanel from "../../store/storePanel";
import "../Styles/mainStyle.css";

export const MainLayout = () => {
  const { view } = useStorePanel();

  return <main className="main__main">{view}</main>;
};
