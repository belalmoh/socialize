const ErrorAlert = ({label, errorText}) => {
    return (
        <div className="p-2 mt-6">
            <span className="inline-flex bg-red-600 text-white rounded-full h-6 px-3">{label}</span>
            <span className="inline-flex px-2 text-red-600">{errorText ?? "An unexpected error occured"}</span>
        </div>
    )
}

export {ErrorAlert};