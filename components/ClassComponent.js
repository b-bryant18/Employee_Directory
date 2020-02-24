import React from "react";

const EmployeeTable = () => {
    const data = {
        columns = [
            {
            name: "Name",
            field: "name",
            sort: "asc",
            width: 150 
            },
            {
            name: "Department",
            field: "department",
            sort: "asc",
            width: 250 
            }
        ],
        rows: [
            {
                name: "Justin W",
                department: "Programming"
            },
            {
                name: "Mark Z",
                department: "Programming"
            },
            {
                name: "Bill G",
                department: "Programming"
            },
            {
                name: "Jeff B",
                department: "Marketing"
            },
            {
                name: "Elon M",
                department: "Marketing"
            },
            {
                name: "Richard B",
                department: "Marketing"
            },
        ]
    }
}
 
  export default EmployeeTable;