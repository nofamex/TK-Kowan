import TextTransition, { presets } from "react-text-transition";
import { useState, useEffect } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";

const TEXTS = [
  "Explore Now",
  "Traveling",
  "Beautiful Beach",
  "Brown Cottage",
  "Super Home",
];

export default function HomeText() {
  const [textIndex, setTextIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setTextIndex((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <TextTransition
        springConfig={presets.molasses}
        className="font-semibold text-9xl"
      >
        {TEXTS[textIndex % TEXTS.length]}
      </TextTransition>
      <Link href="#content">
        <BsArrowDownCircle className="animate-bounce w-10 h-10 mt-32 cursor-pointer" />
      </Link>
    </div>
  );
}
