import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  types: string[];
}

export default function AnimeLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
