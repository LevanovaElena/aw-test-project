import React from 'react';
import '../../styles/index.scss';
import {ButtonIcon} from "../common/button-icon.component";

function App() {
    return (
        <div className="app">
            <span className="">Hello</span>
            <h1 className="">Hello</h1>
            <ButtonIcon type={"load"} onClick={() => {console.log("load");}} isActive={false} caption={'Load future itineraries'}/>
            <ButtonIcon type={"load"} onClick={() => {console.log("load");}} isActive={true} caption={'Load future itineraries'}/>
        </div>
    );
}

export default App;
