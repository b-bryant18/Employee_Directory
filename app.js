//This file renders the table to the user
import React from "react";

function Table(props) {
  return (
    <ul className="list-group">
      {props.employees.map(item =>(
        <li className ="list-group-item" key={item.id}>
        {item.name}
        </li>
      ))}
    </ul>
  );
}
export default Table;