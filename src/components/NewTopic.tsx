interface NewTopicProps {
  topic: string;
  description: string;
}

export default function NewTopic({ topic, description }: NewTopicProps) {
  return (
    <div className="w-[302px] h-[84px] mt-[31px]">
      <div className="font-bold text-s text-almost-white">{topic}</div>
      <div className="mt-[8px] text-body text-silver">{description}</div>
    </div>
  );
}
