import { Route, Routes, BrowserRouter } from "react-router-dom";
import Assessment from "./Assessment";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";
import Nopage from "./Nopage";
import Cricket from "../pages/cricket";
import Fb from "../pages/Fb";
import Feedback from "./Feedback";
function Routerpage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="cricket" element={<Cricket />} />
          <Route path="football" element={<Fb />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Routerpage;
