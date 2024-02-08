
// import { Form } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import RealEstateList from "./components//About"
import Sales from "./components/Sales";
import Properties from "./components/Properties";
import Login from "./components/Login";
import {
  Routes,Route
} from "react-router-dom";

function App() {
  return (
    <div>
       <Header/>
      <Routes>
       <Route path="/" element={<Home />}/>
  <Route path="about" element={<RealEstateList />}/>
    <Route path="sales" element={<Sales />} />
    <Route path="properties" element={<Properties />} />
    <Route path="login" element={<Login />} />
    </Routes>
       
    </div>
  );
}


export default App;
