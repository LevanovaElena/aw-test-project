import React, {JSX, useState} from "react";

export const MAX_COUNT_LETTERS_FOR_VIEW = 333;

export declare type CardDescriptionProps = {
    description: string
};

export const CardDescription = ({description}: CardDescriptionProps): JSX.Element | null => {
    const [textResult, setTextResult] = useState(description.substring(0, MAX_COUNT_LETTERS_FOR_VIEW));
    const [isOpen, setIsOpen] = useState(false);
    const bigText = description.length > MAX_COUNT_LETTERS_FOR_VIEW;

    const onClickBtnReadAll = () => {
        setIsOpen(prevState => {
            setTextResult(!prevState ? description : description.substring(0, MAX_COUNT_LETTERS_FOR_VIEW))
            return !prevState;
        });
    }

    if (!description) return null;
    return (
        <div className="card-description" data-testid={'description'}>
            <div className={`card-description__text`}>
                <div className={`text ${bigText&&isOpen||!bigText?'':'card-description__text_gradient'}`}>{textResult}</div>
                {bigText &&
                    <a className={`card-description__btn ${isOpen ? `card-description__btn_open` : `card-description__btn_close`}`}
                       onClick={onClickBtnReadAll}>{isOpen ? "Close All" : "Read All"}</a>
                }
            </div>
            <div className="top-left"></div>
            <div className="corner"></div>
            <div className="text-right"></div>
        </div>
    );

}