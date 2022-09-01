import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import "./Styles/CardTask.css";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#6CBAFF",
      secondaryColor: "#FFFFFF",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <>
      <div className="taks" >
        <div className="card">
          <div className="container_card">
            <h4
              className={taskObj.Pending ? 'description' : 'textDesactive'}
              style={{
                backgroundColor: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
            >
              <b>{taskObj.Name}</b>
            </h4>
            <p className={taskObj.Pending ? 'description' : 'textDesactive'}>{taskObj.Description}</p>
          </div>
          <div className="buttons_task">
            <i
              className="far fa-edit mr-3"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModal(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={handleDelete}
            ></i>
          </div>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </>
  );
};

export default Card;
