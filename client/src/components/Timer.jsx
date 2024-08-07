import React,{useEffect, useState} from 'react'
const Timer = () => {
    const [timeLeft,setTimeLeft]=useState(120)
    useEffect(()=>{
        const timer=setInterval(()=>{
            if(timeLeft>0){
                setTimeLeft(timeLeft-1)
            }else{
                clearInterval(timer)
            }
        },1000)
        return ()=>clearInterval(timer)

    },[timeLeft])
    const formatTime=(time)=>{
        const minutes=Math.floor(time/60)
        const seconds=time%60
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  return (
    <div className='flex flex-row justify-end mr-4'>
      <h1 className='font-serif font-semibold text-gray-500'>Time Left :</h1>
      <div className={`font-serif font-semibold text-green-500 ${timeLeft<=30 && 'text-red-600'}`}>
        &nbsp;{formatTime(timeLeft)}
      </div>
    </div>
  )
}

export default Timer
