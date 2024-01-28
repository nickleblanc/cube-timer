"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";

interface BackButtonProps {
    href: string;
    label: string;
}

export function BackButton({ href, label }: BackButtonProps) {
    return (
        <Button
        variant="link"
        className="font-normal w-full"
        size="sm"
        asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    )
}