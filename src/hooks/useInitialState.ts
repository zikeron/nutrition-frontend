import {useEffect, useState} from "react";
import { IDessert } from "../Interfaces/IDesserts";
import {CustomClient} from "../lib/apollo-client";
import {gql} from "@apollo/client";

function useInitialState(): {
  addToDesserts: (payload: IDessert) => void;
  removeFromDesserts: (indexList: number) => void;
  state: any
} {
  const [state, setState] = useState({desserts: []});

  const fetchData = async () => {
    await CustomClient()
    .query({
      query: gql`
          query {
              getDesserts {
                  _id
                  dessert
                  nutritionInfo {
                      calories
                      fat
                      carbs
                      protein
                  }
              }
          }
      `
    })
    .then(data => {
      setState({desserts: data.data.getDesserts});
    });
  };

  useEffect( ()=> {
     fetchData();
    },[]);

  const addToDesserts = (payload: IDessert): void => {
    setState({
      ...state,
      // @ts-ignore
      desserts: [...state.desserts, payload]
    });
  };

  const removeFromDesserts = (payload: number): void => {
    setState({
      ...state,
      desserts: state.desserts.filter(
        (product: IDessert, index: number) => index !== payload
      )
    });
  };

  return {
    addToDesserts,
    removeFromDesserts,
    state
  };
}

export default useInitialState;
