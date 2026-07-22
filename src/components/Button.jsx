import React from 'react'

const Button = ({ title, containerClass , leftIcon, rightIcon, id}) => {
  return (
    <button
      id={id}
      className={`group relative z-10 bg-violet-50 text-black px-7 py-3 rounded-full ${containerClass}`}
    >
      {leftIcon}

      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button