import { StoryblokComponent } from "@storyblok/react/rsc";

// Unified Content-type component (acts as a template for all pages)
export default function Page({ blok }) {
    return (
        <main className="flex flex-col">
            {blok?.body?.map((blok) => (
                <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
        </main>
    );
}
