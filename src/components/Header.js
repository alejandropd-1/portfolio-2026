


export default function Header({ badge, title, subtitle, description }) {
  return (
    <header className="header container padding-block-12">
      <div className="header__content">
        <div className="header__info">
          {badge && <span className="header__badge label-md text-uppercase color-accent-500 margin-block-end-4">{badge}</span>}
          <h1 className="header__title display-lg margin-block-end-4">
            {title || 'Alejandro Delgado'}
          </h1>
          <h2 className="header__subtitle headline-md margin-block-end-6">
            {subtitle}
          </h2>
          
          <div className="header__description body-lg margin-block-end-8">
            <p>{description}</p>
          </div>

          <div className="header__socials flex-group">
            <a href="https://www.linkedin.com/in/alejandropdelgado/" className="social-chip" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/alejandropd-1" className="social-chip" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a href="https://www.youtube.com/@alejandropd_1" className="social-chip" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
