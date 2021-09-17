import React from 'react';
import images from "../../../assets";
import styles from "./homepage.module.css";

const HomeP = (props) => {
    return(
        <>
        <section className={styles['homepage']}>
            <div className={styles['container']}>            
                <div className={styles['top']}>
                    <img src={images.homepage.Healthy_food} alt="HealthyFood"/>
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

                <h1 className={styles['title3']}>Recipe</h1>

                <div className={styles['recipe']}>
                    <div className={styles['recipe1']}>
                        <img src={images.homepage.recipe} alt="recipe"/>
                    </div>
                    
                    <div className={styles['recipe2']}>
                        <div className={styles['recipe21']}>
                            <div className={styles['recipetitle']}>
                                <h4>Roasted Cauliflower Onions</h4>
                            </div>

                            <div className={styles['recipecontent']}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Nibh iaculis est tellus quis feugiat arcu lacus ullamcorper ullamcorper.
                                 Sit eu vitae, felis rutrum at ac, luctus.
                                 Praesent convallis fusce consectetur sagittis.
                                 Neque, nisl porta vitae aenean non aliquam dictum fermentum consectetur.
                                 Et leo, et, rhoncu</p>
                            </div>
                        </div>

                        <div className={styles['recipe22']}>
                            <h4>See more</h4>
                        </div>
                    </div>    
                </div>

                <div className={styles['register']}>
                    <div className={styles['register1']}>
                        <img src={images.homepage.register} alt="register"/>
                    </div>

                    <div className={styles['register2']}>
                        <div className={styles['register21']}>
                            <h1>Register for more information</h1>

                            <div className={styles['registertype']}>
                                <div className={styles['registertype1']}>
                                    <p>
                                        Fullname
                                    </p>
                                </div>

                                <div className={styles['registertype2']}>
                                    <p>
                                        Nickname
                                    </p>
                                </div>

                                <div className={styles['registertype3']}>
                                    <p>
                                        Email Address
                                    </p>
                                </div>

                                <div className={styles['registertype4']}>
                                    <p>
                                        Phone number
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={styles['register22']}>
                            <p className={styles['registerbutton']}>Register</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
        );
};

export default HomeP;