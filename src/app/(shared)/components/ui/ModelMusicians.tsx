"use client";

import Image from "next/image";

type Musician = {
  name: string;
  musicianImage: string;
  bands: string[];
};

export default function ModelMusicians({
  musicians,
  page,
  setPage,
}: {
  musicians: Musician[];
  page: number;
  setPage?: (page: number) => void;
}) {
  const musiciansPerPage = 2;
  const totalPages = Math.ceil(musicians.length / musiciansPerPage);
  const visibleMusicians = musicians.slice(
    page * musiciansPerPage,
    page * musiciansPerPage + musiciansPerPage
  );

  return (
    <div className="flex flex-col items-center">
      {musicians && musicians.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {visibleMusicians.map((m: Musician, idx: number) => (
              <div
                key={idx}
                className="flex flex-col bg-[#FFEFE8] rounded-md shadow-sm 
                w-[380px] h-[480px] overflow-hidden mx-auto"
              >
                {/* Fotoja */}
                <div className="w-full h-[400px] p-4">
                  <Image
                    src={m.musicianImage}
                    alt={m.name}
                    width={360}
                    height={360}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Emri */}
                <div className="h-[80px] flex items-center justify-center text-center">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination */}
          {totalPages > 1 && (
            <div className="flex space-x-3 mt-6">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage?.(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    page === idx ? "bg-[#FF6428]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-gray-500 mt-10">
          No musicians available for this model.
        </p>
      )}
    </div>
  );
}
