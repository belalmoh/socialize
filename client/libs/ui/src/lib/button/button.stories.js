import Button from './button';

export default {
	component: Button,
	title: 'Button',
	argTypes: {
		variant: {
			options: ['primary', 'secondary'],
			control: {type: 'radio'}
		}
	}
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	label: 'Sign in'
};
