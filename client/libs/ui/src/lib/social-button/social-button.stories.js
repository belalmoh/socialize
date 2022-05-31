import SocialButton from './social-button';

export default {
	component: SocialButton,
	title: 'SocialButton',
	argTypes: {
		icon: {
			options: ['twitter', 'facebook', 'google', 'github'],
			control: { type: 'radio' }
		},
		variant: {
			options: ['primary', 'secondary'],
			control: {type: 'radio'}
		},
		size: {
			options: ['sm', 'md', 'lg'],
			control: {type: 'radio'}
		}
	}
};

const Template = (args) => <SocialButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	variant: 'primary',
	icon: 'google',
	size: 'md'
};
