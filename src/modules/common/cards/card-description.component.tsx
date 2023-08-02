import React, {JSX} from "react";

export declare type CardDescriptionProps = {
    description:string|null
};

export const CardDescription = ({description}: CardDescriptionProps): JSX.Element|null => {
    if(!description)return null;
    return (
        <div className={`card-description`}>
            <span >{description}</span>
        </div>
    );

}