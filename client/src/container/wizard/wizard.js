import 'css/app.css';
import 'css/core.css';

import React, {useState, useCallback} from 'react';

import { Smile, User, Image } from 'react-feather';

import Stepper from '../../components/stepper/stepper';
import Page from '../../components/page/page';
import Field from '../../components/field/field';


const Wizard = () => {

    const steps = [
        {progressComponent: <Smile />},
        {progressComponent: <User />},
        {progressComponent: <Image />}
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = useCallback(() => {
        if(currentStep+1 <= steps.length-1)
            setCurrentStep(currentStep+1);
    }, [currentStep]);

    const prevStep = useCallback(() => {
        if(currentStep-1 >= 0)
            setCurrentStep(currentStep-1);
    }, [currentStep]);

    return (
        <div className="signup-wrapper">
            <Stepper steps={steps} currentStep={currentStep} />

            <div className="outer-panel">
                <div className="outer-panel-inner">
                    <Page 
                        title={`Account information`}
                        step={0}
                        currentStep={currentStep}
                        onNextClicked={nextStep}
                        onPrevClicked={prevStep}
                    > 
                        <Field {...{label: 'First Name', type: 'text', placeholder: 'Enter your first name'}}/>
                        <Field {...{label: 'Last Name', type: 'text', placeholder: 'Enter your last name'}}/>
                        <Field {...{label: 'Email Address', type: 'email', placeholder: 'Enter your email address'}}/>
                    </Page>
                    
                    <Page 
                        title={`Secure your account`}
                        step={1}
                        currentStep={currentStep}
                        onNextClicked={nextStep}
                        onPrevClicked={prevStep}
                    > 
                        <Field {...{label: 'Password', type: 'password', placeholder: 'Choose a password'}}/>
                        <Field {...{label: 'Repeat Password', type: 'password', placeholder: 'Repeat your password'}}/>
                        <Field {...{label: 'Phone Number', type: 'text', placeholder: 'Enter your phone number'}}/>
                    </Page>


                    <Page
                        step={2} 
                        currentStep={currentStep} 
                        currentStep={currentStep}
                        onNextClicked={nextStep}
                        onPrevClicked={prevStep}
                    >
                        <img className="success-image" src="assets/img/illustrations/signup/mailbox.svg" alt="" />
                        <div className="success-text">
                            <h3>Congratz, you successfully created your account.</h3>
                            <p> We just sent you a confirmation email. Please confirm your account within 24 hours.</p>
                            <a id="signup-finish" className="button is-fullwidth">Let Me In</a>
                        </div>
                    </Page>
                </div>
            </div>

        </div>
    )
}

export default Wizard;