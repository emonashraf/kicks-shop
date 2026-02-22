import Button from "./Button";
import SliderArrowBtn from "./SliderArrowBtn";

export default function SectionHeading({
  title,
  buttonText,
  buttonLink = "#",
  sliderBtn,
  titleClassName = "",
  wrapperClassName = "",
  arrowClassName = "",
}) {
  return (
    <div className="flex gap-2 items-end justify-between mb-8">

      <h2 className={`capitalize sm:uppercase max-w-100 sm:max-w-120 md:max-w-135 lg:max-w-145 xl:max-w-153 leading-[.948] ${titleClassName}`}>
        {title}
      </h2>
      <div className={`flex gap-4 items-center ${wrapperClassName}`}>
        {buttonText && (
          <Button text={buttonText} href={buttonLink} className="w-max" />
        )}

        {sliderBtn && (
          <SliderArrowBtn btnClassName={arrowClassName} />
        )}
      </div>
    </div>
  );
}