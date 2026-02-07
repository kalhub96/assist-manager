export default function Sidebar() {
    return (
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
            <nav>
                <ul>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400">Dashbord</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400">Assets</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400">Version</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400">Collection</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400">Security</a></li>
                    <li className="mb-2"><a href="#" className="hover:text-gray-400">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
}