import NavLinks from "@/app/components/nav-links";
import { UserButtons } from "@/app/components/user-buttons";

export default function NavBar() {
    return (
        <div className="flex px-3 py-4 md:px-2">
            <div className="flex grow flex-row justify-start space-x-2">
                <NavLinks />
            </div>
            <div className="flex items-center space-x-2 pr-2">
                <UserButtons />
            </div>
        </div>
    )
}