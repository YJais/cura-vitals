// import { Toaster } from "./components/ui/toaster.jsx";
// import { Toaster as Sonner } from "./components/ui/sonner.jsx";
// import { TooltipProvider } from "./components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header.jsx";

import Landing from "./pages/landing.jsx";
import Role_sel from "./pages/role_sel.jsx";
import Signupform from "./pages/signupform.jsx";
import Loginform from "./pages/loginform.jsx";
import ForgetPass from "./pages/forgetpass.jsx";
// import UserDashboard from "./pages/user_dash.jsx";
// import LabDashboard from "./pages/lab_dash.jsx";
// import GovtDashboard from "./pages/goverment_dash.jsx";
// import PubEmpDashboard from "./pages/pub_emp_dashboard.jsx";
// import NotFound from "./pages/notfound.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* <TooltipProvider>
      <Toaster />
      <Sonner /> */}
      <BrowserRouter>
      {/* <Header languages={languages}/> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/role_sel" element={<Role_sel />} />
          <Route path="/signup" element={<Signupform />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/forget" element={<ForgetPass />} />
          {/* <Route path="/dashboard/worker" element={<UserDashboard />} />
          <Route path="/dashboard/lab" element={<LabDashboard />} />
          <Route path="/dashboard/government" element={<GovtDashboard />} />
          <Route path="/dashboard/public-employee" element={<PubEmpDashboard />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    {/* </TooltipProvider> */}
  </QueryClientProvider>
);

export default App;
