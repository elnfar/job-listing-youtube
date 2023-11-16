import React from "react";

export default function ContactBar() {
  return (
    <nav className="bg-teal-600">
      <div className="flex justify-between items-center p-6 container">
        <ul className="flex gap-4 text-[1.2rem] text-md">
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
        <ul className="flex gap-4 text-[1.2rem] text-md">
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}
