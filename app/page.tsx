import { i } from "motion/react-client";
import Image from "next/image";
import Content from "@/components/content";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-60px)] w-full mt-20">
      <Content />
    </div>
  );
}
