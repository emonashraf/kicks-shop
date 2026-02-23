import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo({ options = [], placeholder, className, onChange }) {
  return (
    <Select onValueChange={onChange}>
      <SelectTrigger
        className={`w-fit gap-2 border-0 p-0 text-fluid-20! h-auto! shadow-none 
          outline-none ring-0! focus:ring-0! focus-visible:outline-none 
          [&>svg]:size-6 [&>svg]:opacity-100 ${className}`}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

     
      <SelectContent
        className="z-9999 bg-white border border-gray-200 shadow-xl min-w-28.5 overflow-hidden rounded-md"
        position="popper" 
        sideOffset={4}
      >
        {options.map(({ label, value }) => (
          <SelectItem
            key={value}
            value={value}
            className="cursor-pointer px-4 py-2 focus:bg-gray-100 outline-none"
          >
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}