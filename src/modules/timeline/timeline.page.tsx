import React, {JSX, useEffect, useLayoutEffect, useRef, useState} from "react";
import {TimeLineItem} from "../timeline-item/timeline-item.component";
import {getUserTrips} from "./timeline.service";
import LoadIcon from '../../images/load-icon.svg';
import {ButtonIcon} from "../common/buttons/button-icon.component";
import {v4} from "uuid";
import {CardArrow} from "../common/cards/card-arrow.component";

export const putUniqueId = (array: Trip[]): void => {
    array.forEach(item => {
        item._id = v4();
        if (item.id === '1') item.description = '';
        if (item.id === '45') item.description = item.description + item.description+item.description;
    })
}
export const TimelinePage = (): JSX.Element => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoadedUp, setIsLoadedUp] = useState(false);
    const [isLoadedDown, setIsLoadedDown] = useState(false);
    const [trips, setTrips] = useState<Trip[]>([]);
    const [currentPageUp, setCurrentPageUp] = useState(1);
    const [currentPageDown, setCurrentPageDown] = useState(1);
    const [currentElement, setCurrentElement] = useState<HTMLElement | null>(null);
    const scrollView = useRef<HTMLDivElement>(null);
    useEffect(() => {
        getTrips(1);
    }, [])
    const onScroll = () => {
        if (!scrollView.current) return;
        const scrollHeight = scrollView.current.scrollHeight;
        const scrollTop = scrollView.current.scrollTop;
        const innerHeight = scrollView.current.clientHeight;

        if (scrollHeight - (scrollTop + innerHeight) < 3) {
            setCurrentPageDown(prevState => {
                getTrips(prevState + 1, 'down');
                return prevState - 1
            });
        }
        if (scrollTop < 3) {
            setCurrentElement(document.getElementById(trips[0]._id));
            setCurrentPageUp(prevState => {
                getTrips(prevState - 1, 'up');
                return prevState - 1
            });
            if (currentElement) currentElement.scrollIntoView({behavior: 'smooth'});
        }

    }
    const getTrips = (page: number, type?: 'up' | 'down') => {
        type && type === 'up' ? setIsLoadedUp(true) : setIsLoadedDown(true);
        getUserTrips(page).then((data) => {
            putUniqueId(data);
            setTrips(prevState => type === 'up' ? [...data, ...prevState] : [...prevState, ...data,]);
            type && type === 'up' ? setIsLoadedUp(false) : setIsLoadedDown(false);
            !type && setIsLoaded(true);
        }).catch(() => {
            type && type === 'up' ? setIsLoadedUp(false) : setIsLoadedDown(false);
            setTrips([]);
        })
    }

    const load = (type: "up" | 'down') => {
        switch (type) {
            case 'up':
/*                if (scrollView.current && scrollView.current.scrollTop < 3) setCurrentElement(document.getElementById(trips[0]._id));
                else setCurrentElement(null);
                console.log(document.getElementById(trips[0]?._id), scrollView.current && scrollView.current.scrollTop)*/
                setCurrentPageUp(prevState => {
                    getTrips(prevState - 1, 'up');
                    return prevState - 1
                });
                //if (currentElement) currentElement.scrollIntoView({behavior: 'smooth'});
                break;
            case 'down':
                setCurrentPageDown(prevState => {
                    getTrips(prevState + 1, 'down');
                    return prevState - 1
                });
                break;
        }
    }
    useLayoutEffect(() => {
        if (!isLoadedUp && currentElement) currentElement.scrollIntoView({behavior: 'smooth'});
    }, [isLoadedUp])
    if (!isLoaded)
        return (
            <div className="app">
                <img src={LoadIcon} alt={'Loading...'} className='loader'/>
            </div>
        );
    return (
        <div className="app">
            <div className="page-title">
                <h1>Your Trips</h1>
                <CardArrow direction={'left'} text={trips.length.toString()} size={'sm'}/>
            </div>
            <div className="load-button-up">
                <div className='load-button'>
                    <div className='vertical-line'></div>
                    <div className={'load-button__button'}>
                        <ButtonIcon type={'load'} onClick={() => load('up')}
                                    caption={'Load past itineraries'} isActive={isLoadedUp}/>
                    </div>
                </div>
            </div>
            <div className="trips-list" ref={scrollView} onScroll={onScroll}>
                {trips && trips.length > 0 && trips.map((trip) =>
                    <TimeLineItem key={trip._id} timeLineItem={trip}/>)}
            </div>
            <div className="load-button-down">
                <div className='load-button'>
                    <div className={'load-button__button'}>
                        <ButtonIcon type={'load'} onClick={() => load('down')}
                                    caption={'Load future itineraries'} isActive={isLoadedDown}/>
                    </div>
                    <div className='load-button__line-down'></div>
                </div>
            </div>
        </div>
    );

}