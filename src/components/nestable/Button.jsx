import React from 'react';

const Button = ({ blok }) => {
  
  const button_url = blok?.button_url?.cached_url;
  const button_text = blok?.button_text || 'Default Button Text';

  if (!button_url || !button_text) {
    return null; 
  }

  return (
    <div className="flex flex-col items-start mt-4">
      <a 
        href={button_url} 
        className="bg-red-300 hover:bg-blue-100 text-white font-bold py-2 px-4 rounded inline-block ml-60"
      >
        {button_text}
      </a>
    </div>
  );
};

export default Button;
