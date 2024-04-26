/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./SubmissionForm.css";

function SubmissionForm() {
  const [fname, setFname] = useState("");
  const [sname, setSname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [selectOption, setSelectOption] = useState("");
  const [selectSubject, setSelectSubject] = useState({
    english: false,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [answer, setAnswer] = useState("");
  const [about, setAbout] = useState("");

  return (
    <div className="app">
      <h1>Form in React</h1>
      <Form
        fname={fname}
        setFname={setFname}
        setSname={setSname}
        sname={sname}
        email={email}
        setEmail={setEmail}
        contact={contact}
        setContact={setContact}
        selectOption={selectOption}
        setSelectOption={setSelectOption}
        selectSubject={selectSubject}
        setSelectSubject={setSelectSubject}
        resume={resume}
        setResume={setResume}
        url={url}
        setUrl={setUrl}
        answer={answer}
        setAnswer={setAnswer}
        about={about}
        setAbout={setAbout}
      />
    </div>
  );
}

function Form({
  fname,
  setFname,
  sname,
  setSname,
  email,
  setEmail,
  contact,
  setContact,
  selectOption,
  setSelectOption,
  selectSubject,
  setSelectSubject,
  resume,
  setResume,
  url,
  setUrl,
  answer,
  setAnswer,
  about,
  setAbout,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      fname,
      sname,
      email,
      contact,
      selectOption,
      resume,
      url,
      answer,
      about,
    };

    console.log(newData);
  }

  function handleReset() {
    setFname("");
    setSname("");
    setEmail("");
    setContact(0);
    setSelectOption("");
    setSelectSubject({ english: false, maths: false, physics: false });
    setUrl("");
    setAnswer("");
    setAbout("");
  }

  function handleOptionChange(e) {
    setSelectOption(e.target.value);
  }

  function handleChange(sub) {
    setSelectSubject((prev) => ({ ...prev, [sub]: !prev[sub] }));
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            id="fname"
            name="fname"
            placeholder="Enter  First Name"
            type="text"
            required
          />
          <br />
          <label htmlFor="sname">Last name:</label>
          <br />
          <input
            id="sname"
            name="sname"
            value={sname}
            onChange={(e) => setSname(e.target.value)}
            placeholder="Enter last name"
            type="text"
            required
          />
          <br />
          <label htmlFor="email">Enter Email:</label>
          <br />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
            required
          />
          <br />
          <label htmlFor="contact">Contact</label>
          <br />
          <input
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            name="contact"
            placeholder="Enter Mobile Number"
            type="number"
            required
          />
        </div>

        <br />
        <div>
          <span>Gender*</span>
          <br />
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            // checked={selectOption === "male"}
            onChange={handleOptionChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            // checked={selectOption === "female"}
            onChange={handleOptionChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="others"
            value="others"
            // checked={selectOption === "others"}
            onChange={handleOptionChange}
          />
          <label htmlFor="others">others</label>
        </div>
        <br />

        <div>
          <span>Your Favorite Subject*</span>
          <br />
          <input
            type="checkbox"
            name="subject"
            id="english"
            value="english"
            onChange={() => handleChange("english")}
          />
          <label htmlFor="english">english</label>
          <input
            type="checkbox"
            name="subject"
            id="maths"
            value="maths"
            onChange={() => handleChange("maths")}
          />
          <label htmlFor="maths">maths</label>
          <input
            type="checkbox"
            name="subject"
            id="physics"
            value="physics"
            onChange={() => handleChange("physics")}
          />
          <label htmlFor="physics">physics</label>
        </div>
        <br />

        <div>
          <span>Upload Resume*</span>
          <br />
          <input
            type="file"
            id="myfile"
            name="myfile"
            onChange={(e) => {
              setResume(e.target.value);
            }}
          />
        </div>
        <br />

        <div>
          <span>Enter URL*</span>
          <br />
          <input
            type={url}
            placeholder="Enter url"
            id="url"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="answer">Select your Choice:</label>
          <br />

          <select
            name="answer"
            id="answer"
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
          >
            <option value="" disabled selected={answer === ""}>
              Select Your Choice
            </option>
            <optgroup label="beginner">
              <option value="html">html</option>
              <option value="css">Css</option>
              <option value="javascript">javascript</option>
            </optgroup>
            <optgroup label="advance">
              <option value="React">React</option>
            </optgroup>
          </select>
        </div>

        <br />
        <div>
          <label htmlFor="about">About</label>
          <br />
          <input
            type="textArea"
            placeholder="About ur self"
            style={{ height: "100px", width: "250px" }}
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />

          <p>Submit or Reset</p>
        </div>

        <div className="resetBtn">
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SubmissionForm;

/*
       
        
        
       

   
      
          
        
         */
