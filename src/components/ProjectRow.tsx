import type { WorkExperience } from "@/data/portfolio";

type ProjectRowProps = {
  project: WorkExperience;
};

function DeviceMockup({ project }: { project: WorkExperience }) {
  const isDark = project.bgColor === "#1e293b";

  return (
    <div
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-sm"
      style={{ backgroundColor: project.bgColor }}
    >
      <div
        className={`relative flex h-[70%] w-[45%] flex-col overflow-hidden rounded-lg shadow-2xl ${
          isDark ? "bg-neutral-900" : "bg-white"
        }`}
      >
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: project.accentColor }}
        />
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div
            className={`h-2 w-2/3 rounded-full ${isDark ? "bg-neutral-700" : "bg-neutral-200"}`}
          />
          <div
            className={`h-2 w-1/2 rounded-full ${isDark ? "bg-neutral-700" : "bg-neutral-200"}`}
          />
          <div
            className="mt-auto h-16 w-full rounded-md opacity-60"
            style={{ backgroundColor: project.accentColor }}
          />
        </div>
      </div>
    </div>
  );
}

export default function ProjectRow({ project }: ProjectRowProps) {
  return (
    <article className="border-b border-neutral-200 px-6 py-12 md:px-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <h2 className="text-xl font-bold text-neutral-900 md:text-2xl">
            {project.company}
          </h2>
          <p className="mt-1 text-sm text-neutral-500">{project.role}</p>
          <p className="mt-1 text-sm text-neutral-400">{project.period}</p>
        </div>

        <div>
          <div className="mb-6 flex items-start justify-between gap-4">
            <p className="max-w-lg text-base leading-relaxed text-neutral-600 md:text-lg">
              {project.description}
            </p>
            <span
              className="shrink-0 text-neutral-400"
              aria-hidden="true"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5 15L15 5M15 5H8M15 5V12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <DeviceMockup project={project} />
        </div>
      </div>
    </article>
  );
}
