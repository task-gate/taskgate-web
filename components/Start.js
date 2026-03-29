import Image from "next/image";
import StoreDownloadRow from "@/components/StoreDownloadRow.client";

export default function Start() {
  return (
    <section className="relative w-full bg-[#080c14] text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[80px]" />
      </div>

      <article className="relative z-20 container mx-auto py-20 px-5 md:px-[5%] 2xl:px-0 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-8 items-center md:items-start justify-center max-w-xl">
          <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase">
            Get Started Today
          </p>
          <h2 className="text-h3 lg:text-h4 font-bold text-center md:text-left leading-tight text-white">
            Transform Your Digital Life.
            <br />
            <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
              Your Conscious Journey
            </span>
            <br />
            Begins with TaskGate.
          </h2>
          <p className="text-white/65 text-base leading-relaxed text-center md:text-left">
            Download the app and take your first step toward intentional digital
            habits. It only takes a moment to change how you relate to your
            phone.
          </p>
          <StoreDownloadRow className="justify-center md:justify-start" />
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/mock/mock8.png"
            alt="TaskGate App"
            width={300}
            height={600}
            className="w-auto h-auto max-w-[260px] md:max-w-[300px] drop-shadow-2xl"
          />
        </div>
      </article>
    </section>
  );
}
