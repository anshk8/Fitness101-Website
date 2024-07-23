import React from "react";


export default function Navbar() {





    return (

        <div className="nav-container">


            <img alt="website-log" src="https://static.vecteezy.com/system/resources/thumbnails/013/146/831/small_2x/body-builder-lifting-a-dumbbell-png.png">
            </img>


            <ul className="nav-bar">
                {/* Go to Home Page and Remove Underline from Link */}
                <li >  Home  </li>
                <li>
                    <a href="#exercises" style={{ textDecoration: "none", color: "black" }}>
                        Exercises
                    </a>
                </li>
                <li>
                    <a href="#motivation" style={{ textDecoration: "none", color: "black" }}>
                        Motivation
                    </a>
                </li>
                {/* <li> About </li> */}
            </ul>

        </div>

    )
}