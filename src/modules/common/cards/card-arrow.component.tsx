import React, {JSX} from "react";

export declare type CardArrowProps = {
    direction: 'left'|'right',
    text: string
};

export const CardArrow = ({direction,text}: CardArrowProps): JSX.Element => {
    return (
        <div className={`card-arrow ${direction==='left'?'card-arrow_left':'card-arrow_right'}`}>
            <span className='button-icon__text'>{text}</span>
        </div>
    );

}