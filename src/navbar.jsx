import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div class="navbar">
        <div class="container flex">
          <h1 class="logo">Nexsus</h1>
          <nav>
            <ul>
              <li>
                <Link class="clr" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="clr" to="/Features">
                  Models
                </Link>
              </li>
              <li>
                <Link class="clr" to="/Docs">
                  Price
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
