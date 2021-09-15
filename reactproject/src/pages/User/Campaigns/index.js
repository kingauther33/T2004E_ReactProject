import React from 'react';
import styles from './campaign.module.css';
import { Link } from 'react-router-dom';
import images from "../../../assets";

const Campaigns = (props) => {
	return (
		<div className={`${styles['heading-page']} ${styles['header-text']}`}>
			<section className={styles['page-heading']}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className={styles['text-content']}>
								<h2>Campaigns</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="row">
				<div className="col-sm-8 col-md-9">
					<article className={styles['entry-post']}>
						<div className="form-row align-items-center align-items-lg-start">
							<div className="col-md-7 pr-lg-5">
								<img className={styles['img']} width="485" height="300" src={images.recipes.ci}/>
							</div>
							<div className="col">
								<h3 className={styles['title']}>chiến dich 1</h3>
								<h2 className={styles['title1']}>
									Cách làm cheesecake không cần lò nướng siêu dễ
								</h2>
								<div className="sapo 1h-16 font-9x mb-3">
									Làm bánh tại nhà thật đơn giản
								</div>
								<div>
									<Link to='/' activeStyle>XEM THÊM>></Link>
								</div>
							</div>
						</div>
					</article>
				</div>
				<div className="col-sm-8 col-md-9">
					<article className={styles['entry-post']}>
						<div className="form-row align-items-center align-items-lg-start">
							<div className="col-md-7 pr-lg-5">
								<img className={styles['img']} width="485" height="300" src={images.recipes.ci}/>
							</div>
							<div className="col">
								<h3 className={styles['title']}>chiến dich 2</h3>
								<h2 className={styles['title1']}>
									Cách làm cheesecake không cần lò nướng siêu dễ
								</h2>
								<div className="sapo 1h-16 font-9x mb-3">
									Làm bánh tại nhà thật đơn giản
								</div>
								<div>
									<Link to='/' activeStyle>XEM THÊM>></Link>
								</div>
							</div>
						</div>
					</article>
				</div>
				<div className="col-sm-8 col-md-9">
					<article className={styles['entry-post']}>
						<div className="form-row align-items-center align-items-lg-start">
							<div className="col-md-7 pr-lg-5">
								<img className={styles['img']} width="485" height="300" src={images.recipes.ci}/>
							</div>
							<div className="col">
								<h3 className={styles['title']}>chiến dịch 3</h3>
								<h2 className={styles['title1']}>
									Cách làm cheesecake không cần lò nướng siêu dễ
								</h2>
								<div className="sapo 1h-16 font-9x mb-3">
									Làm bánh tại nhà thật đơn giản
								</div>
								<div>
									<Link to='/' activeStyle>XEM THÊM>></Link>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>

	);
};

export default Campaigns;
