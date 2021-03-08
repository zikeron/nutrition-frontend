import React from "react";
import { InputForm } from "./InputForm";
import { ButtonForm } from "./ButtonForm";

export function Form() {
  return (
    <div className="sans-serif w-90 white mw6 center relative cover bg-top mt2">
      <div
        id="overlay"
        className="absolute absolute--fill bg-navy o-70 z-unset"
      >
        {}
      </div>
      <div className="relative pa4 pa5-m">
        <h1 className="serif tracked ma0 mb4 pv3">Sign In</h1>
        <form action="" id="login" className="">
          <InputForm name="password" />
          <InputForm name="password" />
          <ButtonForm />
        </form>
      </div>
    </div>
  );
}
