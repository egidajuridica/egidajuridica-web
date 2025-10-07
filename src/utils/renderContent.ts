import type { RichTextContent, RichTextNode } from '@/types';

function renderNode(node: RichTextNode): string {
  if (node.type === 'text' && typeof node.text === 'string') {
    let html = escapeHtml(node.text);
    
    if ((node.format as number) & 1) html = `<strong>${html}</strong>`; // Bold
    if ((node.format as number) & 2) html = `<em>${html}</em>`;     // Italic
    if ((node.format as number) & 8) html = `<code>${html}</code>`; // Code

    return html;
  }

  if (!node.children) {
    return '';
  }
  
  const childrenHtml = node.children.map(renderNode).join('');

  switch (node.type) {
    case 'paragraph':
      return childrenHtml.trim() === '' ? '' : `<p>${childrenHtml}</p>`;
    case 'heading':
      const tag = node.tag as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' || 'h2';
      return `<${tag}>${childrenHtml}</${tag}>`;
    case 'list':
      const listTag = node.tag as 'ul' | 'ol' || 'ul';
      return `<${listTag}>${childrenHtml}</${listTag}>`;
    case 'listitem':
      return `<li>${childrenHtml}</li>`;
    
    default:
      return childrenHtml; 
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderContentToHtml(content: RichTextContent): string {
  if (!content?.root?.children) {
    return '';
  }
  return content.root.children.map(renderNode).join('');
}

export { renderContentToHtml };