import React, { useState, useEffect } from 'react'
import bgimg from '../assets/bg.jpg'
import { useHistory } from "react-router-dom";


const TimerCompo = () => {
    const history = useHistory();
    let initialValue = 1500
    let breakLength = 5
    let sessionLength = 25

    const [timeLeft, setTimeLeft] = useState(initialValue);
    const [sessionType, setSessionType] = useState('SESSION');
    const [isRunning, setIsRunning] = useState(false);

    const LogoutHere = () => {
        history.push('/');

    }

    const timeFormatter = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft - minutes * 60;
        const displaySeconds = seconds < 10 ? '0' + seconds : seconds;
        const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${displayMinutes}:${displaySeconds}`;
    };
    const title = sessionType === 'SESSION' ? 'Work' : 'Break';
    let timer

    const handleReset = (e) => {
        e.preventDefault()
        clearTimeout(timer);
        setIsRunning(false);
        setTimeLeft(initialValue);
        setSessionType('SESSION');
        console.log(timeLeft)

        console.log(isRunning)




        // setSessionType('SESSION');

    };
    const handlePlay = (e) => {
        e.preventDefault()
        // clearTimeout(timer);
        setIsRunning(!isRunning);
    };

    // TIMER FUNCTIONS
    const timeout = () => {
        if (isRunning && timeLeft > 0) {
            timer = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
        }
    }



    const resetTimer = () => {
        if (!timeLeft && sessionType === 'SESSION') {
            setTimeLeft(breakLength * 60);
            setSessionType('BREAK');

        }
        if (!timeLeft && sessionType === 'BREAK') {
            setTimeLeft(sessionLength * 60);
            setSessionType('SESSION');

        }
    };

    useEffect(() => {
        timeout()
        resetTimer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRunning, timeLeft]);


    return (
        <>
            <div className=' w-screen h-screen flex items-center justify-center bg-cover' style={{ backgroundImage: `url(${bgimg})` }}>

                <button onClick={LogoutHere} type="button"
                    className="w-full absolute top-0 z-10 h-10 bg-red-900 border-none outline-none text-white cursor-pointer border-2
                    rounded-br-full rounded-bl-full ">
                    <span>Way to LogOut</span>
                </button>


                <div className=' flex flex-col items-center justify-center w-96 py-5 px-1 my-3 text-center relative cursor-pointer shadow-lg
             shadow-slate-800 rounded-lg bg-slate-700'>
                    <div className=' p-3 w-full'>
                        <div className=' text-2xl font-extrabold text-white tracking-wide my-1 opacity-60'>{title}</div>
                        <div className=' text-white text-5xl font-extrabold my-7'>{timeFormatter()}</div>
                        {sessionType === "SESSION" ?
                            (<>
                                <div>
                                    <button onClick={(e) => {
                                        handlePlay(e)
                                    }} className='my-1 cursor-pointer border-none outline-none text-white uppercase font-bold text-xs
                     py-3 px-6 bg-blue-600 rounded-lg w-3/4'>
                                        {isRunning ? (
                                            <div>stop</div>
                                        ) : (
                                            <div>start</div>
                                        )}
                                    </button>
                                </div>
                                <div>
                                    <button className='my-1 cursor-pointer border-none outline-none text-white uppercase font-bold text-xs
                     py-3 px-6 bg-blue-600 rounded-lg w-3/4' type='button'

                                        onClick={(e) => {
                                            handleReset(e)

                                        }}>Reset</button>

                                </div>
                            </>) : (null)}


                    </div>

                </div>

            </div>



        </>
    )
}

export default TimerCompo