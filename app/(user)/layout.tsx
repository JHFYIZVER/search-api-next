import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  types: string[];
}

export default function AuthLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
