import Link from 'next/link';
import { useRouter } from 'next/router';
import { BeakerIcon } from '@heroicons/react/outline';

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
      menuIcon: BeakerIcon,
    },
    {
      href: 'todo',
      title: 'Todo',
      menuIcon: BeakerIcon,
    },
    {
      href: '/about',
      title: 'About',
      menuIcon: BeakerIcon,
    },
    {
      href: '/contact',
      title: 'Contact',
      menuIcon: BeakerIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* <header className="bg-purple-200 sticky top-0 h-14 flex justify-center items-center font-semibold uppercase">
        Next.js sidebar menu
      </header> */}
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-fuchsia-100 w-full md:w-60">
          <nav>
            <ul>
              <li>Docket</li>
              {menuItems.map((item) => (
                <li className="m-2" key={item.title}>
                  <Link href={item.href}>
                    <a
                      className={` flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                        router.asPath === item.href &&
                        'bg-fuchsia-600 text-white'
                      }`}
                    >
                      <item.menuIcon className="w-5 h-5 mr-2" />
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
