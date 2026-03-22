import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <aside className="w-64 border-r p-4">
            <nav className="space-y-3">
                <Link to="" className="block text-gray-700 hover:text-gray-900">
                    Library
                </Link>
            </nav>
        </aside>
    );
}
