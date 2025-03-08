import { HeaderLayout, AsideLayout, MainLayout } from "./Layouts";

export const MainPage = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-8 grid-rows-8 overflow-auto">
      <HeaderLayout />
      <AsideLayout />
    </div>
  );
};
