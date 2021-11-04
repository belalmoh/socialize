import { useState, useEffect } from "react";
const Wizard = ({steps}) => {

    const [currentStep, setCurrentStep] = useState(0);

    const renderStepper = () => {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                {
                    steps.map((step, index) => {
                        let leftStyle = {};
                        // this to mimic the same behavior of the left in the original library
                        let stepPercentage = (100 / (steps.length - 1)) * index;
                        if (steps.length - index == 1) {
                            leftStyle = {right: `-19px`};
                        } else {
                            leftStyle = {left: `-webkit-calc(${stepPercentage}% - 19px)`};
                        }
                        return (
                            <div className="dot" style={leftStyle}>
                                {step.progressComponent}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className="process-bar-wrap">
                <div className="process-bar">
                    <div className="progress-wrap">
                        {/* TODO(Belal): Handle track progress percentage using the width style and the currentStep */}
                        <div className="track" />
                        <div className="bar" />
                        {renderStepper()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Wizard;