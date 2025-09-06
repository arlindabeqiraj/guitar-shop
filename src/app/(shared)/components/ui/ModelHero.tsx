"use client";

import Image from "next/image";
import Link from "next/link";

type Specs = {
  bodyWood: string;
  neckWood: string;
  fingerboardWood: string;
  pickups: string;
  tuners: string;
  scaleLength: string;
  bridge: string;
};

type Musician = {
  name: string;
  musicianImage: string;
  bands: string[];
};

type Model = {
  id: string;
  name: string;
  type: string;
  image: string;
  description: string;
  price: number;
  specs: Specs;
  musicians: Musician[];
};

export default function ModelHero({
  brandId,
  model,
}: {
  brandId: string;
  model: Model;
}) {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-10 py-16">
      <Link
        href={`/brands/${brandId}`}
        className="text-sm text-gray-500 hover:underline absolute top-20 left-12 z-20"
      >
        ← Back To List
      </Link>

      <div className="max-w-xl text-left flex flex-col justify-center mt-10">
        <h1 className="text-6xl font-semibold mt-24 ml-36 justify-center">
          {model.name}
        </h1>
      </div>

      <div className="absolute top-0 right-0 h-[430px] w-[630px]">
        <div className="relative h-full w-full overflow-hidden rounded-bl-[180px]">
          <Image
            src="/images/bg-orange.png"
            alt="Background Orange"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={model.image}
              alt={model.name}
              width={400}
              height={250}
              className="object-contain -rotate-45"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
