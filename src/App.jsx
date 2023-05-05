// import routers and route
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

function App() {
  return (
    <div className=" px-5  md:max-w-[1440px] mx-auto bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
