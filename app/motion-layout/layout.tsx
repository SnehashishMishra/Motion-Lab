import React from "react";

export default function MotionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      {children}
    </div>
  );
}
