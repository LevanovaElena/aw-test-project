import React, {JSX} from "react";
import {CardDescription} from "../common/cards/card-description.component";
import {CardArrow} from "../common/cards/card-arrow.component";
import {CardCode, getShortTime} from "../common/cards/card-code.component";


export declare type TimeLineItemProps = {
    timeLineItem: Trip;
};

export const TimeLineItem = ({timeLineItem}: TimeLineItemProps): JSX.Element | null => {
    const {description} = timeLineItem;
    return (
        <div className="timeline-item" id={timeLineItem._id}>
            <div className="timeline-item__departure">
                <CardArrow direction={'right'} text={getShortTime(timeLineItem.arrivalTime)}/>
                <span className="vertical-line"></span>
            </div>
            <div className="caption">
                <div className='caption__plane'></div>
                <div className='caption__name'>{timeLineItem.confirmationNumber}</div>
                <div className='caption__arr-code'>
                    <CardCode code={timeLineItem.arrCode} time={null}/>
                </div>
                <div className='caption__arrow'></div>
                <div className='caption__code'>
                    <CardCode code={timeLineItem.depCode} time={timeLineItem.departureTime}/>
                </div>
            </div>
            <div className="description">
                <CardDescription description={description}/>
            </div>
        </div>
    );

}