"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

/**
 * A hook that triggers a callback when a click occurs outside of the referenced element.
 * * @param callback - The function to execute on an outside click.
 * @returns A React ref to be attached to the element you want to monitor.
 * * @example
 * const ref = useOutsideClick(() => setIsOpen(false));
 * return <div ref={ref}>Click outside me!</div>;
 */

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};

const LayoutCards = () => {
  const [current, setCurrent] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));
  return (
    <div className="relative min-h-screen bg-gray-100 py-10 text-black">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"
        ></motion.div>
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto h-125 w-72 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.src}
            alt={current.title}
            className="aspect-square h-60 rounded-xl"
          />
          <div className="flex flex-col items-start justify-between">
            <div className="flex w-full items-start justify-between gap-2 py-4">
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="text-xs font-bold tracking-tight text-black"
                >
                  {current.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${current.title}`}
                  className="text-xs2 text-neutral-500"
                >
                  {current.descrption}
                </motion.p>
              </div>
              <motion.div layoutId={`card-cta-${current.title}`}>
                <Link
                  href={current.ctaLink}
                  className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
                >
                  {current.ctaText}
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ filter: "blur(10px)", opacity: 0 }}
              animate={{ filter: "blur(0px)", opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="h-50 overflow-auto mask-[linear-gradient(to_top,transparent_20%,black_60%)] pb-20"
            >
              {current.content()}
            </motion.div>
          </div>
        </motion.div>
      )}
      <div className="mx-auto flex max-w-lg flex-col gap-10">
        {cards.map((card: Card) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={card.title}
            className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-4"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.src}
                alt={card.title}
                className="aspect-square h-14 rounded-lg"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="text-xs font-bold tracking-tight text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`}
                  className="text-xs2 text-neutral-500"
                >
                  {card.descrption}
                </motion.p>
              </div>
            </div>
            <motion.div
              layoutId={`card-cta-${card.title}`}
              className="rounded-full bg-green-500 px-2 py-1 text-xs text-white"
            >
              {card.ctaText}
            </motion.div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

type Card = {
  descrption: string;
  title: string;
  src: string;
  ctaText: string;
  ctaLink: string;
  content: () => React.ReactNode;
};

const cards: Card[] = [
  {
    descrption: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=nVjsGKrE6E8",
    content: () => {
      return (
        <p className="text-xs2 text-neutral-500">
          Lana Del Rey has carved out a singular space in modern pop culture by
          blending cinematic nostalgia with the gritty realities of tragic
          romance and the American Dream. Her music often feels like a fever
          dream of 1950s Americana, characterized by sweeping orchestral
          arrangements, sultry vocal deliveries, and lyrics that dance between
          glamour and melancholia. <br /> <br />
          With an aesthetic that draws heavily from Old Hollywood starlets and
          surf culture, she has become a definitive icon for a generation
          captivated by her "sad girl" persona and her ability to turn
          heartbreak into high art.{" "}
        </p>
      );
    },
  },
  {
    descrption: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-xs2 text-neutral-500">
          Babbu Maan stands as a towering figure in Punjabi music, revered for
          his raw, soulful voice and his refusal to conform to mainstream
          commercial trends. Unlike many of his contemporaries, Maan writes,
          composes, and produces his own work, often infusing his lyrics with
          profound social commentary, rural grit, and the complexities of human
          emotion. <br /> <br />
          His massive, cult-like following stems from this perceived
          authenticity, as he effortlessly transitions from high-energy bhangra
          beats to hauntingly poetic ballads that resonate deeply with the
          struggles and pride of the common man.
        </p>
      );
    },
  },
  {
    descrption: "Metallica",
    title: "For whone the bell tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-xs2 text-neutral-500">
          Metallica remains the definitive titan of heavy metal, having evolved
          from the aggressive, breakneck speeds of the 1980s thrash scene into a
          global stadium-filling phenomenon. Their sound is built on the
          foundation of James Hetfield's iron-chugging rhythm guitar and Lars
          Ulrich's propulsive drumming, creating a sonic landscape that is as
          technically complex as it is viscerally powerful.
          <br /> <br />
          Beyond the distorted riffs and thunderous percussion, the band is
          celebrated for bringing a level of lyrical depth and melodic
          sophistication to the genre, proving that metal could be both
          commercially massive and intellectually demanding without losing its
          jagged edge.
        </p>
      );
    },
  },
  {
    descrption: "Led Zeppelin",
    title: "Stairway to Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-xs2 text-neutral-500">
          Led Zeppelin is often cited as the ultimate architects of hard rock,
          masterfully fusing heavy blues, Celtic folk, and mystical lyricism
          into a sound that redefined the scale of modern music. The band’s
          chemistry was a perfect storm of Jimmy Page’s innovative, layered
          guitar production, Robert Plant’s soaring and ethereal vocals, and the
          thunderous, intricate rhythmic foundation provided by John Paul Jones
          and John Bonham.
          <br /> <br />
          Their legacy is defined by an unparalleled sense of dynamics, shifting
          effortlessly from delicate acoustic interludes to some of the most
          iconic, earth-shaking riffs ever recorded, cementing their status as
          the gold standard for rock gods.
        </p>
      );
    },
  },
  {
    descrption: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p className="text-xs2 text-neutral-500">
          Mustafa Zahid is widely recognized as the powerhouse voice behind the
          Pakistani rock band Roxen, bringing a distinctively edgy and emotional
          depth to the South Asian music scene. He gained massive cross-border
          fame through his contributions to Bollywood soundtracks, where his
          signature raspy vocals and high-octane delivery became synonymous with
          intense, melancholic anthems of longing and passion.
          <br /> <br />
          His ability to blend the raw energy of Sufi-rock with contemporary pop
          sensibilities has allowed him to sustain a career defined by
          soul-stirring melodies that resonate long after the final note
          fades.{" "}
        </p>
      );
    },
  },
];
export default LayoutCards;
