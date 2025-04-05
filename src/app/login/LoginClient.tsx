'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { useRouter } from 'next/navigation';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import Image from 'next/image';

const SLIDE_CLASSNAME = 'w-3/4 h-auto max-h-[70vh]';

interface Slide {
  key: string;
  src: string;
}

interface LoginClientProps {
  slides: Slide[];
}

const LoginClient = ({ slides }: LoginClientProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, duration: 20 });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const isLastSlide = selectedIndex === slides.length - 1;
    if (isLastSlide) {
      setIsDrawerOpen(true);
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi, selectedIndex, slides.length]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleSkip = () => setIsDrawerOpen(true);

  const handleRoleSelect = (role: string) => {
    router.push(`/login?role=${role}`);
  };

  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map(({ key, src }) => (
              <Slide key={key}>
                <Image
                  src={src}
                  alt={key}
                  width={300} // Adjust based on your image dimensions
                  height={500} // Adjust based on your image dimensions
                  className={SLIDE_CLASSNAME}
                />
              </Slide>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-sm">
        <Button
          variant="secondary"
          className="w-full h-[2.8rem] rounded-full"
          onClick={scrollNext}
        >
          Next
        </Button>
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <Dot
              key={index}
              isActive={selectedIndex === index}
              onClick={() => scrollTo(index)}
              index={index}
            />
          ))}
        </div>
        <Button
          variant="link"
          className="w-full h-[2.8rem] text-white"
          onClick={handleSkip}
        >
          Skip
        </Button>
      </div>

      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="absolute pb-[5rem] inset-x-0 mx-auto flex items-center justify-center max-w-sm rounded-t-xl bg-white border-none">
          <DrawerHeader className="flex w-full flex-col gap-4 items-center justify-center">
            <Image
              src="/logos/logo.svg"
              alt="Meetocure Logo"
              width={100} // Adjust based on your logo size
              height={100} // Adjust based on your logo size
            />
            <DrawerTitle className="text-[#0A4D68] font-semibold tracking-wide text-xl">
              Let&apos;s get started
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full px-6 flex justify-center items-center flex-col gap-2">
            <p className="text-black text-sm mb-4 tracking-wide">
              Choose your role
            </p>
            <Button
              className="h-[2.8rem] font-normal rounded-full w-full"
              size="lg"
              variant="primary"
              onClick={() => handleRoleSelect('patient')}
            >
              <Image
                src="/logos/patient.svg"
                alt="Patient Icon"
                width={16}
                height={16}
                className="mr-2"
              />
              Patient
            </Button>
            <Button
              className="h-[2.8rem] font-normal rounded-full w-full"
              size="lg"
              variant="primary"
              onClick={() => handleRoleSelect('doctor')}
            >
              <Image
                src="/logos/doctor.svg"
                alt="Doctor Icon"
                width={16} // Matches w-8
                height={16} // Matches h-8
                className="mr-2"
              />
              Doctor
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const Slide = memo(({ children }: { children: React.ReactNode }) => (
  <div className="flex-[0_0_100%] flex justify-center">{children}</div>
));
Slide.displayName = 'Slide';

const Dot = memo(
  ({
    isActive,
    onClick,
    index,
  }: {
    isActive: boolean;
    onClick: () => void;
    index: number;
  }) => (
    <button
      className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
        isActive ? 'w-10 bg-white' : 'w-2 bg-gray-400'
      }`}
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
    />
  )
);
Dot.displayName = 'Dot';

export default memo(LoginClient);