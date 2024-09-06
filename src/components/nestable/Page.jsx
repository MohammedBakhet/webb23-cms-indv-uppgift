
const Page = ({ blok }) => (
    <main>
      {blok.body.map((nestedBlok) => (
        <DynamicComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
  