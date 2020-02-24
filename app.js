import React, {useState} from "react";
import ClassComponent from "ClassComponent";

function App () {
    const [employeeState, setEmployeeState] = useState({
        name: "",
        newHire: ""
    });

    return (
        <div className="card">
        <div>
          Name: {employeeState.name}
        </div>
        <div>
          New Hire Status: {employeeState.newHire}
        </div>
       
      </div>
    );
}

export default App;