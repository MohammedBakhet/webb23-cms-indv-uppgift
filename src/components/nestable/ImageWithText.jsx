const ImageWithText = ({ blok }) => {
  const { image, text, title } = blok;

  // Log the image URL for debugging
  console.log("Image URL:", image?.filename);

  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
      {image?.filename ? (
        <img 
          className="w-[500px] h-auto mb-4"
          src={image.filename} 
          alt={image.alt || 'Image'} 
        />
      ) : (
        <p>No image available</p>
      )}
      <h2 className="text-lg font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-600">{text}</p>
    </div>
  );
};

export default ImageWithText;
