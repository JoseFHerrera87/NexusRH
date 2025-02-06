import React from "react";
import useStorePanel from "../../store/storePanel";
import "../Styles/mainStyle.css";

export const MainLayout = () => {
  const { view } = useStorePanel();

  console.log(view);

  return (
    <main className="main__main">
      <div className="main__container-cards">{view}</div>
    </main>
  );
};
