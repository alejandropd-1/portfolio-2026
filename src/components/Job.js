import Link from 'next/link';

export default function Job({ title, slug, place, type, period, tags }) {
  return (
    <article className="job-card">
      <div className="job-card__content">
        <div className="job-card__info">
          <h3 className="job-card__title">
            <Link href={`/jobs/${slug}`} className="job-card__link">
              {title}
            </Link>
          </h3>

          <div className="job-card__tags">
            {tags && tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tag-chip">{tag}</span>
            ))}
          </div>
        </div>

        <div className="job-card__syntax">
          <div className="syntax-line">
            <span className="syntax-key">Role</span>
            <span className="syntax-operator">=</span>
            <span className="syntax-punctuation">[</span>
            <span className="syntax-value">{type}</span>
            <span className="syntax-punctuation">]</span>
          </div>
          <div className="syntax-line">
            <span className="syntax-key">Stack</span>
            <span className="syntax-operator">=</span>
            <span className="syntax-punctuation">[</span>
            <span className="syntax-value">{place}</span>
            <span className="syntax-punctuation">]</span>
          </div>
          <div className="syntax-line">
            <span className="syntax-key">Impact</span>
            <span className="syntax-operator">=</span>
            <span className="syntax-punctuation">[</span>
            <span className="syntax-value">{period}</span>
            <span className="syntax-punctuation">]</span>
          </div>
        </div>
      </div>
    </article>
  );
}
