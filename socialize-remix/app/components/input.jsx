import { memo } from "react";
const Input = (props) => {
    return (
        <input {...props} />
    )
}

export default memo(Input);