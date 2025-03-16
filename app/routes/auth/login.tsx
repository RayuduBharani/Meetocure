/// <reference types="vite-plugin-svgr/client" />
import { useState, useEffect, useCallback, memo } from "react";
import { Button } from "~/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Iphone1 from "app/src/assets/iphone1.png";
import Iphone2 from "app/src/assets/iphone2.png";
import Iphone3 from "app/src/assets/iphone3.png";
import Iphone4 from "app/src/assets/iphone4.png";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "~/components/ui/drawer";
import Logo from "app/src/assets/logo.svg?react";

const SLIDE_CLASSNAME = "w-3/4 h-auto max-h-[70vh]";

const LoginPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    duration: 20,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const slides = [
    { key: "iphone1", src: Iphone1 },
    { key: "iphone2", src: Iphone2 },
    { key: "iphone3", src: Iphone3 },
    { key: "iphone4", src: Iphone4 },
  ];

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
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect);
      }
    };
  }, [emblaApi, onSelect]);

  const handleSkip = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="max-w-sm p-6 min-h-dvh flex flex-col justify-between gap-6 sm:rounded-xl bg-[#0A4D6899] relative">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map(({ key, src }) => (
              <Slide key={key}>
                <img src={src} alt={key} className={SLIDE_CLASSNAME} />
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
          {[1, 2, 3, 4].map((_, index) => (
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

      {/* Drawer with custom height */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="absolute inset-x-0 mx-auto flex items-center justify-center max-w-sm min-h-[65%] rounded-t-xl bg-white border-none">
          <DrawerHeader className="flex w-full flex-col gap-6 items-center justify-center">
            <Logo />
            <DrawerTitle className="text-[#0A4D68] font-bold tracking-wide text-xl">
              Let’s get started
            </DrawerTitle>
          </DrawerHeader>
          <div className="w-full flex justify-center items-center flex-col gap-4">
            <p className="text-black text-sm font-medium">Choose your role</p>
          </div>
          <DrawerFooter>
            <Button onClick={() => setIsDrawerOpen(false)}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

const Slide = memo(({ children }: { children: React.ReactNode }) => (
  <div className="flex-[0_0_100%] flex justify-center">{children}</div>
));

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
        isActive ? "w-10 bg-white" : "w-2 bg-gray-400"
      }`}
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
    />
  )
);

export default memo(LoginPage);
