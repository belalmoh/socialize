import './stepper.scss';
import React, { useState, useEffect, useMemo } from "react";
const Stepper = ({steps, currentStep}) => {

    const getCurrentStepPercentage = (currentStep) => (100 / (steps.length - 1)) * currentStep;

    const currentStepPercentage = useMemo(() => getCurrentStepPercentage(currentStep), [currentStep]);

    const Dots = React.memo(({steps}) => {
        return (
            <div className={'stepper-container'}>
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
                            <div className={`dot ${currentStep >= index ? `is-active`:``}`} style={leftStyle} key={`step#-${index}`}>
                                {step.progressComponent}
                            </div>
                        )
                    })
                }
            </div>
        )
    });

    return (
        <>
            <div className="process-bar-wrap">
                <div className="process-bar">
                    <div className="progress-wrap">
                        <div className="track"/>
                        <div className="bar" style={{width: `${currentStepPercentage}%`}}/>
                        <Dots steps={steps}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(Stepper);