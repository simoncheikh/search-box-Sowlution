import type { SearchBoxProps } from "./SearchBox.type"

export const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
        className="border-gray-300 border-solid border-2 bg-white w-[45%] p-1 rounded-[5px] focus:border-blue-500 outline-none"
      />
    </div>
  )
}
