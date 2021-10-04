import React from 'react';
import MeetUpItem from './MeetUpItem';
import classes from './MeetUpList.module.css';

function MeetUpList({ meetups }) {
	return (
		<ul className={classes.list}>
			{meetups.map((meetup) => (
				<MeetUpItem
					key={meetup.id}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					address={meetup.address}
					description={meetup.description}
				/>
			))}
		</ul>
	);
}

export default MeetUpList;
