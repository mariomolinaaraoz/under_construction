import React from 'react';

const BackgroundImage = () => {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-black opacity-50">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="/bg.jpg"
          alt="Imagen de fondo"
        />
      </div>
    </div>
  );
};

export default BackgroundImage;