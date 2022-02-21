import React from 'react';

const Button = ({
  label,
  Icon,
  onClickButton,
}: {
  label: string;
  Icon: any;
  onClickButton: any;
}) => {
  return (
    <>
      <a>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 "
          onClick={onClickButton}
        >
          <Icon className="w-5 h-5 mr-2 " />

          {label}
        </button>
      </a>
    </>
  );
};

export default Button;
