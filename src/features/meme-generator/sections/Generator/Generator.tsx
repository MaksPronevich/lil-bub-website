import { FC } from "react";
import { MemePreview, CustomizationPanel } from "../../components";
import { useMemeGenerator } from "@/features/meme-generator/hooks";

export const Generator: FC = () => {
  const { state, changeImage, resetImage, generateRandomImage } = useMemeGenerator();

  return (
    <section className="lg:min-h-screen">
      <div className="mx-auto flex max-w-[1344px] flex-col items-center gap-x-12 gap-y-6 px-4 pb-[50px] pt-[160px] sm:px-6 lg:min-h-screen lg:py-[180px] xl:flex-row">
        <MemePreview onGenerateRandomImage={generateRandomImage} onResetImage={resetImage} images={state} />
        <CustomizationPanel onImageChange={changeImage} selectedImages={state} />
      </div>
    </section>
  );
};
