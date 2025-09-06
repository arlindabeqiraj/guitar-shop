"use client";

type Specs = {
  bodyWood: string;
  neckWood: string;
  fingerboardWood: string;
  pickups: string;
  tuners: string;
  scaleLength: string;
  bridge: string;
};

type Model = {
  description: string;
  specs: Specs;
};

export default function ModelSpecs({ model }: { model: Model }) {
  return (
    <div className="text-left px-4 md:px-22">
      <p className="text-gray-700 leading-relaxed mb-8 text-lg text-justify">
        {model.description}
      </p>
      <ul className="list-disc list-inside space-y-2 text-black">
        <li>Body Wood: &quot;{model.specs.bodyWood}&quot;</li>
        <li>Neck Wood: &quot;{model.specs.neckWood}&quot;</li>
        <li>Fingerboard: &quot;{model.specs.fingerboardWood}&quot;</li>
        <li>Pickups: &quot;{model.specs.pickups}&quot;</li>
        <li>Tuners: &quot;{model.specs.tuners}&quot;</li>
        <li>Scale Length: &quot;{model.specs.scaleLength}&quot;</li>
        <li>Bridge: &quot;{model.specs.bridge}&quot;</li>
      </ul>
    </div>
  );
}
