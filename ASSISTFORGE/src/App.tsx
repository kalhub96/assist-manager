import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/layout/layout";
import Library from "./assets/pages/library";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Library />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
