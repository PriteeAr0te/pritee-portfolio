"use client";

import Timeline from "@/components/ui/Timeline";

export default function Home() {

  return (
    <section className="w-full flex flex-col items-center justify-center text-center">

      <p className="mt-10 text-lg border border-white rounded-xl py-4 px-6 max-w-xl">
        This is the dummy home page.
      </p>

      <Timeline/>
    </section>
  );
}
