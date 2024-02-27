import { banner } from "../constants/banner";

export default function Banner() {
  return (
    <div>
      <img
        src={banner.image}
        alt={banner.title}
        className="w-[730px] h-[300px]"
      />
      <div className="flex justify-between mt-[30px]">
        <div className="font-extrabold w-[350px] h-[182px] text-xl">
          {banner.title}
        </div>
        <div className="flex flex-col w-[350px] h-[181px] ml-[30px] text-gun-metal text-body">
          <div>{banner.description}</div>
          <button className="bg-light-vermillion w-[185px] h-[48px] text-almost-white mt-[29px] font-bold text-[14px] leading-[24px] tracking-[4.38px]">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
}
