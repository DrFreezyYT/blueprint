/**
 * HTMLTemplate provides templates for generating the final HTML document.
 */
class HTMLTemplate {
  /**
   * Creates a new HTML template instance.
   * @param {Object} [options] - Options object
   * @param {boolean} [options.minified=true] - Whether to minify the output
   */
  constructor(options = {}) {
    this.options = {
      minified: true,
      ...options,
    };
  }

  /**
   * Generates the final HTML document using the provided head and body content.
   * @param {string} headContent - HTML content for the <head> section
   * @param {string} bodyContent - HTML content for the <body> section
   * @returns {string} - Complete HTML document
   */
  generateDocument(headContent, bodyContent) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${headContent}
    <style>
        :root {
            --navbar-height: 3.5rem;
        }
        body {
            margin: 0;
            padding: 0;
            padding-top: calc(var(--navbar-height) + 2rem);
            background-color: #09090b;
            color: #fafafa;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        * {
            box-sizing: border-box;
        }
        ::selection {
            background-color: rgba(250, 250, 250, 0.1);
            color: #fafafa;
        }
        h1, h2, h3, h4, h5, h6, p {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    ${bodyContent}
</body>
</html>`;
  }
}

module.exports = HTMLTemplate; 