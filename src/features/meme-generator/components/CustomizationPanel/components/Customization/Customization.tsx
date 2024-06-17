import "swiper/css";
import { FC } from "react";
import { clsx } from "clsx";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import placeholder from "../../../../assets/img/placeholder.png";

type CustomizationProps = {
  id: string;
  title: string;
  images: Array<string>;
  selectedImage: string;
  onImageClick: (groupId: string, image: string) => void;
};

export const Customization: FC<CustomizationProps> = ({ id, title, images, selectedImage, onImageClick }) => {
  const handleButtonClick = (groupId: string, index: number): void => {
    onImageClick(groupId, images[index]);
  };

  return (
    <div className="my-2 md:my-6">
      <h3 className="mb-1 text-lg font-bold md:mb-3 md:text-2xl">{title}</h3>
      <div className="flex justify-between gap-1 sm:gap-2">
        <button
          className={`slider-prev-button-${id} _icon-chevron inline-flex h-[84px] w-[25px] items-center justify-center rounded-lg bg-white outline-none before:rotate-180 before:text-[24px] focus:shadow-[0_0_15px_rgba(0,0,0,1)] disabled:opacity-50 sm:w-[42px]`}
        />
        <Swiper
          breakpoints={{
            0: {
              spaceBetween: 3,
              slidesPerView: 3,
            },
            640: {
              spaceBetween: 8,
              slidesPerView: 5,
            },
          }}
          navigation={{
            prevEl: `.slider-prev-button-${id}`,
            nextEl: `.slider-next-button-${id}`,
          }}
          className="max-w-[279px] flex-auto sm:max-w-[452px]"
          modules={[Navigation, Mousewheel]}
          watchOverflow={false}
          mousewheel={true}
        >
          {images.map((image, index) => (
            <SwiperSlide style={{ width: "84px", height: "84px" }} className="h-[84px] w-[84px]" key={index}>
              <button
                className={clsx(
                  "relative h-[84px] w-[84px] rounded-xl border border-white p-1 outline-none focus:border-black",
                  selectedImage === image && "border-2 !border-black",
                )}
                onClick={() => handleButtonClick(id, index)}
              >
                <img
                  className="absolute bottom-[3px] left-[3px] right-[3px] top-[3px] h-[calc(100%-6px)] w-[calc(100%-6px)] rounded-lg object-contain"
                  src={image ? image : placeholder}
                  alt="Image"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className={`slider-next-button-${id} _icon-chevron inline-flex h-[84px] w-[25px] items-center justify-center rounded-lg bg-white before:text-[24px] focus:shadow-[0_0_15px_rgba(0,0,0,1)] disabled:opacity-50 sm:w-[42px]`}
        />
      </div>
    </div>
  );
};
