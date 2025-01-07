import { useEffect, useState } from 'react';
import './Demo.css'

export default function Demo(): JSX.Element {
    // let time = new Date().toLocaleTimeString()
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString())



    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('setting time')
            setTime(new Date().toLocaleTimeString())
            console.log(time)
        }, 1000);
        return () => clearInterval(intervalID)
    }, [])


    return (
        <div className='Demo'>
            <p>time is: {time}</p>
        </div>
    )
}