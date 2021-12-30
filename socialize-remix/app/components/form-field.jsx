import { memo } from "react";
import Input from "~/components/input";
import { formInputFieldClass } from '~/utils/classNames'

const FormField = ({label, inputFieldProps, isInvalid}) => {
    const invalidLabelClass = isInvalid ? `text-red-600`:`text-gray-700`;
    const invalidInputClass = isInvalid ? `focus:border-red-600`:`focus:border-purple-600`;

    return (
        <div className='mb-6'>
            <div className="pt-3 rounded bg-gray-200">
                <label className={`block ${invalidLabelClass} text-sm font-bold mb-2 ml-3`} htmlFor={inputFieldProps.name}>{label}</label>
                <Input 
                    {...inputFieldProps} 
                    isInvalid={isInvalid} 
                    className={`${invalidInputClass} ${formInputFieldClass}`}/>
            </div>
            
            {isInvalid && <span className="mt-3 text-red-600">{label} is a required field</span>}
        </div>
    );
}

export default memo(FormField);