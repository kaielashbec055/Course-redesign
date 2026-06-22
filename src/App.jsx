import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  // ⚡ FIX: Evaluate items based on course.slug to support multiple course listings simultaneously
  const handleAddToCart = (course) => {
    const alreadyInCart = cart.find((item) => item.slug === course.slug);
    if (!alreadyInCart) {
      setCart([...cart, course]);
    }
  };

  // ⚡ FIX: Filter by string slugs instead of overlapping IDs when processing a removal action
  const handleRemoveFromCart = (slug) => {
    setCart(cart.filter((item) => item.slug !== slug));
  };

  return (
    <div className="app-wrapper">
      <Navbar cartCount={cart.length} />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:type" element={<Courses />} />
          <Route 
            path="/course/:slug" 
            element={<CourseDetails onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cart} onRemove={handleRemoveFromCart} />} 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
