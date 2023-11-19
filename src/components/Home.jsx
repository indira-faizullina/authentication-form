import React, { useContext } from "react";
import "./Home.css";
import AuthContext from "../store/Auth-context";

const Home = (props) => {

const context = useContext(AuthContext)

  return (
    <>
        {context.isLoggedIn && (
            <div className="box">
            <button onClick={context.onLogout} className="logout">Log Out</button>
            <img src="https://media4.giphy.com/media/t1uL0HsyPZl7NF5fLv/giphy.gif?cid=ecf05e47p3awe1m6arv29e3ydyqhxmscrnzfq1vvjhmnmwg7&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="welcome" />
            </div>
        )}
    </>
  );
};

export default Home;