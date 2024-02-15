import NavBar from "@/components/navbar";

export default function DashboardLayout({
  modal,
  children, // will be a page or nested layout
}: {
  modal: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {modal}
      {children}
    </>
  );
}
