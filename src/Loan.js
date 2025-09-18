<<<<<<< HEAD
import "./style.css";
import { useState } from "react";
import MessageBoxMain from "./MsgBox.js";

export default function MainLoan() {



    const [fromInput, setfromInput] = useState(

        {
            name: "",
            phoneNumber: "",
            age: null,
            areYouEmployee: false,
            Salary: "",

        })


    // to disable submit button until all fields are filled
    const isBtnDisabled = fromInput.name === "" || fromInput.phoneNumber === ""
        || fromInput.age === 0 || fromInput.Salary === "";

    const [isDisplay, setIsDisplay] = useState(false);
    const [boxMsg, setBoxMsg] = useState("");
    const [boxType, setBoxType] = useState("info");

    function showMessage(msg, type = "info") {
        setBoxMsg(msg);
        setBoxType(type);
        setIsDisplay(true);
    }
  // to disable submit button until all fields are filled -- End //



  // button click handler

    function onClickBtn(event) {
        event.preventDefault();
        const errors = validateAll();
        if (errors.length) {

            showMessage(errors.join(), "error");
            return;
        }

        showMessage("Form has been sent successfully  ", "success");
        
    }


    let buttonClass = "";
    if (isBtnDisabled) {
        buttonClass = "disabled";
    } else {
        buttonClass = "";
    }

// button click handler -- End //



// functions ............//

    function HandleCheckBox(event) {

        setfromInput({ ...fromInput, areYouEmployee: event.target.checked })

    }



    function ValidateName(name, errors) {
        if (!name || !name.trim()) {
            errors.push("Please enter your name");
            return false;
        }
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name.trim())) {
            errors.push("Invalid name (letters & spaces only)");
            return false;
        }
        return true;
    }


    function ValidateAge(age, errors) {
        if (age === "" || age === null || age === undefined) {
            errors.push("Please enter your age");
            return false;
        }
        const n = Number(age);
        if (!Number.isFinite(n)) {
            errors.push("Invalid age (not a number)");
            return false;
        }
        if (n < 18 || n > 65) {
            errors.push("Age must be between 18 and 65");
            return false;
        }
        return true;
    }

    function ValidatePhoneNumber(phoneNumber, errors) {
        if (!phoneNumber || !String(phoneNumber).trim()) {
            errors.push("Please enter your phone number");
            return false;
        }
        const phoneRegex = /^[0-9]{9,12}$/;
        if (!phoneRegex.test(String(phoneNumber).trim())) {
            errors.push("The phone number must be 9–12 digits (numbers only)");
            return false;
        }
        return true;
    }


    function ValidateSalary(salary, errors) {
        if (!salary) {
            errors.push("Please select your salary");
            return false;
        }
        if (salary === "<500") {
            errors.push("You must earn more than $500 to apply for a loan");
            return false;
        }
        if (salary === "0") {
            errors.push("Please select your salary range");
            return false;
        }
        return true;
    }


    function ValidateEmployeeStatus(isEmployee, errors) {
        if (!isEmployee) {
            errors.push("You must be an employee to apply for a loan");
            return false;
        }
        return true;
    }


    function validateAll() {
        const errors = [];
        ValidateName(fromInput.name, errors);
        ValidatePhoneNumber(fromInput.phoneNumber, errors);
        ValidateAge(fromInput.age, errors);
        ValidateSalary(fromInput.Salary, errors);
        ValidateEmployeeStatus(fromInput.areYouEmployee, errors);
        return errors;
    }


// functions ............// End //




    //------------------------------------------------------------------------------------------------------------- //


    return (
        <div className="MainPageLocal">
            <div className="MainBody">
                <div className="Header">
                    <h1> Requesting a Loan </h1>
                    <hr style={{ color: "white" }}></hr>
                </div>

                <form
                    className="Form"

                >
                    <label > Name </label>
                    <input
                        placeholder="Your full name"
                        value={fromInput.name}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, name: event.target.value })
                        }}
                    />
                    <label> Phone Number </label>
                    <input
                        placeholder="Your phone number"
                        value={fromInput.phoneNumber}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, phoneNumber: event.target.value })
                        }}
                    />
                    <label> Age </label>
                    <input
                        placeholder="Your age"
                        value={fromInput.age}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, age: event.target.value })
                        }}
                    />
                
                    <label>Are you employee ? </label>
                    <input
                        type="checkbox"
                        checked={fromInput.areYouEmployee}
                        onChange={HandleCheckBox}
                    />
                    <label>Salary</label>
                    <select

                        className="selctMene"
                        value={fromInput.Salary}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, Salary: event.target.value })
                        }}
                    >
                        <option value="0"> Select your salary range</option>
                        <option value="<500">Less than $500 </option>
                        <option value={"500-1500"}>Between $500 - $1500</option>
                        <option value={"1500-2500"}>Between $1500 - $2500</option>
                    </select>
                    <button
                        id="BtnStyl"
                        type="submit"
                        className={buttonClass}
                        disabled={isBtnDisabled}
                        onClick={onClickBtn}
                    >Submit</button>


                </form>
                <MessageBoxMain
                    msg={boxMsg}
                    type={boxType}
                    isOpen={isDisplay}
                    onClose={() => setIsDisplay(false)}
                />
            </div>

        </div>
    );
}

//------------------------------------------------------------------------------------------------------------- // End //
=======
import "./style.css";
import { useState } from "react";
import MessageBoxMain from "./MsgBox.js";

export default function MainLoan() {



    const [fromInput, setfromInput] = useState(

        {
            name: "",
            phoneNumber: "",
            age: null,
            areYouEmployee: false,
            Salary: "",

        })


    // to disable submit button until all fields are filled
    const isBtnDisabled = fromInput.name === "" || fromInput.phoneNumber === ""
        || fromInput.age === 0 || fromInput.Salary === "";

    const [isDisplay, setIsDisplay] = useState(false);
    const [boxMsg, setBoxMsg] = useState("");
    const [boxType, setBoxType] = useState("info");

    function showMessage(msg, type = "info") {
        setBoxMsg(msg);
        setBoxType(type);
        setIsDisplay(true);
    }
  // to disable submit button until all fields are filled -- End //



  // button click handler

    function onClickBtn(event) {
        event.preventDefault();
        const errors = validateAll();
        if (errors.length) {

            showMessage(errors.join(), "error");
            return;
        }

        showMessage("Form has been sent successfully  ", "success");
        
    }


    let buttonClass = "";
    if (isBtnDisabled) {
        buttonClass = "disabled";
    } else {
        buttonClass = "";
    }

// button click handler -- End //



// functions ............//

    function HandleCheckBox(event) {

        setfromInput({ ...fromInput, areYouEmployee: event.target.checked })

    }



    function ValidateName(name, errors) {
        if (!name || !name.trim()) {
            errors.push("Please enter your name");
            return false;
        }
        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(name.trim())) {
            errors.push("Invalid name (letters & spaces only)");
            return false;
        }
        return true;
    }


    function ValidateAge(age, errors) {
        if (age === "" || age === null || age === undefined) {
            errors.push("Please enter your age");
            return false;
        }
        const n = Number(age);
        if (!Number.isFinite(n)) {
            errors.push("Invalid age (not a number)");
            return false;
        }
        if (n < 18 || n > 65) {
            errors.push("Age must be between 18 and 65");
            return false;
        }
        return true;
    }

    function ValidatePhoneNumber(phoneNumber, errors) {
        if (!phoneNumber || !String(phoneNumber).trim()) {
            errors.push("Please enter your phone number");
            return false;
        }
        const phoneRegex = /^[0-9]{9,12}$/;
        if (!phoneRegex.test(String(phoneNumber).trim())) {
            errors.push("The phone number must be 9–12 digits (numbers only)");
            return false;
        }
        return true;
    }


    function ValidateSalary(salary, errors) {
        if (!salary) {
            errors.push("Please select your salary");
            return false;
        }
        if (salary === "<500") {
            errors.push("You must earn more than $500 to apply for a loan");
            return false;
        }
        if (salary === "0") {
            errors.push("Please select your salary range");
            return false;
        }
        return true;
    }


    function ValidateEmployeeStatus(isEmployee, errors) {
        if (!isEmployee) {
            errors.push("You must be an employee to apply for a loan");
            return false;
        }
        return true;
    }


    function validateAll() {
        const errors = [];
        ValidateName(fromInput.name, errors);
        ValidatePhoneNumber(fromInput.phoneNumber, errors);
        ValidateAge(fromInput.age, errors);
        ValidateSalary(fromInput.Salary, errors);
        ValidateEmployeeStatus(fromInput.areYouEmployee, errors);
        return errors;
    }


// functions ............// End //




    //------------------------------------------------------------------------------------------------------------- //


    return (
        <div className="MainPageLocal">
            <div className="MainBody">
                <div className="Header">
                    <h1> Requesting a Loan </h1>
                    <hr style={{ color: "white" }}></hr>
                </div>

                <form
                    className="Form"

                >
                    <label > Name </label>
                    <input
                        placeholder="Your full name"
                        value={fromInput.name}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, name: event.target.value })
                        }}
                    />
                    <label> Phone Number </label>
                    <input
                        placeholder="Your phone number"
                        value={fromInput.phoneNumber}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, phoneNumber: event.target.value })
                        }}
                    />
                    <label> Age </label>
                    <input
                        placeholder="Your age"
                        value={fromInput.age}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, age: event.target.value })
                        }}
                    />
                
                    <label>Are you employee ? </label>
                    <input
                        type="checkbox"
                        checked={fromInput.areYouEmployee}
                        onChange={HandleCheckBox}
                    />
                    <label>Salary</label>
                    <select

                        className="selctMene"
                        value={fromInput.Salary}
                        onChange={(event) => {
                            setfromInput({ ...fromInput, Salary: event.target.value })
                        }}
                    >
                        <option value="0"> Select your salary range</option>
                        <option value="<500">Less than $500 </option>
                        <option value={"500-1500"}>Between $500 - $1500</option>
                        <option value={"1500-2500"}>Between $1500 - $2500</option>
                    </select>
                    <button
                        id="BtnStyl"
                        type="submit"
                        className={buttonClass}
                        disabled={isBtnDisabled}
                        onClick={onClickBtn}
                    >Submit</button>


                </form>
                <MessageBoxMain
                    msg={boxMsg}
                    type={boxType}
                    isOpen={isDisplay}
                    onClose={() => setIsDisplay(false)}
                />
            </div>

        </div>
    );
}

//------------------------------------------------------------------------------------------------------------- // End //
>>>>>>> dc14607 (Initial commit)
