"use client";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="container mx-auto min-h-[85vh] flex flex-col justify-center py-12 gap-8 px-4">
      {/* Top loader bar with Loader2 spinner */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-[#232329]/30 border border-white/5 p-6 rounded-2xl gap-4 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="bg-accent/15 p-3 rounded-xl">
            <Loader2 className="h-8 w-8 animate-spin text-accent" />
          </div>
          <div>
            <h3 className="text-white font-bold tracking-wide text-lg">Initializing Portfolio</h3>
            <p className="text-white/40 text-xs mt-0.5">Fetching and compiling interactive components...</p>
          </div>
        </div>
        {/* Mock search/action block */}
        <div className="h-10 w-44 bg-white/5 rounded-full border border-white/5"></div>
      </div>

      {/* Grid containing skeleton sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left heavy skeleton container (Profile/Navigation panel) */}
        <div className="bg-[#232329]/20 border border-white/5 p-8 rounded-2xl flex flex-col gap-6 animate-pulse">
          <div className="flex flex-col items-center gap-4 border-b border-white/5 pb-6">
            <div className="w-24 h-24 rounded-full bg-white/10"></div>
            <div className="h-6 w-32 bg-white/10 rounded-md"></div>
            <div className="h-4 w-44 bg-white/10 rounded-md"></div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-4 w-full bg-white/10 rounded-md"></div>
            <div className="h-4 w-5/6 bg-white/10 rounded-md"></div>
            <div className="h-4 w-2/3 bg-white/10 rounded-md"></div>
          </div>
        </div>

        {/* Right larger skeleton container (dashboard grid) spanning 2 columns */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* 2 columns grid inside */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-[#232329]/20 border border-white/5 p-6 rounded-xl flex flex-col justify-between min-h-[160px] animate-pulse"
              >
                <div className="flex justify-between items-start">
                  <div className="h-5 w-24 bg-white/10 rounded-md"></div>
                  <div className="h-8 w-8 bg-white/10 rounded-full"></div>
                </div>
                <div className="h-12 w-full bg-white/5 rounded-md mt-4"></div>
                <div className="h-3 w-16 bg-white/10 rounded-md mt-2 self-end"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
