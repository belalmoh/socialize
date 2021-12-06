import { memo } from "react";
import Input from "~/components/input";

const FormField = ({label, inputFieldProps, isInvalid}) => {
    const invalidTextClass = isInvalid ? `text-red-600`:`text-gray-700`;
    return (
        <div className='mb-6'>
            <div className="pt-3 rounded bg-gray-200">
                <label className={`block ${invalidTextClass} text-sm font-bold mb-2 ml-3`} htmlFor={inputFieldProps.name}>{label}</label>
                <Input {...inputFieldProps} isInvalid={isInvalid} />
            </div>
            
            {isInvalid && <span className="mt-3 text-red-600">{label} is a required field</span>}
        </div>
    );
}

export default memo(FormField);