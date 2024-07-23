import portait from '../assets/portrait-nasdaq.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import openInNewTab from '../helpers/newTab';

function Info() {
	const sendEmail = () => {
		const mailTo =
			'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRCKvklPhlTPKQSRRxmQpsBhsMPcQNWFCtQsvHGGbsXWJSCsVKBvLBxgFxDRgSxXJcldWR';
		window.open(mailTo, '_blank');
	};

	return (
		<div className='container'>
			<img className='info-img' src={portait} />
			<h3 className='info-name'>Kevin Barone</h3>
			<h5 className='info-title'>Full-stack Developer</h5>
			<a
				href='https://keba2993.github.io/Personal-Site/'
				className='info-website'
			>
				Digital Portfolio
			</a>
			<div className='button-container'>
				<button id='email-btn' role='link' onClick={() => sendEmail()}>
					<FontAwesomeIcon icon={faEnvelope} className='btn-icon' />
					Email
				</button>

				<button
					id='linkedIn-btn'
					role='link'
					onClick={() => openInNewTab('https://www.linkedin.com/in/kbarone18/')}
				>
					<FontAwesomeIcon icon={faLinkedinIn} className='btn-icon' />
					LinkedIn
				</button>
			</div>
		</div>
	);
}

export default Info;
