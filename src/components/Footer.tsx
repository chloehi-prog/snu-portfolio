import { contact, profile } from "@/data/portfolio";

const footerLinks = [
  { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
  { label: "Phone", href: `tel:${contact.phone}`, value: contact.phone },
  {
    label: "Location",
    href: "#",
    value: profile.location,
  },
];

export default function Footer() {
  const marqueeText = "Let's connect ";

  return (
    <footer className="px-6 pb-8 pt-16 md:px-12 md:pb-12 md:pt-24">
      <div className="overflow-hidden border-t border-neutral-200 pt-16">
        <div className="overflow-hidden">
          <p className="animate-marquee-slow whitespace-nowrap text-[clamp(2.5rem,10vw,6rem)] font-bold leading-none tracking-tight text-neutral-900">
            {marqueeText.repeat(8)}
          </p>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between border-b border-neutral-200 py-5 transition-colors hover:bg-neutral-50"
          >
            <span className="text-sm font-medium text-neutral-900">
              {link.label}
            </span>
            <span className="text-sm text-neutral-500 transition-colors group-hover:text-neutral-900">
              {link.value}
            </span>
          </a>
        ))}
      </div>

      <p className="mt-8 text-right text-xs text-neutral-400">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
