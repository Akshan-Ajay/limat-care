import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export default function CTAButton({ href, children, variant = "solid", className = "" }: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors";
  const styles = {
    solid: "bg-trust text-paper hover:bg-trust-deep",
    outline: "border border-ink/20 text-ink hover:border-trust hover:text-trust",
    ghost: "text-trust hover:text-trust-deep",
  };
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}
