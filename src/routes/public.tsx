import { Landing } from "@/features/landing";
import { Meme, MemeGenerator } from "@/features/meme-generator";

export const publicRoutes = [
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/meme-generator",
    element: <MemeGenerator />,
  },
  {
    path: "/meme-generator/:siteId/:memeId",
    element: <Meme />,
  },
  {
    path: "*",
    element: <Landing />,
  },
];
