import { useMergeState } from "@restart/hooks";
import { Image } from "@/features/meme-generator/utils";
import { ImageType } from "@/features/meme-generator/types";

type UseMemeGenerator = {
  state: ImageType;
  changeImage: (groupId: string, image: string) => void;
  resetImage: () => void;
  generateRandomImage: () => void;
};

const INITIAL_STATE = {
  background: Image.getImage("background", 0),
  body: Image.getImage("body", 0),
  head: Image.getImage("head", 0),
  hat: Image.getImage("hat", 0),
  glasses: Image.getImage("glasses", 0),
  flag: Image.getImage("flag", 0),
  front: Image.getImage("front", 0),
  back: Image.getImage("back", 0),
};

export const useMemeGenerator = (): UseMemeGenerator => {
  const [state, setState] = useMergeState(INITIAL_STATE);

  const changeImage = (groupId: string, image: string): void => {
    setState({ [groupId]: image });
  };

  const resetImage = (): void => {
    setState(INITIAL_STATE);
  };

  const generateRandomImage = (): void => {
    const randomImage = {
      background: Image.getRandomImage("background", 9),
      body: Image.getRandomImage("body", 7),
      head: Image.getRandomImage("head", 10),
      hat: Image.getRandomImage("hat", 12),
      glasses: Image.getRandomImage("glasses", 13),
      flag: Image.getRandomImage("flag", 20),
      back: Image.getImage("back", 0),
      front: Image.getImage("front", 0),
    };

    setState(randomImage);
  };

  return {
    state,
    changeImage,
    resetImage,
    generateRandomImage,
  };
};
