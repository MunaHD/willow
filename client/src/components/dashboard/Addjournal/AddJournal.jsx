import { useState } from "react";

import Card from "../../UI/Card.jsx";
import Scale from "./Scale.jsx";
import ChoiceList from "./ChoiceList.jsx";
import JournalText from "./JournalText.jsx";

import "./AddJournal.css";

const AddJournal = () => {
  const [view, setView] = useState("add");

  const [data, setData] = useState({
    scale: null,
    choices: "",
    title: "",
    description: "",
  });

  const back = () => {
    if (view === "scale") {
      setView("add");
    } else if (view === "choices") {
      setView("scale");
    } else if (view === "journal") {
      setView("choices");
    }
  };

  const getValue = (value) => {
    setData((prev) => {
      return { ...prev, scale: value };
    });
  };

  const getView = () => {
    if (view === "add") {
      setView("scale");
    } else if (view === "scale") {
      setView("choices");
    } else if (view === "choices") {
      setView("journal");
    }
  };

  const getChoiceData = (choice) => {
    setData((prev) => {
      return { ...prev, choice: choice };
    });
  };

  return (
    <Card>
      {view === "add" && (
        <>
          <h2 className="journal-title">Write in Your Journal</h2>
          <div className="plus">
            <button className="add-journal-button" onClick={getView}></button>
          </div>
        </>
      )}
      {view === "scale" && (
        <Scale back={back} getValue={getValue} getView={getView} />
      )}
      {view === "choices" && (
        <ChoiceList
          getChoiceData={getChoiceData}
          getView={getView}
          back={back}
        />
      )}
      {view === "journal" && <JournalText />}
    </Card>
  );
};

export default AddJournal;
