import React from 'react';
import '../../styles/index.scss';
import {ButtonIcon} from "../common/buttons/button-icon.component";
import {CardArrow} from "../common/cards/card-arrow.component";
import {CardCode} from "../common/cards/card-code.component";
import {CardDescription} from "../common/cards/card-description.component";

function App() {
    return (
        <div className="app">
            <span className="">Hello</span>
            <h1 className="">Hello</h1>
            <ButtonIcon type={"load"} onClick={() => {
                console.log("load");
            }} isActive={false} caption={'Load future itineraries'}/>
            <p></p>

            <p></p>
            <CardArrow direction={'left'} text={'14'}/>
            <p></p>
            <CardArrow direction={'right'} text={'1:55 PM'}/>
            <p></p>
            <CardCode code={'NYC'} time={null}/>
            <p> mm </p> <p></p>
            <CardCode code={'SFO'} time={'1:55 PM'}/>
            <div><p></p></div>

            <ButtonIcon type={"load"} onClick={() => {
                console.log("load");
            }} isActive={true} caption={'Load future itineraries'}/>
            <CardDescription
                description={"Labore sed odit natus sit. Deleniti est labore at. Fugiat architecto itaque quidem possimus ipsam culpa. Tenetur cum sapiente eum facere. Blanditiis quam soluta aperiam eius nihil. Maiores eveniet tenetur doloribus."}/>
        </div>
    );
}

export default App;
