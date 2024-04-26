/* eslint-disable no-unused-vars */
import { useState } from "react";

//BASIC SKELETON
export default function Checkbox() {
  const [subject, setSubject] = useState({
    english: false,
    maths: false,
    physics: false,
  });

  function handleSubjectChange(sub) {
    setSubject((prevSub) => ({ ...prevSub, [sub]: !prevSub[sub] }));
  }
  console.log(subject);
  return (
    <div>
      <form>
        <div>
          <span>Your Favorite Subject*</span>
          <br />
          <input
            type="checkbox"
            name="subject"
            id="english"
            value="english"
            onChange={(e) => handleSubjectChange("english")}
          />
          <label htmlFor="english">english</label>
          <input
            type="checkbox"
            name="subject"
            id="maths"
            value="maths"
            onChange={(e) => handleSubjectChange("maths")}
          />
          <label htmlFor="maths">maths</label>
          <input
            type="checkbox"
            name="subject"
            id="physics"
            value="physics"
            onChange={(e) => handleSubjectChange("physics")}
          />
          <label htmlFor="physics">physics</label>
        </div>
      </form>
    </div>
  );
}


// [sub]: !prevSub[sub]
//ye is object ki sub property uthayega or isko replace kardega with !prevSub[sub] se
