import { Fragment, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
  useNavigate,
} from "react-router-dom";
import "./index.css";
import "./App.css";
import axios from "axios";
import Website from "./website/Webiste main";
import PlansPage from "./plans/PlansPage";
import BuyPassForm from "./buy/BuyPassForm";
import SuccessPage from "./buy/SuccessPage";
import SearchElitePass from "./search/serach";
import SuccessPageFake from "./buy/fake-ig-pass";


const router = createBrowserRouter([
  { path: '*', element: <Website /> },
  {path: '/search', element: <SearchElitePass/>},
  {path: '/join-elite', element: <BuyPassForm/>},
  {path: '/success', element: <SuccessPage/>},
  {path: '/fake-ig-pass-ig-ig-ig-reel-to-upload', element: <SuccessPageFake/>}
]);


function App() {
  const [subscription, setSubscription] = useState(null);


  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;