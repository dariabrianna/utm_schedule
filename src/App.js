import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [isMode, setIsMode] = useState(false);
  const [data, setData] = useState([]);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update the window width state on resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={isMode ? "dark" : ""}>
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
        isMode={isMode}
        selectedType={selectedType}
        selectedWeek={selectedWeek}
        isMobile={windowWidth <= 768}
      />
    </div>
  );
}

export default App;
