import { HeaderLayout, AsideLayout, MainLayout } from "./Layouts";

export const MainPage = () => {
  return (
    <>
      <HeaderLayout />
      <div className="flex h-full">
        <AsideLayout />
        <MainLayout />
      </div>
    </>
  );
};
