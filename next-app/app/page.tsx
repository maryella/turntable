import Image from "next/image";
import { rubik_mono } from "./fonts";
import { AddBusiness } from "./components/AddBusiness";

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
      </div>
    </main>
  );
}
