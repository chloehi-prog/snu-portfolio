import { profile, contact } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <div className="text-sm font-medium tracking-wide text-neutral-900">
        {profile.name}
      </div>
      <a
        href={`mailto:${contact.email}`}
        className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
      >
        {contact.email}
      </a>
    </header>
  );
}
