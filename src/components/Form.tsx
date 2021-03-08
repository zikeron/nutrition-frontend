import React, {useReducer} from "react";
import { InputForm } from "./InputForm";
import { RiAlertLine } from "react-icons/ri";
import { ButtonForm } from "./ButtonForm";

/*const addReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DESSERT":
      return {
        ...state,
        desserts: [...state.dessert, action.payload]
      };
    default:
      return state;
  }
};*/

export function Form() {
  /*const [desserts, dispatch] = useReducer(addReducer, initialState);

  const handleClick = dessert => {
    dispatch({ type: "ADD_DESSERT", payload: dessert });
  };
*/
  return (
    <div className="sans-serif w-90  black-80 mw6 center relative cover bg-top mt2">
      <div id="overlay" className="absolute absolute--fill  o-70 z-unset">
        {}
      </div>
      <div className="relative pa4 pa5-m">
        <div className="tracked  mb4 pv2 tc bg-gold">
          <RiAlertLine /> Please fill the details before you submit
        </div>
        <form action="" id="addDessert" className="">
          <InputForm name="Dessert name" type="text" required />
          <InputForm name="Calories" type="text" required />
          <InputForm name="Fat" type="text" required />
          <InputForm name="Carbs" type="text" required />
          <InputForm name="Protein" type="text" required />
          <ButtonForm />
        </form>
      </div>
    </div>
  );
}
