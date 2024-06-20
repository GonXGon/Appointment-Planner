import { Outlet, NavLink } from "react-router-dom";

export const Routes = {
    CONTACTS: '/contacts',
    APPOINTMENTS: '/appointments',
};

function Root() {
    return(
        <>
            <nav>
                <NavLink to={Routes.CONTACTS}>Contacts</NavLink>
                <NavLink to={Routes.APPOINTMENTS}>Appointments</NavLink>
            </nav>
            <Outlet/>
        </>
    );
}

export default Root;