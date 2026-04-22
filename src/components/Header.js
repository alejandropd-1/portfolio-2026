import Image from 'next/image';
import { cookies } from 'next/headers';
import DarkToggle from '@/components/DarkToggle';

export default async function Header() {
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('color-theme');
  const theme = themeCookie?.value || 'light';

  return (
    <header className="header">
      <div className="text-center margin-block-7" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        WIP 😅 <DarkToggle initialTheme={theme} />
      </div>

      <div className="even-columns banner banner-title">
        <div className="banner-author">
          <h1 className="heading-1">Alejandro Delgado</h1>
          <h2>Web Designer</h2>
        </div>
        <div className="banner-image">
          <Image
            src="/images/aledesign-avatar.webp"
            alt="Alejandro Delgado - UX/UI Web Designer"
            width={512}
            height={512}
            priority={true}
          />
        </div>
      </div>

      <div className="banner-social">
        <a
          href="https://www.linkedin.com/in/alejandropdelgado/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <i className="fa-brands fa-linkedin-in fa-2x"></i>
        </a>
        <a
          href="https://github.com/alejandropd-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <i className="fa-brands fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.youtube.com/@alejandropd_1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube Channel"
        >
          <i className="fa-brands fa-youtube fa-2x"></i>
        </a>
        <a
          rel="me"
          href="https://mastodon.social/@alejandropd"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mastodon Profile"
        >
          <i className="fa-brands fa-mastodon fa-2x"></i>
        </a>
        <a
          href="https://bsky.app/profile/aledesign.dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bluesky Profile"
        >
          <i className="fa-brands fa-bluesky fa-2x"></i>
        </a>
      </div>

      <div className="banner-special-contact">
        <span>Tel: +541160513261</span>
        <span>Mail: apdelgado@gmail.com</span>
      </div>

      <div className="banner-text-description">
        <span className="margin-block-4">Hi everyone!</span>
        <p>
          UX/UI designer with over 14 years in projects for the e-commerce,
          pharmaceutical and National industry. Skilled in using Figma, Adobe XD,
          HTML CSS, SASS and Javascript. Passionate about latest technological
          trends and web design.
        </p>
      </div>
    </header>
  );
}
