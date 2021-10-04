import React from 'react';
import { useHistory } from 'react-router-dom';
import NewMeetUpForm from '../meetups/NewMeetUpForm';

function NewMeetUp(props) {
	const history = useHistory();
	function handleAddMeetUp(meetUpData) {
		fetch('https://meetup-a6ea2-default-rtdb.firebaseio.com/meetups.json', {
			method: 'POST',
			body: JSON.stringify(meetUpData),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			history.replace('/');
		});
	}
	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetUpForm onAddMeetUp={handleAddMeetUp} />
		</section>
	);
}

export default NewMeetUp;
