import Exam from "../pages/Exam/index";
import Home from "../pages/Home/index";
import Login from "../pages/Authentication/Login/index";
import SignUp from "../pages/Authentication/SignUp/index";
const publicRouter = [
  { path: "/", component: Home },
  { path: "/exam", component: Exam },
  { path: "/login", component: Login, layout: null },
  { path: "/signup", component: SignUp, layout: null },
];
const privateRouter = {};
export { privateRouter, publicRouter };
