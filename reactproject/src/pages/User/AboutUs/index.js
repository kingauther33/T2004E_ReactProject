import React from 'react';
import { Link } from 'react-router-dom';
import styles from './about.module.css';
import images from '../../../assets';

const AboutUs = () => {
	return (
		<>
			{/* <div className="heading-page header-text">  CSS Bthg khi import CSS vào index.html*/}
			{/* CSS khi dùng CSS MODULE */}
			<div className={`${styles['heading-page']} ${styles['header-text']}`}>
				<section className={styles['page-heading']}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								{/* <img src={images.aboutUs.heading_bg} alt="Test" /> */}
								<div className={styles['text-content']}>
									<h4>about us</h4>
									<h2>more about us!</h2>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<section className={styles['about-us']}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<p>
								Please tell your friends about TemplateMo website. Thank you. You can
								browse through different categories of templates such as Pellentesque quis
								luctus libero. Maecenas pretium molestie erat, ac tincidunt leo gravida
								ac. Cras ullamcorper eu ipsum eu sollicitudin. Fusce vitae commodo turpis.
								Integer ullamcorper purus nec justo mollis fermentum. Nunc imperdiet erat
								nec lacinia laoreet.Maecenas faucibus ullamcorper felis vitae finibus.
								Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque
								tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue,
								vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat
								viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi
								consectetur nibh, in vehicula eros orci vel neque.
							</p>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-6">
							<h4>Two-One Donec porttitor augue</h4>
							<p>
								Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum
								urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc
								dapibus posuere.
							</p>
						</div>
						<div className="col-lg-6">
							<h4>Two-Two Donec porttitor augue</h4>
							<p>
								Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat.
								Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel
								tellus semper interdum et id sapien.
							</p>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-4 col-md-6">
							<h4>1-03 Donec porttitor augue</h4>
							<p>
								Quisque bibendum cursus viverra. Mauris at ex ipsum. Aenean condimentum
								urna nisl, eget interdum ante euismod vel. Aliquam at metus sit amet nunc
								dapibus posuere.
							</p>
						</div>
						<div className="col-lg-4 col-md-6">
							<h4>2-03 Donec porttitor augue</h4>
							<p>
								Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat.
								Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel
								tellus semper interdum et id sapien.
							</p>
						</div>
						<div className="col-lg-4">
							<h4>3-03 Donec porttitor augue</h4>
							<p>
								Maecenas et metus nisl. Morbi ac interdum metus. Aliquam erat volutpat.
								Donec posuere tortor vel volutpat consequat. Mauris sagittis magna vel
								tellus semper interdum et id sapien.
							</p>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-3 col-md-6">
							<h4>01 Four Columns</h4>
							<p>
								Mauris at ex ipsum. Aenean condimentum urna nisl, eget interdum ante
								euismod vel. Aliquam at metus sit amet nunc dapibus posuere.
							</p>
						</div>
						<div className="col-lg-3 col-md-6">
							<h4>02 Four Columns</h4>
							<p>
								Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris
								sagittis magna vel tellus semper interdum et id sapien.
							</p>
						</div>
						<div className="col-lg-3 col-md-6">
							<h4>03 Four Columns</h4>
							<p>
								Morbi ac interdum metus. Donec posuere tortor vel volutpat consequat.
								Mauris sagittis magna vel tellus semper interdum et id sapien.
							</p>
						</div>
						<div className="col-lg-3 col-md-6">
							<h4>04 Four Columns</h4>
							<p>
								Aliquam erat volutpat. Donec posuere tortor vel volutpat consequat. Mauris
								sagittis magna vel tellus semper interdum et id sapien.
							</p>
						</div>
					</div>

					<div className="row">
						<div className="col-lg-12">
							<ul className="social-icons">
								<li>
									<Link to="#">
										<i className="fa fa-facebook"></i>
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fa fa-twitter"></i>
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fa fa-behance"></i>
									</Link>
								</li>
								<li>
									<Link to="#">
										<i className="fa fa-linkedin"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutUs;
