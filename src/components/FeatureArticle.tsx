interface FeatureArticleProps {
  number: number;
  image: string;
  title: string;
  description: string;
  alt: string;
}

export default function FeatureArticle({
  number,
  image,
  title,
  description,
  alt,
}: FeatureArticleProps) {
  return (
    <div className="flex">
      <img src={image} alt={alt} className="h-[127px] w-[100px]" />
      <div className="ml-[24px] flex h-[129px] w-[226px] flex-col">
        <div className="text-m font-bold text-silver">{"0" + number}</div>
        <div className="mt-[12px] text-xs font-extra-bold">{title}</div>
        <div className="mt-[9px] text-body text-gun-metal">{description}</div>
      </div>
    </div>
  );
}
