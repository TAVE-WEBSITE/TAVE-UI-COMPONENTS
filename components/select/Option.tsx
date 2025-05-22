import React, { useContext } from "react";
import FlexBox from "../layout/FlexBox";
import { SelectContext } from "./Select";

interface OptionProps<T> {
  value: T;
  displayValue?: React.ReactNode; // 문자열 외 값도 허용
}

const Option = <T,>({ value, displayValue }: OptionProps<T>) => {
  const selectContext = useContext(SelectContext);
  if (!selectContext) throw new Error("Option must be used within Select");

  const { selectedValue, setSelectedValue, setIsOpen } = selectContext;

  const handleSelectOption = (val: T) => {
    setSelectedValue(val);
    setIsOpen(false);
  };

  const isSelected = selectedValue === value;

  return (
    <li
      className="bg-white flex gap-4 p-4 hover:bg-gray-50"
      onClick={() => handleSelectOption(value)}
    >
      {isSelected ? (
        <>
          <FlexBox className="justify-center items-center border-2 border-[#4584EE] rounded-full w-5 h-5">
            <img src="/circle.svg" alt="option" width={10} height={10} />
          </FlexBox>
          {displayValue ?? String(value)}
        </>
      ) : (
        <>
          <div className="justify-center items-center border-2 border-[#E5E7EB] rounded-full w-5 h-5" />
          {displayValue ?? String(value)}
        </>
      )}
    </li>
  );
};

export default Option;
