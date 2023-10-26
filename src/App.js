import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isMode, setIsMode] = useState(false);
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div>
      <Header
        isMode={isMode}
        setIsMode={setIsMode}
        setData={setData}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Main data={data} selectedType={selectedType} />
    </div>
  );
}

export default App;
