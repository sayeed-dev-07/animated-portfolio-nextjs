import SlideArrowButton from "@/components/ArrowButton";
import TextType from "@/components/TextType";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-y-3 flex-col">
      <div className="text-3xl md:text-5xl w-full h-30 flex items-start justify-center">
        <TextType loop={false} text={`Hello I'm Sayeed Shorif \nFront End web developer.`} />
      </div>
      <div>
        <Link href={'/contact'}>
        <SlideArrowButton />
        </Link>
      </div>
    </div>
  );
}
