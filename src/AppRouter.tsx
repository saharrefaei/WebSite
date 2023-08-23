import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import PageForm from './pages/PageForm'
import PageList from './pages/PageList'
import MainPage from './pages/MainPage'
import PageChart from './pages/PageChart'
import Layout from './Layout'
import LoginUser from './components/toolBar/user/LoginUser/LoginUser'
import SingUp from './components/toolBar/user/signup/singUp'
import Login50HertzUser from './components/toolBar/user/Login50HertzUser/Login50HertzUser'
import RequestAccess from './components/toolBar/user/RequestAccess/RequestAccess'
import RegisterNewAccount from './components/toolBar/acocunts/registerNewAccount/RegisterNewAccount'
import  SingUpnonUser from './components/toolBar/acocunts/signinfornoneuser/siginin'
import GridTemplate from './components/GridTemplate/GridTemplate'
import NotFound from "./pages/Error404";
import ServerError from "./pages/Error500";
import MapComponent from './pages/Map';
import Practice from './components/practice/main/mainPage'
import BadRequest from './pages/Error400';
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to={"/landing"} />} />
        <Route element={<Layout />}>
          <Route path={"landing"} element={<MainPage />} />
          <Route path={"form"} element={<PageForm />} />
          <Route path={"list"} element={<PageList />} />
          <Route path={"chart"} element={<PageChart />} />
          <Route path={"Map"} element={<MapComponent />} />

        </Route>
        <Route path={"LoginUser"} element={<LoginUser />} />
                <Route path={"Login50HertzUser"} element={<Login50HertzUser />} />
                <Route path={"singUp"} element={<SingUp />} />
                <Route path={"RequestAccess"} element={<RequestAccess />} />
                <Route path={"RegisterNewAccount"} element={<RegisterNewAccount />} />
                <Route path={"singUpnonUser"} element={<SingUpnonUser />} />
                <Route path={"GridTemplate"} element={<GridTemplate />} />
                <Route path={"500-Error"} element={<ServerError />} />
                <Route path="*" element={<NotFound />} />
                <Route path={"Practice"} element={<Practice />} />

                </Routes>
                <CssBaseline />
                </BrowserRouter>
  );
};
