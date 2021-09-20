import React from 'react';
import styles from './event.module.css';
import images from "../../../assets";
import { Link } from 'react-router-dom';


const Events = (props) => {
	return(
		<>
			<h1 className={styles['title2']}>Events</h1>
			<div className={styles['container']}>

			<div className="col-4">
				<div className={styles['event11']}>
					<img src={images.homepage.event1} alt="event1"/>
				</div>
				<div className={styles['event12']}>
					<h4>Event 1</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
				</div>
				<Link to="/eventdetail">
					<button> More event</button>
				</Link>
			</div>
			<div className="col-4">
				<div className={styles['event21']}>
					<img src={images.homepage.event2} alt="event1"/>
				</div>
				<div className={styles['event22']}>
					<h4>Event 2</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
				</div>
				<Link to="/">
					<Link to="/dashboard">
						<button> More event</button>
					</Link>
				</Link>
			</div>
			<div className={styles['col-4']}>
				<div className={styles['event31']}>
					<img src={images.homepage.event3} alt="event1"/>
				</div>
				<div className={styles['event32']}>
					<h4>Event 3</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
				</div>
				<Link to="/">
					<button> More event</button>
				</Link>
					</div>
				</div>

	 </>
);
};

export default Events;
