import "../index.css";

export function About() {
  return (
    <div>
      <div class="navbar">
        <div class="navbar-left">
          <a href="http://localhost:5500/index.html">Spark! BookPals!</a>
        </div>
        <div class="navbar-right">
          <a href="http://localhost:5500/index.html">Home</a>
          <a href="http://localhost:5500/about.html">About</a>
        </div>
      </div>
      <div class="content">
        <h>Welcome to Spark! BookPals!</h>
        <p>Hello! My name is Ray Chu I was born in Boston, Massachusetts and have lived here all my life so far so I know the area really well and can recommend some underrated or undiscovered spots. Just name an experience!</p>
        <p>Some of my current activities I do in my free time is reading, programming :/, excercising, hiking, and cooking. But I am always trying out new things so I am not afraid to get out my comfort zone.</p>
        <h1>About the author</h1>

        <div class="author-img">

        <img src="./cat.jpg" alt="Author Image" />
            <p>I also like watching anime, twitch, and movies/tv shows. The picture on the left is Mash Burnedead from my most recently favorited anime Muscles and Magic.</p>
        </div>
      </div>

      <div class="author-info"></div>

      <div class="footer">
        <p>&copy; 2023 Spark! BookPals. All Rights Reserved.</p>
      </div>
    </div>

  );
}
