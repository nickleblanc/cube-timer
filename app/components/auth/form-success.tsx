interface FormErrorProps {
    message?: string;
}

export function FormSuccess( {message}: FormErrorProps) {

    if (!message) return null;

    return (
        <div className="bg-emerald-500/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <p>{message}</p>
        </div>
    )
}