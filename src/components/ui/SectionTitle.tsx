interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {subtitle && (
        <span className="rotate-[2.4492937051703357e-16rad] text-[rgba(65,129,218,1)] text-sm font-normal leading-loose">
          {subtitle}
        </span>
      )}
      <h2 className="rotate-[2.4492937051703357e-16rad] text-[rgba(75,75,78,1)] text-[38px] font-bold leading-none mt-2.5">
        {title}
      </h2>
    </div>
  );
}