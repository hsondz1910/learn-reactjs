import React, { useState } from "react";
import "./ToggleStyles.css";

/*
// stageless functional component: component không sử dụng state
function Toggle1() {
    return <div className="toggle"></div>;
}
// staefull functional component: component sử dụng state
function Toggle2() {
    // const [count, setCount] = useState();
    return (
        <div className="toggle"></div>
    )
}
*/

function Toggle() {
    const [on, setOn] = useState(false);
    return (
        <div>
            <div className={`toggle ${on ? "active" : ""}`}>
                <div className={`spinner ${on ? "active" : ""}`}></div>
            </div>
            {/* {on ? 'On' : 'Off'} */}
            <div className="toggle-control">
                <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
            </div>
            {console.log(on)}
        </div>
    );
}

export default Toggle;