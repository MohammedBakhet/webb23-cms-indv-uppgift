import ImageWithText from "./ImageWithText";

const Grid = ({ blok }) => (
  <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
    {blok?.children?.map((childBlok) => (
      <ImageWithText blok={childBlok} key={childBlok._uid} />
    ))}
  </section>
);

export default Grid;
