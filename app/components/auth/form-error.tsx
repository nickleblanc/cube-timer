interface FormErrorProps {
    message?: string;
}

export function FormError( {message}: FormErrorProps) {

    if (!message) return null;

    return (
        <div className="bg-destructive/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <p>{message}</p>
        </div>
    )
}