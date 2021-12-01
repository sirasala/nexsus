import React from "react";

export default function DataFeature() {
  return (
    <div>
      <section class="features-head py-3 showcase">
        <div class="container grid">
          <div>
            <h1 class="xl">Custom Models</h1>
            <p class="lead">
              Check out the different Models of Nexsus that meets ur dream.
            </p>
          </div>
          <img
            src="https://www.segula.de/wp-content/themes/yootheme/cache/Ambient_50301-65d10cdc.jpeg"
            alt=""
          />
        </div>
      </section>

      <section
        class="features-sub-head bg-light py-3"
        style={{ backgroundColor: "white" }}
      >
        <div class="container grid" style={{ paddingTop: "25px" }}>
          <div>
            <h1 class="md">Nexsus range</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
              consectetur ea consequatur, doloribus repellendus quasi, aut
              corporis nam alias culpa. Nostrum, inventore accusantium!
            </p>
          </div>
          <img
            src="https://cdn.shopify.com/s/files/1/0074/0992/6229/products/PL20002_oh-yeah-neonschild-led-weiss-innen-kissen-p1_600x600.jpg?v=1580980768"
            alt=""
          />
        </div>
      </section>

      <section class="features-main my-2">
        <div class="container grid grid-3">
          <div class="card flex">
            <img
              src="https://i.pinimg.com/736x/4e/bb/9b/4ebb9b13543cec1e7912a8edf8ee75f0.jpg"
              alt=""
              style={{ height: "200px", width: "200px", paddingRight: "15px" }}
            />
            <p>
              <b>
                <i>Model Show </i>
              </b>
              sit amet consectetur adipisicing elit. Voluptas nemo saepe
              corrupti et dolorem voluptate at, nostrum rem voluptatem ab alias
              quia molestiae ea, libero nihil deserunt. Molestias, eum?
              Necessitatibus!
            </p>
          </div>
          <div class="card flex">
            <p>
              <b>
                <i>Model Retro </i>
              </b>
              ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              recusandae perferendis culpa, reiciendis a itaque debitis qui vel
              dignissimos ipsum!
            </p>
            <img
              src="https://t4.ftcdn.net/jpg/01/75/92/69/360_F_175926981_eV69cobFMHsmJCFAgglRugZkJgmkN3Ts.jpg"
              alt=""
              style={{ height: "150px", width: "200px", paddingLeft: "15px" }}
            />
          </div>
          <div class="card flex">
            <p>
              <b>
                <i>Model LosAngelos </i>
              </b>
              ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
            <img
              src="https://t3.ftcdn.net/jpg/02/51/60/76/360_F_251607646_1EJ5pqqCmKgNRM5Eyh1QzP3shlN8cPOU.jpg"
              alt=""
              style={{ height: "60px", width: "100px", paddingLeft: "5px" }}
            />
          </div>
          <div class="card flex">
            <i class="fas fa-power-off fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!
            </p>
          </div>
          <div class="card flex">
            <i class="fab fa-mixcloud fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
          <div class="card flex">
            <i class="fas fa-sun fa-3x"></i>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
              magnam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
