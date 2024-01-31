"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export function LogoutButton({ children }: LogoutButtonProps) {
  const onClick = async () => {
    await logout();
  };
  return (
    <span
      className="w-full"
      onClick={onClick}
    >
      Logout
    </span>
  );
}
