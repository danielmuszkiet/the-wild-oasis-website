import SideNavigation from "../_components/SideNavigation";

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-8 md:h-full md:grid-cols-[16rem_1fr]">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
