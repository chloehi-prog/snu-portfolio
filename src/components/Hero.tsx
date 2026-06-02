import { profile } from "@/data/portfolio";

export default function Hero() {
  const marqueeText = profile.keywords.join(" + ") + " +";

  return (
    <section className="border-b border-neutral-200 px-6 pb-16 pt-4 md:px-12 md:pb-24 md:pt-8">
      <div className="overflow-hidden">
        <h1 className="animate-marquee whitespace-nowrap text-[clamp(3rem,12vw,8rem)] font-bold leading-[0.95] tracking-tight text-neutral-900">
          {marqueeText} {marqueeText}
        </h1>
      </div>

      <div className="mt-12 flex flex-col gap-8 md:mt-16 md:flex-row md:items-end md:justify-between">
        <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 md:text-xl">
          {profile.bio}
        </p>
        <a
          href="#about"
          aria-label="소개 섹션으로 이동"
          className="flex h-12 w-12 shrink-0 items-center justify-center self-end border border-neutral-300 transition-colors hover:border-neutral-900 md:self-auto"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 3v10M8 13l-4-4M8 13l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
