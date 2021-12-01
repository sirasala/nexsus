import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="footer bg-dark py-5">
        <div class="container grid grid-3">
          <div>
            <h1 class="logo">Nexsus</h1>
            <p class="clr">Copyright &copy; 2020</p>
          </div>
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
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
          <div class="social">
            <a href="#">
              <i class="fab fa-facebook fa-2x clr"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram fa-2x clr"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter fa-2x clr"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
