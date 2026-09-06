"use client";

import { type ReactNode } from "react";

// A template re-mounts on every navigation, so this wrapper re-triggers its
// entrance animation on each route change for a smooth page transition.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
