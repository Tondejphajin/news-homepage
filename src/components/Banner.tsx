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
        <div className="font-extrabold w-[350px] h-[182px] text-6xl">
          {banner.title}
        </div>
        <div className="flex flex-col w-[350px] h-[181px] ml-[30px]">
          <div>{banner.description}</div>
          <button className="bg-light-vermillion w-[185px] h-[48px] text-almost-white mt-[29px]">
            Reader More
          </button>
        </div>
      </div>
    </div>
  );
}
