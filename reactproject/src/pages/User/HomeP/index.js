import React from 'react';
import images from "../../../assets";
import styles from "./homepage.module.css";

const HomeP = (props) => {
    return(
        <>
        <div className={styles['container']}>

            <div className={styles['top']}>
                {/* <img src={images.homepage.Healthy_food} alt="HealthyFood"/> */}
                    <p className={styles['center']}>Make your life better</p>
            </div>

            <h1 className={styles['title1']}>Campaign</h1>

            <div className={styles['campaign']}>
                <div className={styles['a1']}>
                    <div className={styles['campaign1']}>
                        <img src={images.homepage.Rectangle} alt="cp1"/>
                    </div>
                    <div className={styles['campaign11']}>
                        <div>
                            <p className={styles['text1']}>Title Campaign</p>
                            <p className={styles['text2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Massa quis enim scelerisque sem. Aliquet mauris, in tortor senectus venenatis, fringilla
                                nulla.
                                Faucibus nisl erat fermentum tempus. Mus venenatis egestas at tristique laoreet dui
                                praesent nam id.
                                Quis eu, ultrices erat</p>
                        </div>
                        <div className={styles['campaign12']}>
                            <p className={styles['text3']}>Total donation: 160,000.00$</p>
                        </div>
                    </div>
                </div>

                <div className={styles['a2']}>
                    <div className={styles['campaign2']}>
                        <img src={images.homepage.camp} alt="cp2"/>
                    </div>
                        <div className={styles['campaign11']}>
                            <div>
                            <p className={styles['text1']}>Title Campaign</p>
                            <p className={styles['text2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Massa quis enim scelerisque sem. Aliquet mauris, in tortor senectus venenatis, fringilla
                                nulla.
                                Faucibus nisl erat fermentum tempus. Mus venenatis egestas at tristique laoreet dui
                                praesent nam id.
                                Quis eu, ultrices erat</p>
                                </div>
                        </div>
                        <div className={styles['campaign12']}>
                            <p className={styles['text3']}>Total donation: 160,000.00$</p>
                        </div>
                </div>

                <div className={styles['a3']}>
                    <div className={styles['campaign3']}>
                        <img src={images.homepage.Rectangle} alt="cp1"/>
                    </div>
                    <div className={styles['campaign11']}>
                        <div>
                            <p className={styles['text1']}>Title Campaign</p>
                            <p className={styles['text2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Massa quis enim scelerisque sem. Aliquet mauris, in tortor senectus venenatis, fringilla
                                nulla.
                                Faucibus nisl erat fermentum tempus. Mus venenatis egestas at tristique laoreet dui
                                praesent nam id.
                                Quis eu, ultrices erat</p>
                        </div>
                        <div className={styles['campaign12']}>
                            <p className={styles['text3']}>Total donation: 160,000.00$</p>
                        </div>
                    </div>
                </div>

                <div className={styles['a4']}>
                    <div className={styles['campaign4']}>
                        <img src={images.homepage.Rectangle} alt="cp1"/>
                    </div>
                    <div className={styles['campaign11']}>
                        <div>
                            <p className={styles['text1']}>Title Campaign</p>
                            <p className={styles['text2']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Massa quis enim scelerisque sem. Aliquet mauris, in tortor senectus venenatis, fringilla
                                nulla.
                                Faucibus nisl erat fermentum tempus. Mus venenatis egestas at tristique laoreet dui
                                praesent nam id.
                                Quis eu, ultrices erat</p>
                        </div>
                        <div className={styles['campaign12']}>
                            <p className={styles['text3']}>Total donation: 160,000.00$</p>
                        </div>
                    </div>
                </div>

                <button type="button" className={styles['button1']}>See all</button>

            </div>

            <h1 className={styles['title2']}>Events</h1>

            <div className={styles['event']}>
                <div className={styles['event1']}>
                    <div className={styles['event11']}>
                        <img src={images.homepage.event1} alt="event1"/>
                    </div>
                    <div className={styles['event12']}>
                        <h4>Event 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>

                <div className={styles['event2']}>
                    <div className={styles['event21']}>
                        <img src={images.homepage.event2} alt="event1"/>
                    </div>
                    <div className={styles['event22']}>
                        <h4>Event 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>

                <div className={styles['event3']}>
                    <div className={styles['event31']}>
                        <img src={images.homepage.event3} alt="event1"/>
                    </div>
                    <div className={styles['event32']}>
                        <h4>Event 1</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
            </div>
        </div>
        </>
        );
};

export default HomeP;