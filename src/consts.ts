export const UNIQUE_ID_ATTRIBUTE = 'gid';
// WEB AUTOMATION
// TODO
export const WHITELIST_TAGS_WEB_AUTOMATION = [
    'html', 'body', 'title',
    'main', 'footer', 'header', 'nav', 'section', 'article',
    'div', 'p',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'a', 'button',
    'form', 'input', 'label', 'select', 'option', 'textarea',
    'span', 'ul', 'li', 'ol',
];

export const WHITELIST_ATTRIBUTES_WEB_AUTOMATION = [
    UNIQUE_ID_ATTRIBUTE,
    'href',
    'alt',
];

export const HTML_CURRENT_PAGE_PREFIX = 'HTML of current page:' as const;

export const HTML_COMMENT_REGEX = /<!--([\s\S]*?)-->/g;

export const DATASET_HTML_KEY = '#sourceHtml';
