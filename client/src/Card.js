import React from 'react'
import './card.css'
import DateCalender from "./DateCalender";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Card = () => {
    return (
        <>
            <div className='containerr'>
                <div className='header'>
                    <div className="aeroplane-trip-types">
                        <div style={{ color: "black", fontSize: "10px" }}>
                            <label>
                                <input type="radio" name="oneway" placeholder="" />
                                ONEWAY
                            </label>
                            <label>

                                <input type="radio" name="oneway" placeholder="" />
                                ROUNDTRIP
                            </label>
                            <label>

                                <input type="radio" name="oneway" placeholder="" />
                                MULTICITY
                            </label>
                        </div>
                        <div> <h5>Book International and Dosmatic Flights</h5></div>
                    </div>

                    <div
                        style={{
                            border: "1px solid black",
                            width: "1140px",
                            height: "122px",
                            marginLeft: "80px",
                            borderRadius: "5px",
                            display: "flex",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "10px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "20px",
                                    fontSize: "20px",
                                    marginTop: "10px",
                                }}
                            >
                                From
                            </div>
                            <select
                                style={{
                                    height: "40px",
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    width: "200px",
                                    WebkitAppearance: "none",
                                    border: "none",
                                    margin: "0 50px 0 20px",
                                }}
                                type="text"
                                name="from"
                                placeholder=""
                            >
                                <option style={{ fontSize: "20px", fontWeight: "bold" }}>Delhi</option>
                                <option style={{ fontSize: "20px" }}>Bangalore</option>
                                <option style={{ fontSize: "20px" }}>Mumbai</option>
                                <option style={{ fontSize: "20px" }}>Hyderabad</option>
                                <option style={{ fontSize: "20px" }}>Chennai</option>
                            </select>
                            <p style={{ marginLeft: "20px" }}>DEL,Delhi Airtpot India</p>
                        </div>
                        <div style={{ borderLeft: "2px solid black", height: "121px" }}></div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "10px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "20px",
                                    fontSize: "20px",
                                    marginTop: "10px",
                                }}
                            >
                                To
                            </div>
                            <select
                                style={{
                                    height: "40px",
                                    fontSize: "30px",
                                    width: "200px",
                                    WebkitAppearance: "none",
                                    fontWeight: "bold",
                                    border: "none",
                                    margin: "0 50px 0 20px",
                                }}
                                type="text"
                                name="from"
                                placeholder=""
                            >
                                <option style={{ fontSize: "20px" }}>Mumbai</option>
                                <option style={{ fontSize: "20px" }}>Bangalore</option>
                                <option style={{ fontSize: "20px" }}>Hyderabad</option>
                                <option style={{ fontSize: "20px" }}>Delhi</option>
                                <option style={{ fontSize: "20px" }}>Chennai</option>
                            </select>
                            <p style={{ marginLeft: "20px" }}>DEL,Delhi Airtpot India</p>
                        </div>
                        <div style={{ borderLeft: "2px solid black", height: "121px" }}></div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "10px",
                                paddingRight: "10px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "20px",
                                    fontSize: "20px",
                                    marginTop: "10px",
                                }}
                            >
                            <div className="dropdown">
                            <a
                                className="dropdown-toggle " style={{textDecoration:"none",color:"black"}} 
                            >
                                Departure
                            </a>
                       
                        </div>
                                <div style={{ display: "flex" }}> <h4>8</h4> <p style={{ margin: "10px 0px 0px 5px" }}>Apr' 24</p></div>
                            </div>
                           

                            <p style={{ margin: "auto" }}>Monday</p>

                        </div>
                        <div style={{ borderLeft: "2px solid black", height: "121px" }}></div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "10px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "20px",
                                    fontSize: "20px",
                                    marginTop: "10px",
                                }}
                            >
                            <div className="dropdown">
                            <a
                                className="dropdown-toggle " style={{textDecoration:"none",color:"black"}} 
                            >
                            Return
                            </a>
                       
                        </div>
                                <div style={{ display: "flex" }}> <h4>8</h4> <p style={{ margin: "10px 0px 0px 5px" }}>Mar' 4</p></div>
                            </div>
                            <p style={{ margin: "auto" }}>Tuseday</p>
                        </div>
                        <div
                            style={{
                                borderLeft: "2px solid black",
                                height: "121px",
                                marginLeft: "20px",
                            }}
                        ></div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "10px",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "20px",
                                    fontSize: "20px",
                                    marginTop: "10px",
                                }}
                            >
                                Travellers

                            </div>

                            <div style={{ display: "flex" }}>
                                <select
                                    style={{
                                        height: "40px",
                                        fontSize: "30px",
                                        width: "50px",
                                        WebkitAppearance: "none",
                                        fontWeight: "bold",
                                        border: "none",
                                        margin: "0 0px 0 20px",
                                    }}
                                    type="text"
                                    name="from"
                                    placeholder=""
                                >
                                    <option style={{ fontSize: "20px" }}>1</option>
                                    <option style={{ fontSize: "20px" }}>2</option>
                                    <option style={{ fontSize: "20px" }}>3</option>
                                    <option style={{ fontSize: "20px" }}>4</option>
                                    <option style={{ fontSize: "20px" }}>5</option>
                                    <option style={{ fontSize: "20px" }}>6</option>
                                </select>
                                <div style={{ fontSize: "23px", margin: "5px 0 0 -25px " }}>
                                    Travellers
                                </div>
                            </div>
                            <p style={{ margin: "0px 0px 0px 22px" }}>Economy/Premium Economy</p>
                        </div>
                    </div>

                    <div style={{ display: "flex" }}>
                        <div
                            style={{
                                color: "black",
                                fontSize: "10px",
                                margin: " 15px 0 0 85px",
                                display: "flex",
                                background: "rgb(232, 242, 242)",
                                width: "38%",
                                padding: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            <div style={{ display: "flex", marginRight: "10px" }}>
                                <div>
                                    Select A <br />
                                    Fare Type:
                                </div>
                                <input type="radio" name="oneway" placeholder="" />
                                <div>
                                    Regular <br />
                                    Fares
                                </div>
                            </div>
                            <div style={{ display: "flex", marginRight: "10px" }}>
                                <input type="radio" name="oneway" placeholder="" />
                                <div>
                                    Armed Forces <br />
                                    Fares
                                </div>
                            </div>
                            <div style={{ display: "flex", marginRight: "10px" }}>
                                <input type="radio" name="oneway" placeholder="" />
                                <div>
                                    Student <br />
                                    Fares
                                </div>
                            </div>
                            <div style={{ display: "flex", marginRight: "10px" }}>
                                <input type="radio" name="oneway" placeholder="" />
                                <div>
                                    Senior Citizen <br />
                                    Fares
                                </div>
                            </div>
                            <div style={{ display: "flex", marginRight: "10px" }}>
                                <input type="radio" name="oneway" placeholder="" />
                                <div>
                                    Double Seat <br />
                                    Fares
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Card
