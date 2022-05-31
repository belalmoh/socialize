import styles from './button.module.scss';

export function Button({ label, variant = 'primary' }) {

	const fieldTypes = {
		primary: "text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
	}

	const appearance = {
		primary: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
	}

	const getClassNames = () => `${appearance[variant]} ${fieldTypes[variant]}`;

	return (
		<button
			className={getClassNames()}>
			{label}
		</button>
	);
}

export default Button;
