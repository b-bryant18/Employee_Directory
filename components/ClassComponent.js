import React from "react";
import Table from "../app"

// const EmployeeTable = () => {
//     const data = {
//         columns = [
//             {
//             name: "Name",
//             field: "name",
//             sort: "asc",
//             width: 150 
//             },
//             {
//             name: "Department",
//             field: "department",
//             sort: "asc",
//             width: 250 
//             }
//         ],
       const employees = [
            {
                id: 1,
                name: "Tom C",
                department: "Programming"
            },
            {
                id: 2,
                name: "Mark Z",
                department: "Programming"
            },
            {
                id: 3,
                name: "Bill G",
                department: "Programming"
            },
            {
                id: 4,
                name: "Jeff B",
                department: "Marketing"
            },
            {
                id: 5,
                name: "Elon M",
                department: "Marketing"
            },
            {
                id: 6,
                name: "Richard B",
                department: "Marketing"
            },
        ]
//     }
// }

//Filters the employees array and returns two new arrays: One for Marketers 
//and one for programmers.

const filterItems = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }
  
  console.log(filterItems(employees, "Marketing")) 
  console.log(filterItems(employees, "Programming"))  
  

function App () {
    return <Table employees={employees}/>
}
 
  export default App;