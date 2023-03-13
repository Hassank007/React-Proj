import { useRef } from "react"; 

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
const titleInputRef = useRef();
const imageInputRef = useRef();
const addressInputRef = useRef();
const descriptionInputRef = useRef();

  function submitHandler(event){
        event.preventDefault();
const enteredTitle = titleInputRef.current.value;
const enteredImage = imageInputRef.current.value;
const enteredaddress = addressInputRef.current.value;
const entereddescription = descriptionInputRef.current.value;
  
const meetupdata = {
  title: enteredTitle,
  image:enteredImage,
  address:enteredaddress,
  description: entereddescription
};
props.OnMeetup(meetupdata);
  }
  
  
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref = {titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup image</label>
          <input type="url" required id="image" ref={imageInputRef}></input>
        </div>
        
        <div className={classes.control}>
          <label htmlFor="address">Meetup address</label>
          <input type="text" required id="address" ref ={addressInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea type="text" required id="description" ref ={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
        <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
