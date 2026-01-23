import React, {useEffect, useState} from 'react';
import LoadingScreen from './LoadingScreen';
import './Home.css';

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const shownThisSession = sessionStorage.getItem('loadingShown');
      if (!shownThisSession) {
        setLoading(true);
        sessionStorage.setItem('loadingShown', 'true');
      }
    }, []);

  if (loading) {
    return <LoadingScreen onLoadComplete={() => setLoading(false)} />;
  }

  return (
    <body>
      <header class="site-header">
        <nav class="nav-bar">
        <div class="nav-logo">
          <a href="index.html"><img src="images/OSEC_plain.png" alt=""></img>
          </a>
        </div>
        <div class="nav-links">
          <a href="index.html" class="nav-link">Home</a>
          <a href="About.html" class="nav-link">About Us</a>
          <a href="Resources.html" class="nav-link">Resources</a>
        </div>

        <a href="https://discord.gg/McZz3KtDp4" target="_blank" class="nav-discord-button">Join Discord</a>        
      </nav>
        </header>

        <main>
      <section id="Content">
        <h1>We're developing a better website. Back soon!</h1>
        <img src="images/OSECLogoFullNoBG1.png" alt="" class="osec-logo"></img>
          <p>(Current improvements in progress)</p>
    </section>

    <section id="Story">
      <h1>Our Story</h1>
      <p>Osprey Security (OSEC) started as Association for Information Technology Professionals (AITP). Since then we have grown dramatically! We are a group of highly motivated, aspiring technology professionals, looking to improve everyday. We compete in cybersecurity competitions including CCDC, CPTC, and NCAE. In Spring 2023 our CCDC team made school history by reaching nationals! We are committed to helping UNF students from any background or major gain experience in IT. Go Ospreys!</p>
    </section>

    </main>

    <footer>
      <h2>Connect With Us</h2>
      <p>Check out our socials to see what else we're up to!</p>
      <div className="social-icons-footer">
        <a href="https://www.instagram.com/unfcybersec/" target="_blank" title=""><img src="images/instagram.png" alt=""></img>
        </a>
        <a href="https://www.linkedin.com/company/unfcyber/" target="_blank"><img src="images/InBug-White.png" alt=""></img>
        </a>
        <a href="https://discord.gg/McZz3KtDp4" target="_blank" title=""><img src="images/Discord.png" alt=""></img>
        </a>
        <a href="https://x.com/clubosprey" target="_blank" title=""><img src="images/X.png" alt=""></img>
        </a>
      </div>
      <p>Sponsored by UNF Student Government</p>
      </footer>

    </body>
  );

}

export default Home;