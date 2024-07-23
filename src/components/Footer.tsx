import {
	faInstagramSquare,
	faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import openInNewTab from '../helpers/newTab';

function Footer() {
	return (
		<div className='footer-container'>
			<FontAwesomeIcon
				icon={faLaptopCode}
				className='fa-icon'
				onClick={() => openInNewTab('https://leetcode.com/u/kevin_barone/')}
			/>
			<FontAwesomeIcon
				icon={faInstagramSquare}
				className='fa-icon'
				onClick={() => openInNewTab('https://www.instagram.com/barone_1810/')}
			/>
			<FontAwesomeIcon
				icon={faGithubSquare}
				className='fa-icon'
				onClick={() => openInNewTab('https://github.com/keba2993')}
			/>
		</div>
	);
}

export default Footer;
