import { Footor } from "./Footor"
import { Header } from "./Header"
import { Outlet } from "react-router-dom"
export const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Outlet className="flex-grow"/>
        <Footor/>
        </>
    )
}