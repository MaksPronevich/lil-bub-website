export { projectConfig } from "./project.config";
export { animationConfig } from "./animation.config";

type Config = {
  imgBBUrl: string;
  imgBBApiKey: string;
};

const config = (): Config => ({
  imgBBUrl: import.meta.env.VITE_IMG_BB_URL,
  imgBBApiKey: import.meta.env.VITE_IMG_BB_KEY,
});

export const configuration = config();
