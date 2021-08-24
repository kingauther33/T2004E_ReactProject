import React, { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import images from '../../assets'; // BAO GỒM TẤT CẢ CÁC ẢNH

const LoginCallBack = () => {
	const [isEmailError, setIsEmailError] = useState(false);
	const [isPasswordError, setIsPasswordError] = useState(false);
	const inputEmail = createRef();
	const inputPassword = createRef();

	const handleEmailOnFocus = () => {
		setIsEmailError(false);
	};

	const handlePasswordOnFocus = () => {
		setIsPasswordError(false);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const emailInput = document.querySelector('#email-input');
		const passwordInput = document.querySelector('#password-input');
		if (!emailInput.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
			setIsEmailError(true);
		}
		if (!passwordInput.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
			setIsPasswordError(true);
		}
	};

	return (
		<>
			{/* <div className={styles['limiter']}> */}
			<div className={styles['limiter']}>
				<div className={styles['container-login100']}>
					<div className={styles['wrap-login100']}>
						<div className={`${styles['login100-pic']}`} data-tilt>
							<img src={images.admin.login_hero} alt="IMG" />
						</div>

						<form className={styles['login100-form']} onSubmit={handleFormSubmit}>
							<span className={styles['login100-form-title']}>Member Login</span>

							<div className={`${styles['wrap-input100']} ${styles['validate-input']}`}>
								<input
									className={styles['input100']}
									id="email-input"
									type="text"
									name="email"
									placeholder="Email"
									autoComplete="off"
									ref={inputEmail}
									onFocus={handleEmailOnFocus}
								/>
								<span className={styles['focus-input100']}></span>
								<span className={styles['symbol-input100']}>
									<i className="fa fa-envelope" aria-hidden="true"></i>
								</span>
							</div>
							{isEmailError && (
								<p className="mt-0 pt-0 ms-2 mb-3 text-danger">
									Valid email is required: ex@abc.xyz
								</p>
							)}

							<div className={`${styles['wrap-input100']} ${styles['validate-input']}`}>
								<input
									className={styles['input100']}
									type="password"
									id="password-input"
									name="pass"
									placeholder="Password"
									autoComplete="off"
									onFocus={handlePasswordOnFocus}
									ref={inputPassword}
								/>
								<span className={styles['focus-input100']}></span>
								<span className={styles['symbol-input100']}>
									<i className="fa fa-lock" aria-hidden="true"></i>
								</span>
							</div>
							{isPasswordError && (
								<p className="mt-0 pt-0 ms-2 mb-0 text-danger">
									Minimum eight characters, at least one letter and one number
								</p>
							)}

							<div className={styles['container-login100-form-btn']}>
								<button className={styles['login100-form-btn']}>Login</button>
							</div>

							<div className="text-center pt-3">
								<span className={styles['txt1']}>Forgot </span>
								<Link className={styles['txt2']} to="#">
									Username / Password?
								</Link>
							</div>

							<div className="text-center pt-5 mt-5">
								<Link className={styles['txt2']} to="#">
									Create your Account
									<i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginCallBack;
