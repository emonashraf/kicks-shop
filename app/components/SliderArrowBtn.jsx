import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SliderArrowBtn({
  btnClassName = "",
}) {
  const baseBtnStyle = "w-10 h-10 cursor-pointer rounded-lg bg-white text-dark-gray flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-100 disabled:bg-[#E7E7E3]";

  return (
    <div className={`flex gap-4 `}>
      {/* Previous Button */}
      <button className={`prev-btn ${baseBtnStyle} ${btnClassName}`}>
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button className={`next-btn ${baseBtnStyle} ${btnClassName}`}>
        <ChevronRight size={24} />
      </button>
    </div>
  );
}