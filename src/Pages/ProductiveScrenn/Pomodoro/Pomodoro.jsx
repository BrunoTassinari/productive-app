import "./Pomodoro.css";
import { SubTitle, PomodoroContent } from "../../../components/index";

export function Pomodoro() {
  return (
    <section className="pomodoro-container">
      <SubTitle title={"Pomodoro"} />
      <PomodoroContent/>
    </section>
  );
}
