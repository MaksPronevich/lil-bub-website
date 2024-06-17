import { FC } from "react";
import { Customization } from "./components";
import { customizationConfig } from "@/features/meme-generator/config";

type CustomizationPanelProps = {
  onImageChange: (groupId: string, image: string) => void;
  selectedImages: { [groupId: string]: string };
};

export const CustomizationPanel: FC<CustomizationPanelProps> = ({ selectedImages, onImageChange }) => {
  return (
    <div className="exclude-class">
      {customizationConfig.map((item, index) => (
        <Customization
          id={item.id}
          selectedImage={selectedImages[item.id]}
          onImageClick={onImageChange}
          images={item.images}
          title={item.title}
          key={index}
        />
      ))}
    </div>
  );
};
