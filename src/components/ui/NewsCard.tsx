interface NewsCardProps {
  image: string;
  title: string;
  className?: string;
  size?: 'large' | 'small';
}

export function NewsCard({ image, title, className = "", size = 'small' }: NewsCardProps) {
  return (
    <article className={`flex flex-col ${className}`}>
      <img
        loading="lazy"
        srcSet={image}
        className={`object-contain w-full rounded-md ${
          size === 'large' ? 'aspect-[1.77]' : 'aspect-[1.75]'
        }`}
        alt={title}
      />
      <h3 className={`rotate-[2.4492937051703357e-16rad] text-[rgba(124,124,126,1)] ${
        size === 'large' 
          ? 'text-xl font-bold leading-[30px] mt-[19px]' 
          : 'text-[17px] leading-[26px] mt-[18px]'
      }`}>
        {title}
      </h3>
      <div className="rotate-[2.4492937051703357e-16rad] text-[rgba(147,147,153,1)] text-sm leading-loose mt-[17px]">
        READ MORE
      </div>
    </article>
  );
}