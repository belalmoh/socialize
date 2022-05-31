let Input = {};

Input.Email = ({label = 'Email Address', variant = 'primary', type = 'email', name, ...otherProps}) => {
	
	const fieldTypes = {
		primary: "focus:ring-primary-500 focus:border-primary-500"
	}

	const appearance = {
		primary: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
	}

	const getClassNames = () => `${appearance[variant]} ${fieldTypes[variant]}`;

	return (
		<>
			<label htmlFor={type} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<input
				id={type}
				name={name || type}
				type={type}
				required
				className={getClassNames()}
				{...otherProps}
			/>
		</>
	)
}

export {Input};