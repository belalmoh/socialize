import { Input } from './input';

export default {
	component: Input.Email,
	title: 'Input',
	argTypes: {
		type: {
			options: ['email', 'text', 'password'],
			control: {type: 'radio'}
		},
		variant: {
			options: ['primary', 'secondary'],
			control: {type: 'radio'}
		}
	}
};

const Template = (args) => <Input.Email {...args} />;


export const EmailInput = Template.bind({});
EmailInput.args = {
	variant: 'primary',
	type: 'email',
	label: 'Email Address'
};
