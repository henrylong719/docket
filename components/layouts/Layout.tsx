import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  BeakerIcon,
  ClipboardListIcon,
  CogIcon,
  DocumentTextIcon,
  HomeIcon,
  IdentificationIcon,
  ViewListIcon,
} from '@heroicons/react/outline';

import React from 'react';

interface MenuItem {
  href: string;
  title: string;
  menuIcon?: any;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const menuItems: MenuItem[] = [
    {
      href: '/',
      title: 'Home',
      menuIcon: HomeIcon,
    },
    {
      href: '/todo',
      title: 'Todo',
      menuIcon: ViewListIcon,
    },

    {
      href: '/notes',
      title: 'Notes',
      menuIcon: DocumentTextIcon,
    },
    {
      href: '/about',
      title: 'About',
      menuIcon: IdentificationIcon,
    },
    {
      href: '/settings',
      title: 'Settings',
      menuIcon: CogIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <header className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        Next.js sidebar menu
      </header> */}
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-gray-200 w-full md:w-60">
          <nav>
            <ul>
              <li className="flex justify-center mt-10 text-2xl  mb-8">
                <ClipboardListIcon className="h-8 w-8" />
                <span>DOCKET</span>
              </li>
              {menuItems.map((item) => (
                <li className="m-2" key={item.title}>
                  <Link href={item.href}>
                    <a
                      className={` flex  rounded-lg p-2 bg-gray-200 hover:bg-gray-500 cursor-pointer ${
                        router.asPath === item.href && 'bg-gray-500 text-white'
                      }`}
                    >
                      <item.menuIcon className="w-5 h-5 ml-11 mr-4" />
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
