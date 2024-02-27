import { banner } from "../constants/banner";

export default function Banner() {
  return (
    <div>
      <img
        src={banner.image}
        alt={banner.title}
        className="h-[300px] w-[730px]"
      />
      <div className="mt-[30px] flex justify-between">
        <div className="h-[182px] w-[350px] text-xl font-extrabold">
          {banner.title}
        </div>
        <div className="ml-[30px] flex h-[181px] w-[350px] flex-col text-body text-gun-metal">
          <div>{banner.description}</div>
          <button className="mt-[29px] h-[48px] w-[185px] bg-light-vermillion text-[14px] font-bold leading-[24px] tracking-[4.38px] text-almost-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
