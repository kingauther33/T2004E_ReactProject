import React from 'react';
import styles from './event.module.css';
import images from "../../../assets";
import { Link } from 'react-router-dom';

const EventDetail = (props) => {
    return(
        <>
            <h1 className={styles['title3']}>Event1</h1>
                <div className="row">
                    <div className="col-6">
                        <img className={styles['img']} width="485" height="300" src={images.events.ni}/>
                    </div>
                    <div className="col-6 ml-auto">
                        <h2 className="site-section-heading mb-3">Cooking Team</h2>
                        <p className={styles['pg']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                        <p className= {styles['pg']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit explicabo
                            odio officiis autem minima quibusdam.</p>
                    </div>
                </div>
        </>
    )
}
export default EventDetail