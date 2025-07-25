import Image from 'next/image';
import GradientText from '../GradientText';

export default function BentoGrid() {
  const photos = [
    { src: "/images/berserk.jpg", span: "col-span-2 row-span-2" },
    { src: "/images/guts.jpg", span: "row-span-2" },
    { src: "/images/dragon_slayer.webp", span: "col-span-3 row-span-3" },
  ];

  return (
    <div className='relative'>
    <GradientText 
      text="I don't want to be saved, I want to be strong"
      className="text-center"
    />
    <div className="grid grid-cols-3 auto-rows-[120px] gap-3 max-w-5xl mx-auto p-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl ${photo.span}`}
        >
          <Image
            src={photo.src}
            alt={`Photo ${index + 1}`}
            fill
            className="object-bottom transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
    </div>
  );
}
