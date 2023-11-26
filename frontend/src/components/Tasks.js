import cancel from "../assets/images/cancle.svg";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { toast } from "react-toastify";

import { BsCheckLg } from "react-icons/bs";

import customFetch from "../utils/customeFecth";

import Wrapper from "../assets/wrappers/tasksWrapper";

// const tasks = [
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
//   { title: "Do the first task", state: "not-complete" },
// ];

const Tasks = ({ tasks }) => {
  const [tasksList, setTasksList] = useState([]);
  const token = localStorage.getItem("token");

  const [allTasksList, setAllTasksList] = useState([]);
  const [onlyActiveTasks, setOnlyActiveTasks] = useState([]);
  const [onlyCompletedTasks, setOnlyCompletedTasks] = useState([]);

  const [whichTasksToShow, setWhichTasksToShow] = useState(tasks);

  const [leftTasks, setLeftTasks] = useState(0);

  const language = useSelector((state) => state.langPreference.langPreference);
  const isArabic = language === "ar";

  //To fetch the active and completed task whenever the complete Button, delete Btn and one of filter button is clicked
  const [completeButtonClicked, setCompleteButtonClicked] = useState(false);
  const [deleteButtonClicked, setDeleteButtonClicked] = useState(false);
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  const [clearAllCompletedButtonClicked, setClearAllCompletedButtonClicked] =
    useState(false);

  useEffect(() => {
    setWhichTasksToShow(tasks);
  }, [tasks]);

  useEffect(() => {
    setTasksList([...tasks]);
    setAllTasksList([...tasks]);
  }, [tasks]);

  useEffect(() => {
    let taskLeftNum = 0;
    // Update leftTasks whenever tasksList changes
    setLeftTasks(() => {
      whichTasksToShow.forEach((task) => {
        if (!task.completed) {
          taskLeftNum += 1;
        }
      });
      return taskLeftNum;
    });
  }, [whichTasksToShow]);

  // ####### ******* #######  //
  useEffect(() => {
    customFetch
      .post("/tasks", { token })
      .then((response) => {
        const { tasks } = response.data;
        //  setTasks(tasks);

        setAllTasksList([...tasks]);
      })
      .catch((error) => {});
  }, [
    completeButtonClicked,
    deleteButtonClicked,
    filterButtonClicked,
    clearAllCompletedButtonClicked,
    tasks,
    token,
  ]);

  useEffect(() => {
    customFetch
      .post("/tasks/actives", { token })
      .then((response) => {
        const { activeTasks } = response.data;
        //  setTasks(tasks);

        setOnlyActiveTasks([...activeTasks]);
      })
      .catch((error) => {});
  }, [
    completeButtonClicked,
    deleteButtonClicked,
    filterButtonClicked,
    clearAllCompletedButtonClicked,
    tasks,
    token,
  ]);

  useEffect(() => {
    console.log("Token when fetching completed tasks", token);
    customFetch
      .post("/tasks/completed", { token })
      .then((response) => {
        const { completedTasks } = response.data;
        setOnlyCompletedTasks([...completedTasks]);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks", error);
      });
  }, [
    completeButtonClicked,
    deleteButtonClicked,
    filterButtonClicked,
    clearAllCompletedButtonClicked,
    tasks,
    token,
  ]);
  // ####### ******* #######  //

  // ######### //

  const showAllTasks = () => {
    setWhichTasksToShow(allTasksList);
    setFilterButtonClicked((prevState) => !prevState);
  };

  const showActiveTasks = () => {
    setWhichTasksToShow(onlyActiveTasks);
    setFilterButtonClicked((prevState) => !prevState);
  };

  const showCompletedTasks = () => {
    setWhichTasksToShow(onlyCompletedTasks);
    setFilterButtonClicked((prevState) => !prevState);
  };

  // ######### //

  const deleteTaskHandler = async (taskId) => {
    setDeleteButtonClicked((prevState) => !prevState);
    try {
      await customFetch.delete(`/task/${taskId}`);
      // Update the tasks state immediately to disappear the task immediately after clicking the delete Btn
      setWhichTasksToShow((prevTasks) =>
        prevTasks.filter((task) => task._id !== taskId)
      );
      return toast.success("Task Deleted", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
    setDeleteButtonClicked((prevState) => !prevState);
  };

  const markAsCompleted = async (taskId) => {
    let completedValue = true;
    try {
      whichTasksToShow.forEach((task) => {
        if (task._id === taskId) {
          if (task.completed) {
            completedValue = false;
          }
        }
      });

      await customFetch.patch(`/task/${taskId}`, { completed: completedValue });

      setWhichTasksToShow((prevTasksList) =>
        whichTasksToShow.map((task) => {
          if (task._id === taskId) {
            return {
              ...task,
              completed: completedValue,
            };
          }
          return task;
        })
      );

      setLeftTasks((prevLeftTasks) => --prevLeftTasks);
      setCompleteButtonClicked((prevState) => !prevState);
    } catch (error) {}
  };

  //  :) :) :)
  const clearAllCompletedTasks = async () => {
    try {
      const response = await customFetch.post("/tasks/delete-completed", {
        token,
      });
      const { tasksAfterRemoving } = response.data;
      setClearAllCompletedButtonClicked((prevState) => !prevState);
      setWhichTasksToShow((prevTasks) => tasksAfterRemoving);
      return toast.success("All Completed Tasks Deleted", { autoClose: 2000 });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <div className="tasks-container">
        {whichTasksToShow.length === 0 ? (
          <p className="no-task">No task is here.</p>
        ) : (
          whichTasksToShow.map((task, index) => {
            return (
              <div
                className={`task-container ${
                  task.completed === true ? "complete" : ""
                }`}
                key={task._id}
              >
                <span
                  className={`check-container `}
                  onClick={() => markAsCompleted(task._id)}
                >
                  <BsCheckLg
                    className="check-icon"
                    onClick={() => markAsCompleted(task._id)}
                  />
                </span>

                <p className="task-text">{task.title}</p>

                <button
                  className="cancel"
                  onClick={() => deleteTaskHandler(task._id)}
                >
                  <img src={cancel} alt="" className="cancel-img" />
                </button>
              </div>
            );
          })
        )}

        <div className="additional-info">
          <span>
            {isArabic
              ? `ملاحظات متبقية ${leftTasks}`
              : `${leftTasks} items left`}
          </span>
          <span className="action-btns">
            <button onClick={showAllTasks}>{isArabic ? "الكل" : "All"}</button>
            <button onClick={showActiveTasks}>
              {isArabic ? "متبقي" : "Active"}
            </button>
            <button onClick={showCompletedTasks}>
              {isArabic ? "منتهي" : "Completed"}
            </button>
          </span>
          <span>
            <button onClick={clearAllCompletedTasks}>
              {isArabic ? "مسح ما تم إنهاؤه" : "Clear Completed"}
            </button>
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
export default Tasks;
