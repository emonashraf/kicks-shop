import Button from "./Button";

export default function SectionHeading({
  title,
  buttonText,
  buttonLink = "#",
}) {
  return (
    <div className="flex items-end justify-between mb-8">
      <h2 className="max-w-[40%]">{title}</h2>

      {buttonText && (
        <Button text={buttonText} href={buttonLink} />
      )}
    </div>
  );
}
