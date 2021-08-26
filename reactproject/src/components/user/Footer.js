import React from 'react';
import styles from './Footer.module.css';
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<div className={styles['container']}>
			<div className={styles['wrapper']}>
				<div className={styles['row']}>
					<div className={styles['column']}>
						<div className={styles['title']}>AboutUs</div>
						<div>
							<Link to="#" className={styles['link']}>Story</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Clients</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Testimonials</Link>
						</div>
					</div>
					<div className={styles['column']}>
						<div className={styles['title']}>Services</div>
						<div>
							<Link to="#" className={styles['link']}>Marketing</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Consulting</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Development</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Design</Link>
						</div>
					</div>
					<div className={styles['column']}>
						<div className={styles['title']}>Contact Us</div>
						<div>
							<Link to="#" className={styles['link']}>United States</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>United Kingdom</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Australia</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}>Support</Link>
						</div>
					</div>
					<div className={styles['column']}>
						<div className={styles['title']}>Social</div>
						<div>
							<Link to="#" className={styles['link']}><i className="fab fa-facebook"></i>Facebook</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}><i className="fab fa-instagram"></i>Instagram</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}><i className="fab fa-youtube"></i>Youtube</Link>
						</div>
						<div>
							<Link to="#" className={styles['link']}><i className="fab fa-twitter"></i>Twitter</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
