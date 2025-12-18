import './resources.css';

function App() {
  return (
    <main>
      <section id="Content">
        <h1>Develop Your Skills With These Resources</h1>
        <img src="/images/OSECLogoFullNoBG1.png" alt="" className="osec-logo" />
        <h2>Learning Platforms</h2>
        <section id="resources-list">
          <div className="resource-item">
            <a href="https://tryhackme.com/" target="_blank" rel="noreferrer" className="resource-button">TryHackMe</a>
            <span className="resource-description">Hands-on cybersecurity training</span>
          </div>
          <div className="resource-item">
            <a href="https://www.hackthebox.com/" target="_blank" rel="noreferrer" className="resource-button">Hack The Box</a>
            <span className="resource-description">Penetration testing</span>
          </div>
          <div className="resource-item">
            <a href="https://overthewire.org/wargames/bandit/" target="_blank" rel="noreferrer" className="resource-button">Over the wire</a>
            <span className="resource-description">Gain experience with Linux</span>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;