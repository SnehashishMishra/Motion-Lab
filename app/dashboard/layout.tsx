import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen bg-neutral-900 overflow-x-hidden">
      {children}
    </div>
  );
}
