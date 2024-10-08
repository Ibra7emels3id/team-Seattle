import React from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Home from './Pages/Home';
import Ourpartners from './Pages/Ourpartners';
import TeamS from './Components/abuotus/TeamS';
import TeamDetails from './Components/abuotus/TeamDetails';
import Service from './Components/service/Service';
import ServieDetails from "./Components/service/ServieDetails";
import Abudhabi from "./Components/our-project/Abudhabi";
import AbudhabiDetails from './Components/our-project/AbudhabiDetails';
import Mortgage from './Components/morttgage/Mortgage';
import Spartan from './Components/morttgage/Spartan';
import LatestNews from './Components/blog/LatestNews';
import Blog from './Components/blog/Blog';
import FormMS from './Components/morttgage/FormMS';
import Careers from './Components/contactus/Careers';
import Contactus from './Components/contactus/Contactus';
import Dashboard from './admin/Dashboard';
import Login from './Pages/Login';
import NotFonunt from './Pages/NotFonunt';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Formdb from './admin/pageDb/Formdb';
import Formservice from './admin/pageDb/Formservice';
import RequestQuote from './admin/pageDb/RequestQuote';
import TEameform from './admin/pageDb/TEameform';
import MasssgeUs from './admin/pageDb/MasssgeUs';
import BlogsCreat from './admin/pageDb/BlogsCreat';
import BlogsUpdete from './admin/pageDb/BlogsUpdete';
import UpdateBlog from './admin/pageDb/UpdateBlog';
import LastNews from './Components/blog/LastNews';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Ourpartners" element={<Ourpartners />} />
                    <Route path="TeamS" element={<TeamS />} />
                    <Route path="TeamDetails/:Teamid" element={<TeamDetails />} />
                    <Route path="Service" element={<Service />} />
                    <Route path="ServieDetails/:Servieid" element={<ServieDetails />} />
                    <Route path="Abudhabi" element={<Abudhabi />} />
                    <Route path="AbudhabiDetails/:AbudhabiDetails" element={<AbudhabiDetails />} />
                    <Route path="Mortgage" element={<Mortgage />} />
                    <Route path="Spartan" element={<Spartan />} />
                    <Route path="LatestNews" element={<LatestNews />} />
                    <Route path="Blog/:id" element={<Blog />} />
                    <Route path="FormMS" element={<FormMS />} />
                    <Route path="Careers" element={<Careers />} />
                    <Route path="Contactus" element={<Contactus />} />
                    <Route path="LastNews" element={<LastNews />} />
                    <Route path="*" element={<NotFonunt />} />
                    <Route path="login" element={<Login />} />
                    <Route path="dashboard" element={<Dashboard />} >
                        <Route index element={<Formdb />} />
                        <Route path="Formservice" element={<Formservice />} />
                        <Route path="RequestQuote" element={<RequestQuote />} />
                        <Route path="TEameform" element={<TEameform />} />
                        <Route path="MasssgeUs" element={<MasssgeUs />} />
                        <Route path="BlogsCreat" element={<BlogsCreat />} />
                        <Route path="BlogsUpdete" element={<BlogsUpdete />} />
                        <Route path="update-blog/:id" element={<UpdateBlog />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </div>
    );
}
