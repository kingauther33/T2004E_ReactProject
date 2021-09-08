import React from 'react';
import styles from './contact.module.css';
import emailjs from 'emailjs-com';

const ContactUs = (props) => {

		function sendEmail(e) {
			e.preventDefault();

			emailjs.sendForm('service_c1ioigi', 'template_eq4odzt', e.target, 'user_Yw8G4cnQLWpDzcKPvRXio')
				.then((result) => {
					alert("Success")
				}, (error) => {
					console.log(error.text);
				});
			e.target.reset();
		}

	return (
		<div className={`${styles['heading-page']} ${styles['header-text']}`}>
			<section className={styles['page-heading']}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className={styles['text-content']}>
								<h2>Contact Us</h2>
							</div>
						</div>
					</div>
					<div className='col-md-8'>
						<div className='row'>
							<div className={styles['section-title']}>
								<h2>Get In Touch</h2>
								<p>
									Please fill out the form below to send us an email and we will
									get back to you as soon as possible.
								</p>
							</div>
							<form name='sentMessage' onSubmit={sendEmail}>
								<div className='row'>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='text'
												id='name'
												name='name'
												className='form-control'
												placeholder='Name'
												required
											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
									<div className='col-md-6'>
										<div className='form-group'>
											<input
												type='email'
												id='email'
												name='email'
												className='form-control'
												placeholder='Email'
												required

											/>
											<p className='help-block text-danger'></p>
										</div>
									</div>
								</div>
								<div className='form-group'>
									  <textarea name='message'
												id='message'
												className='form-control'
												rows='4'
												placeholder='Message'
												required>

									  </textarea>
									<p className='help-block text-danger'></p>
								</div>

								<button id={styles['btn-custom']} type='submit' className='btn btn-custom btn-lg'>
									Send Message
								</button>
							</form>

						</div>

					</div>
				</div>
			</section>
		</div>
	);
};

export default ContactUs;
