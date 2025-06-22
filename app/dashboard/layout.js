import Navbar from "./components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="layout-background-color">
        <div className="flex justify-start">
          <Navbar />
        <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
