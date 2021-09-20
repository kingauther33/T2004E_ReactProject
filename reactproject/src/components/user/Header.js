import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import images from '../../assets';


const Header = () => {
	return (
		<div className={styles['header']}>
            <div className={styles['navbar']}>
                <div className={styles['text']}>
                    <Link to='/'><img className={styles['logo']} src={images.footer.logo} alt="IMG" /></Link>
                    <p className={styles['p']}>Healthy Food</p>
                    <Link className={styles['NavLink']} to='/' activeStyle>
                        Home
                    </Link>
                    <Link className={styles['NavLink']} to='/about-us' activeStyle>
                        About
                    </Link>
                    <Link className={styles['NavLink']} to='/' activeStyle>
                        Campaigns
                    </Link>
                    <Link className={styles['NavLink']} to='/recipes' activeStyle>
                        Recipes
                    </Link>
                    <Link className={styles['NavLink']} to='/contact-us' activeStyle>
                        Contact
                    </Link>

                </div>
                <div className={styles['login']}>
                    <Link to='/'><img className={styles['logo2']} src={images.header.login} alt="IMG" /></Link>
                    <Link to='/'><p className={styles['lg']}>Login</p></Link>
                    <p>/</p>
                    <Link to='/'><p className={styles['lg']}>Register</p></Link>

                </div>

            </div>

        </div>
	);
};

export default Header;
