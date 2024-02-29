import NavLinks from "@/components/nav-links";
import { UserButtons } from "@/components/user-buttons";

export default function NavBar() {
  return (
    <div className="flex p-4">
      <div className="flex grow flex-row justify-start space-x-2">
        <NavLinks />
      </div>
      <div className="flex">
        <UserButtons />
      </div>
    </div>
  );
}
