import { education, languages, skills } from "@/data/portfolio";

function StarRating({ level }: { level: number }) {
  return (
    <span className="tracking-wider text-neutral-900">
      {"★".repeat(level)}
      <span className="text-neutral-300">{"★".repeat(5 - level)}</span>
    </span>
  );
}

export default function AboutSection() {
  return (
    <section className="border-b border-neutral-200 px-6 py-12 md:px-12 md:py-16">
      <div className="grid gap-12 md:grid-cols-3 md:gap-16">
        <div>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Skills
          </h2>
          <ul className="space-y-3">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="font-medium text-neutral-900">
                  {skill.name}
                </span>
                <StarRating level={skill.level} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Education
          </h2>
          <p className="font-medium text-neutral-900">{education.school}</p>
          <p className="mt-1 text-sm text-neutral-500">{education.major}</p>
          <p className="mt-1 text-sm text-neutral-400">{education.period}</p>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Languages
          </h2>
          <ul className="space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="font-medium text-neutral-900">
                  {lang.name}
                </span>
                <StarRating level={lang.level} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
