import React from 'react';

export const Container = ({ children }) => {
  return (
    <div className="max-w-[90rem] mx-auto px-6 md:px-32">
      {children}
    </div>
  );
};
