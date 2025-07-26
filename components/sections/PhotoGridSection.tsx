import Image from 'next/image';
import GradientText from '../GradientText';

export default function BentoGrid() {
  const photos = [
    { src: "/images/berserk.jpg", span: "md:col-span-2 md:row-span-1" },
    { src: "/images/guts.jpg", span: "md:row-span-1" },
    { src: "/images/dragon_slayer.webp", span: "md:col-span-3 md:row-span-2" },
  ];

  return (
    <div className="relative w-full px-4 sm:px-8 py-8">
      <GradientText
        text="I don't want to be saved, I want to be strong"
        className="text-center text-2xl sm:text-3xl md:text-4xl"
      />

      {/* Grid: stacked on mobile, original bento layout on md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[160px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-4 max-w-6xl mx-auto mt-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt={`Photo ${index + 1}`}
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
