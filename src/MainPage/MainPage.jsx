import { HeaderLayout, AsideLayout, MainLayout } from "./Layouts";
import "./Styles/mainPage.css";

export const MainPage = () => {
  return (
    <>
      <HeaderLayout />
      <div className="principal">
        <AsideLayout />
        <MainLayout />
      </div>
    </>
  );
};
