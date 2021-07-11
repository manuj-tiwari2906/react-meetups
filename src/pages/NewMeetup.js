import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/Meetups/NewMeetupForm";

function NewMeetup() {

  const history = useHistory();

  function meetupHandler(meetupData) {
    fetch(
      "https://react-meetup-bad2e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json"
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>This is New Meetup</h1>
      <NewMeetupForm onAddMeetups={meetupHandler} />
    </section>
  );
}

export default NewMeetup;
