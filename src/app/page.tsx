
'use client'

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

import { ThumbImage } from '@/components/thumb-image';

import Close from '@/assets/close.svg'
import Arrow from '@/assets/arrow.svg'

import Image01 from '@/assets/img-01.webp'
import Image02 from '@/assets/img-02.webp'
import Image03 from '@/assets/img-03.jpeg'
import Image04 from '@/assets/img-04.jpeg'
import Image05 from '@/assets/img-05.jpeg'
import Image06 from '@/assets/img-06.webp'


export default function Home() {
  const [indexCurrent, setIndexCurrent] = useState(0);
  const [dataImgCurrent, setDataImgCurrent] = useState<StaticImageData | null>(null);

  const isOpen = dataImgCurrent !== null

  const listImages = [
    Image01, Image02, Image03, Image04, Image05, Image06
  ]

  function handleClickOpenImage(index: number) {
    setIndexCurrent(index)
    setDataImgCurrent(listImages[index])
  }

  function handleCloseLightbox() {
    setDataImgCurrent(null);
  }

  function handleNavigate(direction: 'next' | 'previous') {
    let index = direction === 'next' ? indexCurrent + 1 : indexCurrent - 1;

    //  Se tiver no primeiro, ele volta pro ultimo
    if (index < 0) {
      index = listImages.length - 1;
    }

    // se tiver no ultimo, ele volta pro primeiro
    if (index >= listImages.length) {
      index = 0;
    }

    setIndexCurrent(index);
    setDataImgCurrent(listImages[index]);
  }

  return (
    <>
      <section className='w-full min-h-screen flex items-start justify-center py-10 px-3 bg-slate-900'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
          {listImages.map((img, index) => (
            <ThumbImage
              key={index}
              srcImage={img}
              onClick={() => handleClickOpenImage(index)}
            />
          ))}
        </div>

        {
          isOpen &&
          <div className='fixed inset-0 w-full h-full z-30 px-3 flex items-center justify-center bg-black bg-opacity-50 animate-fadeUp'>
            <button
              onClick={handleCloseLightbox}
              className='absolute top-5 right-5 hover:opacity-70 transition-opacity ease-linear text-zi'
            >
              <Image
                src={Close}
                alt='Close'
                width={42}
                height={42}
              />
            </button>
            <div className='flex items-center gap-4'>
              <button
                onClick={() => handleNavigate('previous')}
                className='w-12 rotate-180 hover:opacity-50 transition-opacity ease-linear'
              >
                <Image
                  src={Arrow}
                  alt='Previous Image'
                />
              </button>

              {
                dataImgCurrent && (
                  <Image
                    src={dataImgCurrent}
                    width={500}
                    alt=''
                    className='rounded-lg max-w-[224px] md:max-w-none'
                  />
                )
              }


              <button
                onClick={() => handleNavigate('next')}
                className='w-12 hover:opacity-50 transition-opacity ease-linear'
              >
                <Image
                  src={Arrow}
                  alt='Next Image'
                />
              </button>
            </div>
          </div>
        }


      </section>
    </>
  )
}
