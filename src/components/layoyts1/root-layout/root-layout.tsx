import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { TopBar } from '@components/layoyts1/top-bar';
import { SideBar } from '@components/layoyts1/side-bar/side-bar';

interface IRootLayoutProps {
  children?: ReactNode;
}

export const RootLayout = (props: IRootLayoutProps) => {
  return (
    <>
      <main className="pt-10 px-12 w-screen h-screen bg-light">
        <TopBar />
        <div className='flex items-start h-full mt-6'>
          <SideBar />
          <div className="h-full overflow-auto">
            {props.children ?? <div></div>}
          </div>
        </div>
      </main>
    </>
  );
};