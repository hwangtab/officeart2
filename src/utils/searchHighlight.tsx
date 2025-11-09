import React from 'react';

/**
 * Highlights search terms within text by wrapping matches in a styled mark element
 * @param text - The text to search within
 * @param searchTerm - The term to highlight
 * @returns React element with highlighted terms
 */
export function HighlightedText({ text, searchTerm }: { text: string; searchTerm: string }): JSX.Element {
  if (!searchTerm.trim()) {
    return <>{text}</>;
  }

  // Escape special regex characters in search term
  const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Create regex to match search term (case insensitive, global)
  const regex = new RegExp(`(${escapedTerm})`, 'gi');

  // Split text by matches
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        // Check if this part matches the search term (case insensitive)
        const isMatch = regex.test(part);
        regex.lastIndex = 0; // Reset regex state

        if (isMatch) {
          return (
            <mark
              key={index}
              className="bg-yellow-200 text-text-primary font-semibold px-0.5 rounded"
            >
              {part}
            </mark>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

/**
 * Helper function to check if text contains search term
 * @param text - Text to search in
 * @param searchTerm - Term to search for
 * @returns boolean indicating if match exists
 */
export function containsSearchTerm(text: string, searchTerm: string): boolean {
  if (!searchTerm.trim()) return false;
  return text.toLowerCase().includes(searchTerm.toLowerCase());
}
