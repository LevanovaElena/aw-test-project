import React, {JSX} from "react";
import {getShortTime} from "../utils";

export declare type CardCodeProps = {
    time?: string | null,
    code: string
};
export const CardCode = ({time, code}: CardCodeProps): JSX.Element => {
    return (
        <div className={`card-code`}>
            <div className={`card-code__text`}><span>{code}</span></div>

            {time ? <div className={`card-code__time`}><span>{getShortTime(time)}</span></div> : null}
        </div>
    );

}