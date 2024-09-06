import Button from './Button'; 

const Hero = ({ blok }) => {
 
  const { image, title, text, button } = blok;

  return (
    <section className="flex flex-row items-center mt-10 ml-10">
      
      <img className="w-[500px] mr-10" src={image?.filename} alt={image?.alt || "Hero Image"} />
      
      <div className="flex flex-col">
        
        <h1 className="text-2xl">{title}</h1>
        <p className="text-sm mt-2">{text}</p>
        
        
        {button && <Button blok={button} />}
      </div>
    </section>
  );
};

export default Hero;
