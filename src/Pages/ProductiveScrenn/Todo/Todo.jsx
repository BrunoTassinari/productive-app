import { useState, useEffect } from "react";
import "../../../root.css"
import "./Todo.css"
import { SubTitle, TaskContent } from "../../../components/index";

export function Todo() {
  return (
    <section className="todo-container">
      <SubTitle title={"To-do List"} />
      <TaskContent/>
    </section>
  );
}
