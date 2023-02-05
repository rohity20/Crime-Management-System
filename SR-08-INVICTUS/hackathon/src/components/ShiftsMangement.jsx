// Useless component

import React from 'react';
import "./ShiftsMangement.css";

const ShiftsMangement = () => {

    return (
        <>
            <div className="header" style={
                {
                    "width": "100%",
                    "height": "400px",
                    "backgroundColor": "blue",
                    "display": "flex",
                    "flexDirection": "column",
                    "justifyContent": "center",
                    "color": "white"
                }
            }>
                <h1 style={
                    {
                        "textAlign": "center"
                    }
                }>
                    These are the available shifts
                </h1>
            </div>
            <div style={
                {
                    "display": "flex",
                    "justifyContent": "center"
                }
            }>
                <div style={
                    {
                        "display": "flex",
                        "flexDirection": "column",
                        "paddingTop": "20px"
                    }
                }>
                    <ShiftCard type="Day Shift" onClick={() => {}}/>
                    <ShiftCard type="Night Shift" onClick={() => {}}/>
                    <ShiftCard type="Extra Shift" onClick={() => {}}/>
                </div>
            </div>
        </>
    )
}

const ShiftCard = ({ type }) => {
    return (
        <div className="card" style={
            {
                "backgroundColor": "blue",
                "width": "150px",
                "height": "100px",
                "marginTop": "20px",
                "color": "white",
                "paddingTop": "25px",
                "alignItems": "center",
                "textAlign": "center",
                "transition": "0.5s",
                "cursor": "pointer"
            }
        }>
           {type} 
        </div>
    )
}

export default ShiftsMangement;

