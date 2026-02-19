import Button from "./Button";

export default function SectionHeading({
  title,
  buttonText,
  buttonLink = "#",
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">{title}</h2>

      {buttonText && (
        <Button text={buttonText} href={buttonLink} />
      )}
    </div>
  );
}
