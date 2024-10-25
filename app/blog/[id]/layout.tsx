import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <section className="py-8 md:py-10">{children}</section>;
}
