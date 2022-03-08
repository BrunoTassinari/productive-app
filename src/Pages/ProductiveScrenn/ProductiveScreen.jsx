import {Todo} from "./Todo/Todo"
import {Pomodoro} from "./Pomodoro/Pomodoro"
import "./ProductiveScreen.css"

export function ProductiveScreen() {
  return (
    <>
      <header></header>
      <main className="main-content">
          <Pomodoro/>
          <Todo/>
      </main>
      <footer></footer>
    </>
  );
}
