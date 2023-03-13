import NewMeetupForm from "../components/meetup/NewMeetupForm";
import { useHistory } from 'react-router-dom'



function NewMeetup() {
  const history = useHistory();
  
  function meetupHandler(meetupdata){
    fetch(
     'https://react-proj-c35a4-default-rtdb.firebaseio.com/meetups.json' ,     
      {  
      method:'POST',
        body:JSON.stringify(meetupdata),
        header: { 
          'Content-Type':'application/json'
        }
        }
    ).then(() => {
      history.replace('/');
    }
    )
  }
  
  return (
    <section>
      <h1>Add NewMeetup</h1>
      <NewMeetupForm OnMeetup={meetupHandler}/>
    </section>
  );
}
export default NewMeetup;
