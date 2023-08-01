import React from "react";
import {JSX} from "react";

import LoadIcon from "../../../images/load-icon.svg";
import LoadIconActive from "../../../images/load-icon-active.svg";

export declare type ButtonIconProps = {
    type: 'load',
    onClick: () => void,
    caption: string,
    isActive?: boolean
};

export const getIcon = (type: 'load', isActive?: boolean) => {
    switch (type) {
        case "load":
            return isActive ? <img src={LoadIconActive} alt="Load" className='button-icon__img'/> :
                <img src={LoadIcon} alt="Load" className='button-icon__img'/>;
    }

}
export const ButtonIcon = ({caption, type, onClick, isActive}: ButtonIconProps): JSX.Element => {
    return (
        <button className={`button-icon ${isActive ? 'button-icon_active' : ''}`} onClick={() => onClick()}>
            {getIcon(type, isActive)}
            <div className='button-icon__caption'>{caption}</div>
        </button>
    );

}