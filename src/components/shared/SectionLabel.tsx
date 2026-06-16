import { cn } from "@/lib/utils";

export default function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center space-x-2 mb-4", className)}>
      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-text-2 font-bold">
        {children}
      </span>
    </div>
  );
}
