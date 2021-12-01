import React from "react";

export default function DataDocs() {
  return (
    <div class="docss">
      <section class="docs-main my-4">
        <div class="container grid">
          <div class="card bg-light p-3">
            <h3 class="my-2">Price guide</h3>
            <nav>
              <ul>
                <li>
                  <a class="text-primary" href="#">
                    Model wise
                  </a>
                </li>
                <li>
                  <a href="#">Mix price</a>
                </li>
                <li>
                  <a href="#">Installation</a>
                </li>
              </ul>
            </nav>

            <h3 class="my-2">Customer contact</h3>
            <nav>
              <ul>
                <li>
                  <a href="#">sales</a>
                </li>
                <li>
                  <a href="#">After Sales</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="card">
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio illo facere perferendis laborum? Similique recusandae
              incidunt eos dolorum aliquam ipsam unde perspiciatis laudantium
              totam quam laborum velit, at maxime minus?
            </p>

            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              totam magni eius vitae velit id, atque veritatis! At, vero porro.
            </p>

            <img
              src="https://image.made-in-china.com/202f0j00nMzihFVWlubj/Custom-Free-Design-Achieve-Any-Logo-Pattern-Letter-Fonts-LED-Letters-Neon-Signs.jpg"
              alt=""
              style={{ height: "200px", width: "240px", paddingRight: "5px" }}
            />
            <img
              src="https://images.creativemarket.com/0.1.0/ps/3828522/1160/772/m1/fpnw/wm0/neon-tubes-cursive-preview-cm-1-.jpg?1515591609&s=a104ef9f88813d6135ea35ef3b9a25dd"
              alt=""
              style={{ height: "200px", width: "240px", paddingRight: "5px" }}
            />

            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              totam magni eius vitae velit id, atque veritatis! At, vero porro.
            </p>

            <a href="#" class="btn btn-primary">
              to pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
