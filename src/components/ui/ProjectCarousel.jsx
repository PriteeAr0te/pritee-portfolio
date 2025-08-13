import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ProjectCarousel({ images }) {
    return (
        <Carousel
            opts={{ loop: true, align: "start" }}
            className="w-full relative"
        >
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index} className="">
                        <div className="overflow-hidden">
                            <div className="flex items-start justify-center">
                                <Image
                                    src={src}
                                    alt={`Project Image ${index + 1}`}
                                    width={400}
                                    height={180}
                                    quality={100}
                                    className="object-contain w-full h-auto"
                                />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute cursor-pointer border border-gray-900 left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute cursor-pointer border border-gray-900 right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
    );
}
