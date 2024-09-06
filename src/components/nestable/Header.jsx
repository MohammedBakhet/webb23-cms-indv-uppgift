import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => {
  const links = blok?.links;
  const title = blok?.title;

  return (
    <nav {...storyblokEditable(blok)} className="flex flex-col items-center justify-center">
   
      <h1 className="text-2xl font-bold text-center mb-7">{title}</h1>

   
      <ul className="flex space-x-4">
        {links?.map((link, index) => (
          <li key={index}>
            <a
              href={link?.linkUrl?.cached_url}
              className="hover:text-gray-300"
            >
              {link.linkName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
