import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isMode, setIsMode] = useState(false);
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(true);
  return (
    <div>
      <Header
        isMode={isMode}
        setIsMode={setIsMode}
        setData={setData}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedWeek={selectedWeek}
        setSelectedWeek={setSelectedWeek}
      />
      <Main
        data={data}
        selectedType={selectedType}
        selectedWeek={selectedWeek}
      />
    </div>
  );
}

export default App;
