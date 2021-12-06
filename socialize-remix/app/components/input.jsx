import { memo } from "react";
const Input = (props) => {
    const {isInvalid, ...restProps} = props;
    const invalidClass = isInvalid ? `border-red-600`:`focus:border-purple-600`;

    return (
        <input className={`${invalidClass} bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300  transition duration-500 px-3 pb-3`} {...restProps} />
    )
}

export default memo(Input);