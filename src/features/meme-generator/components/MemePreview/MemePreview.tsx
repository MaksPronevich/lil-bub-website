import { FC } from "react";
import { Rnd } from "react-rnd";
import { Button } from "@/components";
import { ImageType } from "@/features/meme-generator/types";
import { useSaveMeme, useImageEditor } from "@/features/meme-generator/hooks";

type MemePreviewProps = {
  images: ImageType;
  onResetImage: () => void;
  onGenerateRandomImage: () => void;
};

export const MemePreview: FC<MemePreviewProps> = ({ images, onResetImage, onGenerateRandomImage }) => {
  const { elementRef, isLoading, handleSaveMeme, handleShareMeme } = useSaveMeme();
  const { background, body, head, hat, glasses, flag, back, front } = images;
  const {
    state,
    fileInputRef,
    handleInputValue,
    resetImage,
    generateRandomImage,
    handleImageUpload,
    updateImageSize,
    updateImagePosition,
    removeUploadedImage,
    handleInputClick,
    updateTextPosition,
    updateTextSize,
  } = useImageEditor(onResetImage, onGenerateRandomImage);

  return (
    <div className="exclude-class w-full max-w-[600px] rounded-3xl bg-white p-4 lg:p-6">
      <div className="relative w-full overflow-hidden bg-black pb-[100%]" ref={elementRef}>
        {background && <img className="absolute z-10 h-full w-full object-cover" src={background} alt="Background" />}
        {back && <img className="absolute left-0 top-0 z-20" src={back} alt="Back" />}
        {body && <img className="absolute left-0 top-0 z-30 h-full w-full" src={body} alt="Body" />}
        {flag && <img className="absolute z-40 w-full" src={flag} alt="Flag" />}
        {head && <img className="absolute left-0 top-0 z-50" src={head} alt="Head" />}
        {hat && <img className="absolute left-0 top-0 z-[60]" alt="Hat" src={hat} />}
        {glasses && <img className="absolute left-0 top-0 z-[70]" alt="Glasses" src={glasses} />}
        {front && <img className="absolute bottom-0 left-0 z-[80] object-contain" src={front} alt="Front" />}
        {state.uploadedImages.map((img, index) => (
          <Rnd
            onResizeStop={(e, direction, ref, delta, position) => {
              updateImageSize(index, {
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height),
              });
              updateImagePosition(index, position);
            }}
            onDragStop={(e, d) => {
              updateImagePosition(index, { x: d.x, y: d.y });
            }}
            className="z-[90] border border-white/0 hover:border-white"
            size={{ width: img.size.width, height: img.size.height }}
            position={{ x: img.position.x, y: img.position.y }}
            bounds="parent"
            key={index}
          >
            <div className="relative h-full w-full">
              <div className="absolute z-[110] h-full w-full" />
              <img className="absolute z-[100] h-full w-full" alt="Custom image" src={img.src} />
            </div>
          </Rnd>
        ))}
        {state.inputValue.length > 0 && (
          <Rnd
            enableResizing={{
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              updateTextSize({
                width: parseInt(ref.style.width),
                height: parseInt(ref.style.height),
              });
              updateTextPosition(position);
            }}
            onDragStop={(e, d) => {
              updateTextPosition({ x: d.x, y: d.y });
            }}
            size={{ width: state.text.size.width, height: state.text.size.height }}
            position={{ x: state.text.position.x, y: state.text.position.y }}
            className="z-[120] border border-white/0 hover:border-white"
            bounds="parent"
          >
            <div className="relative h-full w-full">
              <div className="text-center text-3xl font-bold tracking-tighter text-white [-webkit-text-stroke:2px_#000] md:text-5xl">
                {state.inputValue}
              </div>
            </div>
          </Rnd>
        )}
      </div>
      <div className="mt-6 flex flex-col gap-3">
        <>
          {state.uploadedImages.length > 0 && (
            <div className="min-h-[85px] overflow-x-auto rounded-xl border px-3.5">
              <div className="flex h-[79px] items-center gap-2">
                <button
                  className="_icon-close relative inline-flex h-[60px] w-[60px] shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-md border border-dashed p-1 outline-none before:rotate-45 before:text-[25px] focus:shadow-[0_0_15px_rgba(0,0,0,1)]"
                  onClick={handleInputClick}
                />
                {state.uploadedImages.map((img, index) => (
                  <div className="relative h-[60px] w-[60px] shrink-0 rounded-md border p-1" key={index}>
                    <img className="absolute h-auto w-[85%]  object-contain" alt={`Uploaded ${index}`} src={img.src} />
                    <button
                      className="_icon-close absolute -right-3 -top-3 h-4 w-4 outline-none before:rounded-full focus:before:shadow-[0_0_15px_rgba(0,0,0,1)] "
                      onClick={() => removeUploadedImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {state.uploadedImages.length === 0 && (
            <button
              className="flex min-h-[85px] w-full items-center justify-center rounded-xl border border-dashed px-3 outline-none focus:shadow-[0_0_15px_rgba(0,0,0,1)]"
              onClick={handleInputClick}
            >
              <>Upload your images in PNG format, no more than 1 MB</>
            </button>
          )}

          <input onChange={handleImageUpload} ref={fileInputRef} className="hidden" accept="image/png" type="file" />
        </>
        <input
          className="rounded-full border px-6 py-3 text-base outline-none focus:shadow-[0_0_15px_rgba(0,0,0,1)]"
          placeholder="Add some text"
          onChange={handleInputValue}
          value={state.inputValue}
          type="text"
        />
        <Button onClick={resetImage} icon="refresh" size="md">
          Reset BUB
        </Button>
        <Button onClick={generateRandomImage} icon="random" size="md">
          Generate random
        </Button>
        <Button onClick={handleSaveMeme} icon="download" size="md">
          Download
        </Button>
        <Button onClick={handleShareMeme} loading={isLoading} size="md" icon="x">
          Share
        </Button>
      </div>
    </div>
  );
};
