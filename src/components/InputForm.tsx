import React, { ReactElement } from "react";

export function InputForm({ name }: { name: string }): ReactElement {
  return (
    <div className="mb4">
      <label htmlFor={name} className="db f6 white-80 ttu ph2 mb2">
        {name}
      </label>
      <input type="password" name="password" className="input-reset db w-100 mw-100 white b pv2 ph3 bg-white-30 hover-bg-white-70 hover-gray outline-0 bn br-pill" />
    </div>
  );
}
