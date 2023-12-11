import Select from "react-select";
import { customStyles, languageOptions } from "../constants";

import type { SingleValue } from "react-select";
import type { LanguageOption } from "../types";

interface ILanguagesDropdownProps {
  onSelectChange: (selectedOption: SingleValue<LanguageOption>) => void;
}

const LanguagesDropdown = ({ onSelectChange }: ILanguagesDropdownProps) => {
  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles}
      defaultValue={languageOptions[0]}
      onChange={(selectedOption) => onSelectChange(selectedOption)}
    />
  );
};

export default LanguagesDropdown;
