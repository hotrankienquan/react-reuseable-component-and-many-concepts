import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import 'react-quill-new/dist/quill.snow.css';

const RootLayout = () => (
    <div className="w-full">
        <div className="p-2 flex gap-2">
            <Link to="/" className="[&.active]:font-bold">Home</Link>{' '}
            <Link to='/about' className="[&.active]:font-bold">
                About
            </Link>

        </div>
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
    </div>
)

export const Route = createRootRoute({component: RootLayout})


