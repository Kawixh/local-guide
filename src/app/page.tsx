import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import homeImage from "../images/home-1.jpg";
import { _metadata } from "./metadata";

export const metadata = _metadata;

const mainCategories = [
  {
    name: "Restaurants",
    href: "/app/categories/restaurants",
  },
  {
    name: "Hotels",
    href: "/app/categories/hotels",
  },
  {
    name: "Attractions",
    href: "/app/categories/attractions",
  },
  {
    name: "Shopping",
    href: "/app/categories/shopping",
  },
  {
    name: "Services",
    href: "/app/categories/services",
  },
];

export default function Home() {
  return (
    <div className="font-funnel mt-16">
      <div className="grid md:grid-cols-7 gap-4 text-black">
        <BlurFade className="col-span-5" delay={0.25 + 0 * 0.05} inView>
          <div className="p-12 flex flex-col gap-9 bg-white rounded-3xl">
            <h3 className="font-medium">REAL REVIEWS, REAL EXPERIENCES</h3>

            <TextAnimate
              className="text-6xl tracking-wider leading-[4.5rem] font-extrabold"
              animation="blurInUp"
              by="word"
              delay={0.25 + 4 * 0.05}
              once
            >
              DISCOVER THE BEST, EXPERIENCE THE AUTHENTIC
            </TextAnimate>

            <div className="flex items-center gap-4">
              <Link
                href="/app"
                className="text-white flex items-center gap-2 bg-black p-2 rounded-full"
              >
                <div className="text-black text-xl bg-white rounded-full p-1">
                  <GoArrowUpRight />
                </div>
                <span className="pr-2">FIND YOUR NEXT SPOT</span>
              </Link>
            </div>
          </div>
        </BlurFade>

        <BlurFade
          className="col-span-2 md:block hidden"
          delay={0.25 + 1 * 0.05}
          inView
        >
          <div className="h-[100%] w-[100%] relative">
            <Image
              src={homeImage}
              alt="image of traveller"
              fill
              priority
              className="rounded-3xl overflow-hidden object-cover"
            />

            <h3 className="z-10 absolute bottom-0 left-0 p-8 pb-12 text-white text-2xl font-bold">
              EXPLORE AT YOUR OWN PACE
            </h3>
          </div>
        </BlurFade>

        <BlurFade className="col-span-5" delay={0.25 + 3 * 0.05} inView>
          <div className="bg-green-50 rounded-3xl h-full items-center justify-center flex gap-2 flex-wrap p-3">
            {mainCategories.map((category) => (
              <Button
                key={category.name}
                variant="outline"
                className="rounded-full "
              >
                <Link href={category.href}>{category.name}</Link>
              </Button>
            ))}
          </div>
        </BlurFade>

        <BlurFade
          className="col-span-5 md:col-span-2 w-full"
          delay={0.25 + 2 * 0.05}
          inView
        >
          <div className="bg-rose-200 rounded-3xl">
            <div className="flex flex-col gap-10 items-center justify-between p-12">
              <h3 className="font-medium">SHARE YOUR REVIEW & GUIDE OTHERS</h3>

              <div className="flex items-center gap-4">
                <Link
                  href="/app"
                  className="text-white relative flex items-center gap-2 bg-black p-2 rounded-full"
                >
                  <div className="text-black text-xl bg-white rounded-full p-1">
                    <GoArrowUpRight />
                  </div>
                  <span className="pr-2">SHARE YOUR REVIEW</span>
                  <BorderBeam
                    duration={6}
                    size={70}
                    className="from-transparent via-red-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={70}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </Link>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
