import React from 'react';
import '../../styles/index.scss';
import {ButtonIcon} from "../common/buttons/button-icon.component";
import {CardArrow} from "../common/cards/card-arrow.component";

function App() {
    return (
        <div className="app">
            <span className="">Hello</span>
            <h1 className="">Hello</h1>
            <ButtonIcon type={"load"} onClick={() => {console.log("load");}} isActive={false} caption={'Load future itineraries'}/>
            <ButtonIcon type={"load"} onClick={() => {console.log("load");}} isActive={true} caption={'Load future itineraries'}/>
            <CardArrow direction={'left'} text={'14'}/>
            <CardArrow direction={'right'} text={'1:55 PM'}/>
        </div>
    );
}

export default App;
