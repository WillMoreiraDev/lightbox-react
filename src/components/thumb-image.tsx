
import Image, { StaticImageData } from "next/image";

interface ThumbImageProps {
  srcImage: StaticImageData
  onClick: () => void;
}

export function ThumbImage({ srcImage, onClick }: ThumbImageProps) {

  return (
    <button
      onClick={onClick}
      className='w-full h-full overflow-hidden rounded-md'
    >
      <Image
        src={srcImage}
        width={300}
        height={200}
        quality={100}
        alt='Img 01'
        className='hover:scale-110 transition-all ease-linear cursor-pointer'
      />
    </button>
  )
}