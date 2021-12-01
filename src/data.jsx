import React from "react";
import { Link } from "react-router-dom";

export default function Section() {
  return (
    <div>
      <section class="showcase">
        <div class="container grid">
          <div class="showcase-text">
            <h1>Easy Lighting</h1>
            <p>
              Install custom lights without any hassel and hardwork. Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Obcaecati reiciendis
              at consequuntur rerum.
            </p>

            <Link to="/Features" class="btn btn-outline">
              View models
            </Link>
          </div>

          <div class="showcase-form card">
            <h2>Request assistance</h2>
            <form>
              <div class="form-control">
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div class="form-control">
                <input type="text" name="Phone" placeholder="Phone" required />
              </div>
              <div class="form-control">
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <input type="submit" value="Request" class="btn btn-primary" />
            </form>
          </div>
        </div>
      </section>

      <section class="stats">
        <div class="container">
          <h3 class="stats-heading text-center my-1">
            Welcome to the best Lighting company, easy installation, low budget
            and maintanece. Lastly aslo super smart.
          </h3>

          <div class="grid grid-3 text-center my-4">
            <div>
              <i class="fas fa-lightbulb fa-5x"></i>
              <h3>>9,744</h3>
              <p class="text-secondary">Innovative Designs</p>
            </div>
            <div>
              <i class="fas fa-bolt fa-5x"></i>
              <h3>>20,000</h3>
              <p class="text-secondary">KW saved</p>
            </div>
            <div>
              <i class="fas fa-house-damage fa-5x"></i>
              <h3>43,265</h3>
              <p class="text-secondary">Homes Lighted</p>
            </div>
          </div>
        </div>
      </section>

      <section class="languages">
        <h2 class="md text-center my-2" style={{ color: "white" }}>
          Available categories
        </h2>
        <div class="container flex">
          <div class="card cd1">
            <h4>Incandescent</h4>
          </div>
          <div class="card cd2">
            <h4> fluorescent</h4>
          </div>
          <div class="card cd3">
            <h4> Halogen </h4>
          </div>
          <div class="card cd4">
            <h4>Neon lamps</h4>
          </div>
          <div class="card cd5">
            <h4>High intensity</h4>
          </div>
          <div class="card cd6">
            <h4>Smart Bulbs</h4>
          </div>
        </div>
      </section>

      <section
        class="cloud bg-primary my-2 py-2"
        style={{ background: "white", color: "black" }}
      >
        <div class="container grid">
          <div class="text-center">
            <h2 class="lg">Consequuntur rerum</h2>
            <p class="lead my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur, ipsum deleniti. Esse velit quia impedit laudantium
              facere ea vel accusantium quis. Dignissimos vel assumenda nostrum
              repellat corporis non, repellendus placeat.
            </p>
            <Link class="clr" to="/Features" class="btn btn-dark">
              Read More
            </Link>
          </div>
          <img
            src="https://www.rtcelectronics.ca/wp-content/uploads/2018/03/disco-lighs.jpg"
            alt=""
            style={{ transform: "scale(0.88)" }}
          />
        </div>
      </section>
      <section class="cli">
        <div class="container grid">
          <img
            src="https://neonpopsicle.com/img/hero-1.jpg"
            alt=""
            style={{ transform: "scale(0.8)" }}
          />
          <div class="card">
            <h3>
              dolor sit amet consectetur adipisicing elit. Consequatur, ipsum
              deleniti. Esse velit quia impedit laudantium
            </h3>
          </div>
          <div class="card">
            <h3>
              Consequatur, ipsum deleniti. Esse velit quia impedit laudantium
              dolor sit amet consectetur adipisicing elit.
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
