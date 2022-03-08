export { useEffect, useState } from "react"
import "./TaskContent.css"
import { Button, List, ImgBasic } from "../index";

export function TaskContent() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [click, setClick] = useState('')

  function pickTest(e) {
    let test = e.target.value;
    setTask(test);
  }

  function addTask() {
    task != "" ? setTaskList([...taskList, {name: task, mark: false, key: (Math.random() *10) }]) : null;
    setTask("");
  }

  function removeTask(task) {
    let newTaskList = taskList.filter((item) => item.key !== task.key);

    setTaskList(newTaskList)
  }

  function markTask(task) {
    taskList.map((item) => {
      if (item.name === task.name) {
        task.mark = !task.mark;
        setTaskList([...taskList]);
      }
    });
  }

  return (
    <>
      
      <List
        remove={removeTask}
        mark={markTask}
        className={"task-list"}
        itens={taskList}
      />
      <form className="form-content">
        <input
          onChange={(e) => pickTest(e)}
          placeholder="New task"
          value={task}
        />
        <Button className={'btn-icon'} onMouseOver={() => setClick("S")} onMouseOut={() => setClick("")} onClick={addTask}>
          <ImgBasic src={`./src/assets/images/tack${click}.png`} />
        </Button>
      </form>
    </>
  );
}
