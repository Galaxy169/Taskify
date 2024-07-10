import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import YourTasks from "./components/YourTasks";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="yourtasks" element={<YourTasks />} />
            <Route path="*" element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
