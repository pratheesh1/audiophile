import React from "react";
import Navbar from "../components/navbar/Navbar";

export default function Pages() {
  // TODO: remove after db done
  const user = {
    firstName: "Paul",
    imageUrl: undefined,
    cartItems: undefined,
  };

  return (
    <>
      {/* main page */}
      <section className="bg-gray-100 w-full overflow-hidden min-h-screen relative">
        {/* nav for categories */}
        <Navbar user={user} />
      </section>
    </>
  );
}
