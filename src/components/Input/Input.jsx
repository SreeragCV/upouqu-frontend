import React from "react";

function Input({ id, label, error, message, ...props }) {
  const inputClass =
    "rounded border border-blue-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0";
  const labelClass =
    "block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2";
  const invalidClass =
    "block text-red-600 cursor-text text-sm leading-[140%] font-normal text-[#e82d2d] mt-2";

  return (
    <div className="block relative">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input id={id} className={inputClass} {...props} required />
      {error && <p className={invalidClass}>{message}</p>}
    </div>
  );
}

export default Input;
