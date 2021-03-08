import React, { useContext } from "react";
import { ItemList } from "./ItemList";
import AppContext, { TypeContext } from "../context/context";

export function List({
  headers,
  title
}: {
  headers: string[];
  title?: string;
}) {
  const { state: desserts } = (useContext(
    AppContext
  ) as unknown) as TypeContext;

  console.log("List", desserts);
  return (
    <div className="pa4">
      <div className="f6 w-100 mw8 center">
        <b>{title || "List of Items"}</b>
      </div>
      <div className="overflow-auto">
        <table className="f6 w-100 mw8 center" cellSpacing="0">
          <thead>
            <tr className="stripe-dark">
              {headers.length > 0
                ? headers.map(head => (
                    <th className="fw6 tl pa3 bg-white" key={head}>
                      {head}
                    </th>
                  ))
                : null}
            </tr>
          </thead>
          <tbody className="lh-copy">
            {desserts.length > 0
              ? desserts.map((item: any) => (
                  <ItemList item={item} key={item.id} />
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
