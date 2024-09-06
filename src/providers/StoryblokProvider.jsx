"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Header from "@/components/nestable/Header";
import Hero from "@/components/nestable/Hero";
import Grid from "@/components/nestable/Grid";
import Button from "@/components/nestable/Button";
import ImageWithText from "@/components/nestable/ImageWithText";



const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "header": Header,
  "hero": Hero,
   "grid": Grid,
   "button": Button,
   "ImageWithText": ImageWithText
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}