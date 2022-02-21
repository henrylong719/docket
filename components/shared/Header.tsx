import { PlusIcon } from '@heroicons/react/outline';
import React, { ReactNode } from 'react';

const Header = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
      <header className="flex justify-between">
        <span className="text-5xl font-bold ">{title}</span>

        {children}
      </header>

      <div className="relative mt-5">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
