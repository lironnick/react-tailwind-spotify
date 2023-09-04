import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>

            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">
            Good AfTernoon
          </h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <Image
                src="/album.jpeg"
                alt="album"
                width={104}
                height={104}
              />
              <strong>Titulo do album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className="font-semibold text-2xl mt-10">
            Made for Tiago Henrique
          </h1>

          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                src="/album.jpeg"
                alt="album"
                className="w-full"
                width={120}
                height={120}
              />
              <strong className="font-semibold">Dailey Mix 1</strong>
              <span className="text-xs text-zinc-400">
                Wallows, Coin, girl in red and mode
              </span>
            </a>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
