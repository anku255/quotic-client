import React from "react";
import Select from "react-select";

const CustomDropdownIndicator = ({ isFocused }: { isFocused: boolean }) => {
  return (
    <div className="mr-2">
      {isFocused ? (
        // prettier-ignore
        <svg  className="w-4 h-4 text-aliceBlue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </svg>
      ) : (
        // prettier-ignore
        <svg className="w-4 h-4 text-baliHai" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      )}
    </div>
  );
};

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  defaultValue?: Option;
  value?: Option | undefined;
  label: string;
  options: Array<Option>;
  placeholder: string;
  onChange?: (o: Option) => void;
}

export const SelectField = ({
  defaultValue,
  label,
  options,
  placeholder,
  value,
  onChange,
}: SelectProps): JSX.Element => {
  return (
    <div className="">
      <Select
        placeholder={placeholder}
        defaultValue={defaultValue}
        label={label}
        options={options}
        value={value}
        onChange={onChange as any}
        classNamePrefix="react-select"
        className="react-select"
        components={{ DropdownIndicator: CustomDropdownIndicator }}
      />
      <style jsx global>{`
        :root {
          --zircon: #fcfdff;
          --baliHai: #869bb3;
          --blackRussian: #000024;
          --aliceBlue: #eff7ff;
          --baliHai-50: #869bb31a;
          --radicalRed: #fc2d52;
          --white: white;
          --shadow: 0px 10px 20px #0000241a;
        }

        .react-select {
          height: 35px;
        }

        .react-select .react-select__control {
          border: none;
          border-radius: 8px;
          background: var(--aliceBlue);
          box-shadow: none;
          color: var(--white);
        }

        .react-select .react-select__control--is-focused {
          border: none;
          border-radius: 8px;
          background: var(--baliHai);
        }

        .react-select .react-select__indicator-separator {
          display: none;
        }

        .react-select__input {
          color: var(--white);
        }

        .react-select__control--is-focused .react-select__single-value {
          color: var(--white);
        }

        .react-select__placeholder,
        .react-select__single-value {
          color: var(--baliHai);
          font-size: 12px;
          letter-spacing: 1.2px;
          line-height: 18;
          text-transform: uppercase;
          font-weight: bold;
        }

        .react-select__control--is-focused .react-select__placeholder {
          color: var(--white);
        }

        .react-select__control--is-focused .react-select__single-value {
          color: var(--white);
        }

        .react-select__indicator.react-select__dropdown-indicator {
          color: var(--baliHai);
        }

        .react-select__control--is-focused .react-select__dropdown-indicator {
          color: var(--white);
        }

        .react-select__menu {
          box-shadow: var(--shadow);
        }

        .react-select__menu .react-select__menu-list {
          padding: 0;
        }

        .react-select__option {
          padding: 10px 0;
          text-align: center;
        }

        .react-select__option:first-child {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .react-select__option:last-child {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .react-select__option .react-select__option--is-focused {
          background: var(--aliceBlue);
        }

        .react-select__option.react-select__option--is-selected {
          background: var(--baliHai);
          color: var(--white);
        }
      `}</style>
    </div>
  );
};
