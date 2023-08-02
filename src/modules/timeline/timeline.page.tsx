import React, {JSX, useEffect, useState} from "react";
import {TimeLineItem} from "../timeline-item/timeline-item.component";
import {getUserTrips} from "./timeline.service";
import LoadIcon from '../../images/load-icon.svg';
import {ButtonIcon} from "../common/buttons/button-icon.component";

export const TimelinePage = (): JSX.Element => {
    const [isLoaded,setIsLoaded]=useState(false);
    const [isLoadedUp,setIsLoadedUp]=useState(false);
    const [isLoadedDown,setIsLoadedDown]=useState(false);
    const [trips,setTrips]=useState<TimeLineItem[]>([]);
    const [currentPageUp,setCurrentPageUp]=useState(1);
    const [currentPageDown,setCurrentPageDown]=useState(1);

    const getTrips=(page:number,type?:'up'|'down')=>{
        type&&type==='up'?setIsLoadedUp(true):setIsLoadedDown(true);
        getUserTrips(page).then((data)=>{
            setTrips(prevState => type==='up'?[...data,...prevState]:[...prevState,...data,]);
            type&&type==='up'?setIsLoadedUp(false):setIsLoadedDown(false);
            !type&&setIsLoaded(true);
        }).catch(()=>{
            type&&type==='up'?setIsLoadedUp(false):setIsLoadedDown(false);
            setTrips([]);
        })
    }
    useEffect(()=>{
        getTrips(1);
    },[])
    const loadUp=(type:"up"|'down')=>{
        console.log(type);
        switch (type) {
            case 'up':
                setCurrentPageUp(prevState => {
                    getTrips(prevState - 1,'up');
                    return  prevState - 1
                });

                break;
            case 'down':
                setCurrentPageDown(prevState => {
                    getTrips(prevState + 1,'down');
                    return  prevState - 1
                });
                break;
        }

    }
    if(!isLoaded)
        return (
            <div className="app">
                <img src={LoadIcon}/>
            </div>
        );
    return (
        <div className="app">
            <div className='load-button'>
                <div className='vertical-line'></div>
                <div className={'load-button__button'}> <ButtonIcon type={'load'} onClick={()=>loadUp('up')} caption={'Load past itineraries'} isActive={isLoadedUp}/></div>

            </div>
            {trips&&trips.length>0&&trips.map((trip)=>
                <TimeLineItem key={trip.id} timeLineItem={trip}/>
            )}
            <div className='load-button'>
                <div className={'load-button__button'}> <ButtonIcon type={'load'} onClick={()=>loadUp('down')} caption={'Load past itineraries'} isActive={isLoadedDown}/></div>
                <div className='load-button__line-down'></div>
            </div>
        </div>
    );

}