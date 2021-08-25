import React from 'react';
import Footer from '../pfooter/footer';
import Icon from '../pfooter/icons';
import styles from './Footer.module.css';
import images from '../../assets';

const FooterContainer = () => {
	return (
		<>
			<div className={[styles['container']]}>
				{/* <img src={images.contactUs.avatar} alt="Test" /> */}
				<img src="/dist/img/user1-128x128.jpg" alt="Test" />
				<Footer.Wrapper>
					<Footer.Row>
						<Footer.Column>
							<Footer.Title>About Us</Footer.Title>
							<Footer.Link href="#">Story</Footer.Link>
							<Footer.Link href="#">Clients</Footer.Link>
							<Footer.Link href="#">Testimonials</Footer.Link>
						</Footer.Column>
						<Footer.Column>
							<Footer.Title>Services</Footer.Title>
							<Footer.Link href="#">Marketing</Footer.Link>
							<Footer.Link href="#">Consulting</Footer.Link>
							<Footer.Link href="#">Development</Footer.Link>
							<Footer.Link href="#">Design</Footer.Link>
						</Footer.Column>
						<Footer.Column>
							<Footer.Title>Contact Us</Footer.Title>
							<Footer.Link href="#">United States</Footer.Link>
							<Footer.Link href="#">United Kingdom</Footer.Link>
							<Footer.Link href="#">Australia</Footer.Link>
							<Footer.Link href="#">Support</Footer.Link>
						</Footer.Column>
						<Footer.Column>
							<Footer.Title>Social</Footer.Title>
							<Footer.Link href="#">
								<Icon className="fab fa-facebook-f" />
								Facebook
							</Footer.Link>
							<Footer.Link href="#">
								<Icon className="fab fa-instagram" />
								Instagram
							</Footer.Link>
							<Footer.Link href="#">
								<Icon className="fab fa-youtube" />
								Youtube
							</Footer.Link>
							<Footer.Link href="#">
								<Icon className="fab fa-twitter" />
								Twitter
							</Footer.Link>
						</Footer.Column>
					</Footer.Row>
				</Footer.Wrapper>
			</div>
		</>
	);
};

export default FooterContainer;
