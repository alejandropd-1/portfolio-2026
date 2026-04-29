import React from 'react';

/**
 * Parses a title string with special markers:
 * - "//" marks the beginning of the accented (colored) part
 * - "\n" marks a line break
 */
export function formatTitle(title: string): React.ReactNode {
  if (!title) return null;

  // Handle line breaks first (both real newlines and literal "\n" strings)
  const lines = title.split(/\\n|\n/);
  
  return lines.map((line, lineIdx) => {
    const parts = line.split('//');
    
    return (
      <React.Fragment key={lineIdx}>
        {parts[0]}
        {parts[1] && <span>{parts[1].trim()}</span>}
        {lineIdx < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
}

/**
 * Cleans a title for use in alt tags or simple text fields
 * (removes // and replaces \n with space)
 */
export function cleanTitle(title: string): string {
  if (!title) return '';
  return title.replace(/\/\//g, '').replace(/\\n|\n/g, ' ').trim();
}
