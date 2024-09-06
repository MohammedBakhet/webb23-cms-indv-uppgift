import Image from "next/image";
import Header from "../nestable/Header";


export default function Layout({ config, children }) {

  const logotype = config.content.logotype.filename;

  return (
    <>
      <header className="bg-red-800 text-white p-4 shadow-xl">
        <div className="container mx-auto flex items-center justify-between">
         
        <Image 
  src={logotype} 
  width={150} 
  height={150}  // Ensure width and height are the same for a round image
  className="rounded-full object-cover" // Tailwind class to make it round
/>
          
          <Header blok={config.content} /> 
        </div>
      </header>
      <main>
      {children}</main>
      <footer className="bg-red-800 text-white p-4">
        <p>Footer</p>
      </footer>
    </>
  );
}
