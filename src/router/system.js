import { Routes, Route} from "react-router-dom";

const System = () => {
    return (
        <div className="System__container">
            <Routes>
                <Route path="/user" element={<div><h1>User</h1></div>} />
                <Route path="product" element={<div><h1>Product</h1></div>} />
            </Routes>
        </div>
    )
}

export default System;