import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '@components/layouts/top-bar';
import { SideBar } from '@components/layouts/side-bar/side-bar';

interface IRootLayoutProps {
  children?: ReactNode;
}

export const RootLayout = (props: IRootLayoutProps) => {
  return (
    <>
      <main className="pt-10 px-12 w-screen h-screen bg-light">
        <TopBar />
        <div className='flex items-start h-[calc(100%-9rem)] mt-6 gap-6'>
          <SideBar />
          <div className='h-full w-full overflow-auto text-black'>
            {props.children ?? <Outlet />}
          </div>
        </div>
      </main>
    </>
  );
};