import React from "react";
import {StyledCases} from "./cases.styled";
import Category from "../../component/tabs"
import Footer from "../../component/footer";
import HeaderPage from "../../component/headerPage"



const Cases = () => {


    return (
        <div style={{overflowY:"hidden"}}>
        <HeaderPage/>
        <div className="view">
            <div className="content">
                <div className="content--inner tableHome">
        <div className="conteiner tableDiv ">
          <Category/>
            <Footer/>
        </div>
                </div>
            </div>

        </div>

            </div>
    )
}
export default Cases;
