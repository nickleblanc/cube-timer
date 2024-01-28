import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./card-wrapper";

export function ErrorCard() {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/login"
            backButtonLabel="Back to login"
        >
            <div className="w-full flex justify-center items-center">
                <ExclamationTriangleIcon className="text-destructive" />
            </div>
        </CardWrapper>
    )
}