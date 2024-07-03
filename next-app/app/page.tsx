"use client";
import { rubik_mono } from "./fonts";
import { AddBusiness } from "./components/AddBusiness";
import { AddQueuedParty } from "./components/AddQueuedParty";
import { Queue } from "./components/Queue";
import { useState } from "react";

const buttonBasic = "p-4 border-red-600 border-2";
const activeButtonStyle = "bg-red-600";
const inactiveButtonStyle = "border-red-600 border-2";

export default function Home() {
  const [mode, setMode] = useState<"guest" | "manager">("guest");
  return (
    <main className="flex flex-1 min-h-dvh flex-col">
      <div className="flex justify-center">
        <button
          className={`${buttonBasic} ${
            mode === "manager" ? activeButtonStyle : undefined
          } rounded-l`}
          onClick={() => setMode("manager")}
        >
          Restaurant
        </button>
        <button
          className={`${buttonBasic} ${
            mode === "guest" ? activeButtonStyle : undefined
          } rounded-r`}
          onClick={() => setMode("guest")}
        >
          Guest
        </button>
      </div>

      <div className="flex flex-1 flex-col border-2">
        <div>
          <p className={`${rubik_mono.className} text-3xl`}>tableturn</p>
        </div>
        <div className="w-1/2 self-center">
          <Queue />
          {mode === "manager" ? (
            <div className="flex flex-1 mt-16 border-2 border-red-800 ">
              <AddQueuedParty />
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
