"use client";

import { gql, useQuery } from "@apollo/client";
import { use } from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import LoadingMessage from "../../../../(shared)/components/ui/LoadingMessage";
import ErrorMessage from "../../../../(shared)/components/ui/ErrorMessage";
import ModelHero from "../../../../(shared)/components/ui/ModelHero";
import ModelSpecs from "../../../../(shared)/components/ui/ModelSpecs";
import ModelMusicians from "../../../../(shared)/components/ui/ModelMusicians";

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

const MODEL_QUERY = gql`
  query GetModel($brandId: ID!, $modelId: ID!) {
    findUniqueModel(brandId: $brandId, modelId: $modelId) {
      id
      name
      type
      image
      description
      price
      specs {
        bodyWood
        neckWood
        fingerboardWood
        pickups
        tuners
        scaleLength
        bridge
      }
      musicians {
        name
        musicianImage
        bands
      }
    }
  }
`;

export default function ModelDetailsPage({
  params,
}: {
  params: Promise<{ brandId: string; modelId: string }>;
}) {
  const { brandId, modelId } = use(params);
  const { t } = useTranslation("common");

  const { data, loading, error } = useQuery<{ findUniqueModel: Model }>(
    MODEL_QUERY,
    { variables: { brandId, modelId } }
  );

  const [activeTab, setActiveTab] = useState<"specs" | "musicians">("specs");
  const [page, setPage] = useState(0);

  if (loading) return <LoadingMessage message={t("loading.model")} />;
  if (error)
    return (
      <ErrorMessage message={t("error.general", { error: error.message })} />
    );

  const model = data?.findUniqueModel;
  if (!model) return <ErrorMessage message={t("error.notfound.model")} />;

  return (
    <main className="pb-40">
      <ModelHero brandId={brandId} model={model} />

      <div className="mt-40 flex justify-between border-b border-gray-300 px-100">
        <button
          className={`px-6 py-3 transition-colors ${
            activeTab === "specs"
              ? "text-orange-500 font-bold border-b-2 border-orange-500"
              : "text-gray-400 font-normal border-b-2 border-transparent"
          }`}
          onClick={() => setActiveTab("specs")}
        >
          {t("tabs.specs")}
        </button>

        <button
          className={`px-6 py-3 transition-colors ${
            activeTab === "musicians"
              ? "text-orange-500 font-bold border-b-2 border-orange-500"
              : "text-gray-400 font-normal border-b-2 border-transparent"
          }`}
          onClick={() => setActiveTab("musicians")}
        >
          {t("tabs.musicians")}
        </button>
      </div>

      <div className="mt-20 px-2 md:px-6">
        {activeTab === "specs" && <ModelSpecs model={model} />}
        {activeTab === "musicians" && (
          <ModelMusicians
            musicians={model.musicians}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </main>
  );
}
