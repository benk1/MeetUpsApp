import React from 'react';
import classes from './LayOut.module.css';
import MainNavigation from './MainNavigation';
function LayOut(props) {
	return (
		<div>
			<MainNavigation />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
}

export default LayOut;
