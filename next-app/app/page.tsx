import Image from "next/image";
import { rubik_mono } from "./fonts";
import { AddBusiness } from "./components/AddBusiness";
import { AddQueuedParty } from "./components/AddQueuedParty";

export default function Home() {
  return (
    <main className="flex flex-1 min-h-dvh flex-col">
      <div>
        <p className={`${rubik_mono.className} text-8xl text-center`}>
          tableturn
        </p>
        <div>
          <AddBusiness />
        </div>
        <div>
          <AddQueuedParty />
        </div>
      </div>
    </main>
  );
}
