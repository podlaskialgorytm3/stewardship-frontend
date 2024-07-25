import { NavLinkComponent } from "../../menu/components/nav-link"

export const MenuDashboard = () => {
    return(
            <ul className="mt-5 flex items-center justify-between w-[50%]">
                <NavLinkComponent path="/dashboard/groups" name="Groups" />
                <NavLinkComponent path="/dashboard/working-hours" name="Working Hours" />
                <NavLinkComponent path="/dashboard/tasks" name="Tasks" />
            </ul>
    )
}