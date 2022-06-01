import React, { Component } from "react";
import "./App.css";
import KanbanBoard from "./components/kanban-board/index.js";
import "h8k-components";

const title = "Kanban Board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: this.props.tasks,
    };
    this.bwdClick=this.bwdClick.bind(this);
    this.fwdClick=this.fwdClick.bind(this);
  }

   bwdClick(task) {
    for (let i = 0; i < 10; ++i) {
      if (this.state.tasks[i].name === task.name) {
        let tasks = this.state.tasks;
        tasks[i].stage = tasks[i].stage - 1;
        this.setState({ tasks: tasks });
      }
    }
  }
 

  fwdClick(task){
    for (let i = 0; i < 10; ++i) {
      if (this.state.tasks[i].name === task.name) {
        let oldTasks = this.state.tasks;
        oldTasks[i].stage = oldTasks[i].stage + 1;
        this.setState({ tasks: oldTasks });
      }
    }
  };

  

  render() {
    return (
      <div>
        <h8k-navbar header={title}></h8k-navbar>
        <KanbanBoard
          tasks={this.state.tasks}
          fwdClick={this.fwdClick}
          bwdClick={this.bwdClick}
        />
      </div>
    );
  }
}

export default App;
