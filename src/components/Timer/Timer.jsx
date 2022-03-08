import {Text} from "../index"

export function Timer({seconds, minutes}){
  const minutesOnScreen = minutes >= 10 ? `${minutes}` : `0${minutes}`;
  const secondsOnScreen = seconds >= 10 ? `${seconds}` : `0${seconds}`;

  return (
    <Text className={"timer"} title={`${minutesOnScreen}:${secondsOnScreen}`} />
  )

}