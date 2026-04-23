import React from "react";

export default function AnimationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">{children}</div>
  );
}
