import React, {JSX} from "react";

export declare type CardArrowProps = {
    direction: 'left'|'right',
    text: string,
    size?:'sm'|'lg'
};

export const CardArrow = ({direction,text,size='lg'}: CardArrowProps): JSX.Element => {
    return (
        <div className={`card-arrow ${direction==='left'?'card-arrow_left':'card-arrow_right'} card-arrow_size-${size}`}>
            <span className='button-icon__text'>{text}</span>
        </div>
    );

}