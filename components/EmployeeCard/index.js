import React from "react";
import "./style.css";

function EmployeeCard(props) {
    return (
        <div classname="card">
            <div classname="content">
                <ul>
                    <li>
                        <strong>Name:</strong>{props.name}
                    </li>
                    <li>
                    <strong>Department:</strong>{props.department}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default EmployeeCard;