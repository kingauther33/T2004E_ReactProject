import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import images from '../../assets';

const Footer = () => {
	return (
		<div className={styles['container']}>
			<div className={styles['wrapper']}>
				<div className={styles['title']}>
					<div className={styles['logo-title']}>
						<Link to='/'><img className={styles['logo']} src={images.footer.logo} alt="IMG" /></Link>
						<Link to='/'><p className={styles['p']}>Healthy Food</p></Link>
					</div>
				</div>
				<div className={styles['nav']}>

					<div className={styles['nav2']}>
						<Link to='/'><img className={styles['fb']} src={images.footer.fb} alt="IMG" /></Link>
						<Link to='/'><img className={styles['ins']} src={images.footer.ins} alt="IMG" /></Link>
						<Link to='/'><img className={styles['pin']} src={images.footer.pin} alt="IMG" /></Link>
					</div>
					<div className={styles['nav3']}>
						<Link className={styles['NavLink']} to='/' activeStyle>
							Home
						</Link>
						<Link className={styles['NavLink']} to='/' activeStyle>
							About
						</Link>
						<Link className={styles['NavLink']} to='/' activeStyle>
							Campaigns
						</Link>
						<Link className={styles['NavLink']} to='/' activeStyle>
							Contact
						</Link>

					</div>
					<div className='container text-center'>
						<p>
							&copy; 2020 Issaaf Kattan React Land Page Template. Design by{' '}
							<a href='http://www.templatewire.com' rel='nofollow'>
								TemplateWire
							</a>
						</p>
					</div>
				</div>

			</div>


		</div>

	);
};

export default Footer;
