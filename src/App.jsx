import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WodList from "./components/WodList";
import WodForm from "./components/WodForm";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<WodList />} />
          <Route path="/add" element={<WodForm />} />
          <Route path="/edit/:id" element={<WodForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
