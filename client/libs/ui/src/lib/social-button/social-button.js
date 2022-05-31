import { FaGoogle, FaFacebookF, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function SocialButton({ icon, variant = 'primary', size = 'md', onClick }) {

	const sizes = {
		sm: '1em',
		md: '2.5em',
		lg: '5em'
	}

	const icons = {
		twitter: FaTwitter,
		facebook: FaFacebookF,
		google: FaGoogle,
		github: FaGithub,
		email: MdEmail
	}

	const appearance = {
		primary: 'flex justify-center items-center px-2 py-2 border border-primary-300 rounded-md shadow-sm bg-white text-sm font-medium text-primary-600 hover:bg-gray-50'
	}

	const ButtonIcon = icons[icon];

	const getClassNames = () => `${appearance[variant]}`;

	return (
		<button
			type="button"
			className={getClassNames()}
			onClick={onClick}
		>
			<ButtonIcon size={sizes[size]} />
		</button>
	)
}

export default SocialButton;