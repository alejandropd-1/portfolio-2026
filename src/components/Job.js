import Link from 'next/link';

export default function Job({ slug, title, category, summary }) {
  const categoryClass = 
    category === "marketing" || category === "management"
      ? "margin-block-6"
      : "padding-block-2";

  return (
    <div className="job-section padding-block-end-8">
      {category !== "design" && (
        <h3 className={`job-title ${categoryClass}`}>
          <Link href={`/jobs/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {title}
          </Link>
        </h3>
      )}

      {category === "design" && (
        <h4 className="job-title padding-block-2">
          <Link href={`/jobs/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {title}
          </Link>
        </h4>
      )}

      <div className="job-description">
        <div style={{maxWidth: '80%'}}>
          <p className="margin-block-end-4" style={{lineHeight: 1.6, fontSize: '1.2rem', color: 'var(--color-gray-600)'}}>{summary}</p>
          <Link href={`/jobs/${slug}`} className="button" style={{display: 'inline-block', fontWeight: 600, borderBottom: '1px solid currentColor'}}>
            Seguir leyendo &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
