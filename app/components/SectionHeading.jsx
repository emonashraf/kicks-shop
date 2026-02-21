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
    <div className="flex items-end justify-between mb-8">

      <h2 className={`max-w-153 leading-[.948] ${titleClassName}`}>
        {title}
      </h2>
      <div className={`flex gap-4 items-center ${wrapperClassName}`}>
        {buttonText && (
          <Button text={buttonText} href={buttonLink} />
        )}

        {sliderBtn && (
          <SliderArrowBtn btnClassName={arrowClassName} />
        )}
      </div>
    </div>
  );
}