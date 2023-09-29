import React, { useCallback, useEffect, useMemo, useState } from "react";
import useHttp from "./hooks/use-http";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);
  const transformTasks = (tasks) => {
    const loadedTasks = [];
    for (const taskKey in tasks) {
      loadedTasks.push({
        id: taskKey,
        text: tasks[taskKey].text,
      });
    }

    setTasks(loadedTasks);
  };
  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-http-cf2f1-default-rtdb.firebaseio.com/tasks.json",
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
