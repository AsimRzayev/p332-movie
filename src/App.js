import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./module/Home";
import AdminPanel from "./module/Admin";
import React from "react";
import Profile from "./module/Profile";

function ProtectedRoute({isAllow,children}){
  if(!isAllow){
    return <Navigate to="/" replace={true} />
  }

  return children?children:<Outlet/>
}

function App() {


  const user=React.useMemo(()=>{
    return {
      userName:"Afiq",
      isLogin:true,
      permissions:[]
    };
 } ,[])  

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route element={<ProtectedRoute isAllow={user.isLogin} />} >
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/profile" element={<Profile />}/>
      </Route>

      <Route path="/edit" element={<ProtectedRoute isAllow={user.isLogin && user.permissions.includes("edit")}>
        <h1>Salam menim edit accesim var</h1>
      </ProtectedRoute >}/>
    </Routes>
  );
}

export default App;
