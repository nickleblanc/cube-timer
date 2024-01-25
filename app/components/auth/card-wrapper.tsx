import {
    Card,
    CardContent,
    CardHeader,
    CardFooter
} from '@/app/components/ui/card';
import { BackButton } from '@/app/components/auth/back-button';

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial: boolean;
}

export function CardWrapper({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}: CardWrapperProps) {
    return (
        <Card className='w-[400px] shadow-md'>
            <CardHeader>
                <h1 className='text-2xl font-bold'>{headerLabel}</h1>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <BackButton href={backButtonHref} label={backButtonLabel} />
            </CardFooter>
        </Card>
    )
}