import React, { ReactElement} from "react";

interface ButtonFormProps {
  label: string;
  classname?: string;
  type: 'submit' | 'reset' | 'button'
  action?: Function;
  children?: React.ReactNode;
}

export function ButtonForm({
  label,
  type,
  classname,
  action,
  children
}: ButtonFormProps): ReactElement {
  return (
    <div>
      <button
        type={type}
        className={classname}
        onClick={action ? () => action() : () => null}
      >
        {children} {label}
      </button>
    </div>
  );
}
