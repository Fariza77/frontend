import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import NotFoundPage from "../NotFoundPage";
import LandingPage from "../LandingPage";
import About from "../About";
import Team from "../Team";
import Blog from '../Blog';
import Product from "../Product";
import Contact from "../Contact";
import BlogDetails from "../Blog/BlogDetails";
import ProductDetails from "../Product/ProductDetails";
import FetchUsers from "./FetchUsers";



const UserFetchedLandingPage = FetchUsers(LandingPage)
const UserFetchedAbout = FetchUsers(About)
const UserFetchedTeam = FetchUsers(Team)
const UserFetchedBlog = FetchUsers(Blog)
const UserFetchedBlogDetails = FetchUsers(BlogDetails)
const UserFetchedProducts = FetchUsers(Product)
const UserFetchedProductDetails = FetchUsers(ProductDetails)
const UserFetchedContacts = FetchUsers(Contact)
const UserFetchedNoPage = FetchUsers(NotFoundPage)
 


export default function AllComponents() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<UserFetchedLandingPage/>} />
          <Route path="/about" element={<UserFetchedAbout/>}/>
          <Route path="/team" element={<UserFetchedTeam/>}/>
          <Route path="/blog" element={<UserFetchedBlog />}/>
          <Route path="/blog/:id" element={<UserFetchedBlogDetails />}/>
          <Route path="/product" element={<UserFetchedProducts/>}/>
          <Route path="/product/:id" element={< UserFetchedProductDetails/>}/>
          <Route path="/contact" element={<UserFetchedContacts/>}/>
          <Route path="*" element={<UserFetchedNoPage />} />
        </Route>
      </Routes>
    </>
  );
}
