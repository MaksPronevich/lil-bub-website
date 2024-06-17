import { customizationConfig } from "@/features/meme-generator/config";

const getImage = (groupId: string, index: number = 0): string => {
  return customizationConfig.find((config) => config.id === groupId)?.images[index] || "";
};

const getRandomImage = (group: string, maxIndex: number): string => {
  const randomIndex = Math.floor(Math.random() * maxIndex);
  return Image.getImage(group, randomIndex);
};

export const Image = {
  getImage,
  getRandomImage,
};
