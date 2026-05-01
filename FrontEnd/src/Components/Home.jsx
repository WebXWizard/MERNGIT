import React from "react";

const Home = () => {
  return (
    <div className="container-fluid bg-light py-4">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-3">
          <h1 className="text-primary fw-bold" style={{ fontFamily: "Verdana" }}>
            SEE THE WORLD'S TRENDING AND FAMOUS ANIME: JUJUTSU KAISEN (JJK)
          </h1>
          <h4 className="text-info">Sub | Dub</h4>
          <p className="text-dark mt-3">
            Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami.
            Published in Weekly Shonen Jump. An anime adaptation came shortly after, with animation
            handled by Studio MAPPA.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://www.pngall.com/wp-content/uploads/15/Jujutsu-Kaisen-PNG-Image.png"
            className="img-fluid"
            alt="JJK"
          />
        </div>
      </div>

      {/* Character Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 text-center">
              <h1 className="text-danger">Main Characters</h1>
              <img
                src="https://www.pngall.com/wp-content/uploads/15/Jujutsu-Kaisen-PNG-Images.png"
                className="img-fluid mt-3"
                alt="Main Characters"
              />
            </div>
            <div className="col-md-6">
              <ul className="list-unstyled text-secondary fw-bold">
                <li>→ Yuji Itadori || Ryomen Sukuna</li>
                <li>→ Maki Zen'in || Toge Inumaki</li>
                <li>→ Satoru Gojo || Kinji Hakari</li>
                <li>→ Megumi Fushiguro || Toji Fushiguro</li>
                <li>→ Nobara Kugisaki || Panda</li>
                <li>→ Yuta Okkotsu || Kento Nanami</li>
                <li>→ Suguru Geto || Mahito</li>
              </ul>
              <h2 className="text-primary mt-4 text-center fw-bold">
                Shibuya Incident Characters
              </h2>
              <ul className="list-unstyled text-white fw-bold">
                <li>→ Gojo Satoru</li>
                <li>→ Yuji Itadori</li>
                <li>→ Sukuna</li>
                <li>→ Megumi Fushiguro...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <h1 className="text-danger text-center">ABOUT US</h1>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id optio nostrum
                nobis quo voluptas dignissimos impedit repellat incidunt unde fugiat. Voluptatum eum
                sunt deserunt provident quam pariatur culpa est!
              </p>
              <p>Gojo Satoru || Yuji Itadori || Sukuna || Megumi Fushiguro..</p>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.youtube.com/embed/Ig89Ot0UfvE?si=Mz1Bfq74T3wLGixZ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="https://www.pngall.com/wp-content/uploads/15/Jujutsu-Kaisen-PNG-Photos.png"
                className="img-fluid"
                alt="About"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GOJO Section */}
      <section className="py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="text-info fw-bold">GOJO SATORU: GOAT OF JJK</h3>
            <p>
              Gojō Satoru is one of the main protagonists of the Jujutsu Kaisen series.
              <br />
              He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world.
              <br />
              Satoru is the pride of the Gojo Clan, the first person to inherit both the Limitless and the
              Six Eyes in four hundred years.
            </p>
            <img
              src="https://www.pngall.com/wp-content/uploads/14/Gojo-PNG.png"
              className="img-fluid w-50"
              alt="Gojo Satoru"
            />
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://www.pngall.com/wp-content/uploads/14/Gojo-PNG-File.png"
              className="img-fluid"
              alt="Gojo"
            />
            <h2 className="text-danger fw-bold mt-3">THE GOAT</h2>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light text-center py-4">
        <p style={{ fontWeight: "bold", fontSize: 20 }}>
          © 2024 Copyright:{" "}
          <a href="https://animeworld.com/" style={{ color: "rgb(26, 24, 24)" }}>
            AnimeWorld.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
