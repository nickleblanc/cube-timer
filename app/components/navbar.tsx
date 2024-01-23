import NavLinks from "@/app/components/nav-links";

export default function NavBar() {
    return (
        <div className="flex flex-col px-3 py-4 md:px-2">
            <div className="flex grow flex-row justify-start space-x-2">
                <NavLinks />
            </div>
        </div>
    )
}