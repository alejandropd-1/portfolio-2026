export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__social">
          <a href="https://www.linkedin.com/in/alejandropdelgado/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/alejandropd-1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.youtube.com/@alejandropd_1" target="_blank" rel="noopener noreferrer" aria-label="YouTube Channel">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://mastodon.social/@alejandropd" target="_blank" rel="noopener noreferrer" aria-label="Mastodon Profile">
            <i className="fa-brands fa-mastodon"></i>
          </a>
          <a href="https://bsky.app/profile/aledesign.dev" target="_blank" rel="noopener noreferrer" aria-label="Bluesky Profile">
            <i className="fa-brands fa-bluesky"></i>
          </a>
        </div>

        <p className="site-footer__copy">
          &copy; 2026 Alejandro Delgado
        </p>
      </div>
    </footer>
  );
}
