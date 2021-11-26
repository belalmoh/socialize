import React from 'react';

const Page = ({title, step, currentStep, onPrevClicked, onNextClicked, children}) => {
    const isCurrentStep = step === currentStep ? 'is-active' : '';
    return (
        <div className={`process-panel-wrap ${isCurrentStep}`}>
            <div className="process-title">
                <h2 id="step-title-1" className={`step-title ${isCurrentStep}`}>{title}</h2>
            </div>
            <div className="is-active">
                <div className="form-panel">
                    {children}
                </div>
            </div>
            <div className="buttons">
                <a className="button process-button" onClick={onPrevClicked}>Back</a>
                <a className="button process-button is-next" onClick={onNextClicked}>Next</a>
            </div>
        </div>
    );
};

export default React.memo(Page);