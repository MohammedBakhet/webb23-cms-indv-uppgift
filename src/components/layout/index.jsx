import Image from "next/image";
import Header from "../nestable/Header";

export default function Layout({ config, children }) {

  const logotype = config?.content?.logotype?.filename || "/default-logo.png";
  const content = config?.content || {}; // Fallback if content is undefined

  return (
    <>
      <header className="bg-red-800 text-white p-4 shadow-xl">
        <div className="container mx-auto flex items-center justify-between">
          <Image 
            src={logotype} 
            width={150} 
            height={150} 
            className="rounded-full object-cover" 
            alt="Logo"
          />
          
          <Header blok={content} /> 
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-red-800 text-white p-4">
        <p>Footer</p>
      </footer>
    </>
  );
}
