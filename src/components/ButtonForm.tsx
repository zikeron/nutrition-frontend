import React, {ReactElement} from "react";
import { FaCheck } from "react-icons/fa";


export function ButtonForm():ReactElement {
  return (
    <div>
      <button className="input-reset w-100 light-gray br2 tracked pv2 ph2 pointer bg-dark-green hover-bg-blue bn">
        <FaCheck /> Submit
      </button>
    </div>
  );
}
