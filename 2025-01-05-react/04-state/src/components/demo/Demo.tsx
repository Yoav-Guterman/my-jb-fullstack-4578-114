import { useEffect, useRef, useState } from 'react';
import './Demo.css'

export default function Demo(): JSX.Element {

    let startTime = useRef<string>(new Date().toLocaleTimeString())
    const [currentTime, setCurrentTime] = useState<string>(startTime.current)


    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('modifying time')
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);
 
    }, [])


    return (
        <div className='Demo'>
            <p>start Time:{startTime.current}</p>
            <p>current Time: {currentTime}</p>
        </div>
    )
}