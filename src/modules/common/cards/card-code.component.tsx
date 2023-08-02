import React, {JSX} from "react";

export declare type CardCodeProps = {
    time?: string | null,
    code: string
};
export const getShortTime = (timeString: string): string => {
    if (Number.isNaN(Date.parse(timeString))) return '00:00 AM';
    return new Date(timeString).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}
export const CardCode = ({time, code}: CardCodeProps): JSX.Element => {
    return (
        <div className={`card-code`}>
            <div className={`card-code__text`}><span>{code}</span></div>

            {time ? <div className={`card-code__time`}><span>{getShortTime(time)}</span></div> : null}
        </div>
    );

}