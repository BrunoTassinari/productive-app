import {useState, useEffect} from 'react'
import {Timer, Button, Text} from '../index'

export function BreakTimer({setTimerBreak, timerBreak}){

  const [breakMin, setBreakMin] = useState(0)
  const [breakSec, setBreakSec] = useState(3)
  const [restartButton, setRestartButton] = useState(false)

  useEffect(() => {
    const timerInterval = setInterval(() => {
      clearInterval(timerInterval);

      if (timerBreak) {
        if (breakSec === 0) {
          if (breakMin !== 0) {
            setBreakSec(59);
            setBreakMin(breakMin - 1);
            
          } else {
            setRestartButton(true);
          }
        } else {
          setBreakSec(breakSec - 1);
        }
      }
    }, 1000);
  }, [breakSec, breakMin, timerBreak]);

  function resetTimer() {
    setMinutes(5);
    setSeconds(0);
  }

  return (
    <>
      <Timer seconds={breakSec} minutes={breakMin}/>
      {restartButton? (
        <Button onClick={() => {setTimerBreak(false) ,resetTimer()}}>
          <Text title={"Restart"}/>
        </Button>
      ) : null}
    </> 
  )
}