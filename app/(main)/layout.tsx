import Navbar from "@/components/Navbar";
import SideBar2 from "@/components/SideBar2";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />

      <div className="flex flex-1 w-full">
        {/* Sidebar sits nicely alongside main content */}
        <SideBar2 />

        <div className="flex flex-col flex-1 w-full min-w-0">
          {/* Top padding ensures content starts below the transparent Navbar */}
          <main className="flex-1 pt-24 p-0 md:py-10 overflow-x-hidden">
            {children}
          </main>

          <footer className="bg-neutral-950 border-t border-white/5 py-6 mt-auto relative z-10">
            <div className="container mx-auto px-4">
              <p className="text-center text-neutral-500 text-sm">
                © {new Date().getFullYear()} Motion Lab. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
