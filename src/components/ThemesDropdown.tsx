import Select from "react-select";
import monacoThemes from "monaco-themes/themes/themelist.json";
import { customStyles } from "../constants";

import type { SingleValue } from "react-select";

interface IThemeDropdownProps {
  handleThemeChange: (theme: SingleValue<string>) => void;
  theme: string;
}

const ThemeDropdown = ({ handleThemeChange, theme }: IThemeDropdownProps) => {
  return (
    <Select
      placeholder={`Select Theme`}
      //   options={languageOptions}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      value={theme}
      styles={customStyles}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;
