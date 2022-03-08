import { Modal, Text, Timer, Button, BreakTimer } from "../index";
import { useState, useEffect } from "react";

export function PomodoroContent() {
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [timerStart, setTimerStart] = useState(false);
  const [timerBreak, setTimerBreak] = useState(false);

  

  useEffect(() => {
    const timerInterval = setInterval(() => {
      clearInterval(timerInterval);

      if (timerStart) {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
            
          } else {
            setTimerStart(false);
            setTimerBreak(true);

            resetTimer();
          }
        } else {
          setSeconds(seconds - 1);
        }
      }
    }, 1000);
  }, [timerStart, seconds, minutes, timerBreak]);

  function resetTimer() {
    setMinutes(25);
    setSeconds(0);
  }

  return (
    <>
      <Timer seconds={seconds} minutes={minutes}/>
      {!timerStart ? (
        <Button onClick={() => setTimerStart(true)}>
          <Text title={"Start"} />
        </Button>
      ) : null}

      {timerBreak ? (
        <Modal>
          <BreakTimer
            minutes={minutes}
            seconds={seconds}
            setTimerBreak={setTimerBreak}
            timerBreak={timerBreak}
          />
        </Modal>
      ) : null}
    </>
  );
}
