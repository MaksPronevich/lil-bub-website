import { useRef, ChangeEvent } from "react";
import { useMergeState } from "@restart/hooks";

type UploadedImage = {
  src: string;
  size: { width: number; height: number };
  position: { x: number; y: number };
};

type State = {
  inputValue: string;
  uploadedImages: UploadedImage[];
};

export const useImageEditor = (onResetImage: () => void, onGenerateRandomImage: () => void) => {
  const [state, setState] = useMergeState<State>({ inputValue: "", uploadedImages: [] });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setState({ inputValue: event.target.value });
  };

  const resetImage = (): void => {
    onResetImage();
    setState({ inputValue: "", uploadedImages: [] });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const generateRandomImage = (): void => {
    onGenerateRandomImage();

    setState({ inputValue: "", uploadedImages: [] });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      if (file.size > 1048576) {
        alert("Please upload an image less than 1 MB.");
        return;
      }

      reader.onload = (): void => {
        setState((prev) => ({
          ...prev,
          uploadedImages: [
            ...prev.uploadedImages,
            {
              src: reader.result as string,
              size: { width: 100, height: 100 },
              position: { x: 0, y: 0 },
            },
          ],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateImageSize = (index: number, size: { width: number; height: number }): void => {
    setState((prev) => {
      const newUploadedImages = [...prev.uploadedImages];
      newUploadedImages[index] = { ...newUploadedImages[index], size };
      return { ...prev, uploadedImages: newUploadedImages };
    });
  };

  const updateImagePosition = (index: number, position: { x: number; y: number }): void => {
    setState((prev) => {
      const newUploadedImages = [...prev.uploadedImages];
      newUploadedImages[index] = { ...newUploadedImages[index], position };
      return { ...prev, uploadedImages: newUploadedImages };
    });
  };

  const removeUploadedImage = (index: number): void => {
    setState((prev) => {
      const newUploadedImages = [...prev.uploadedImages];
      newUploadedImages.splice(index, 1);
      return { ...prev, uploadedImages: newUploadedImages };
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleInputClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
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
  };
};
