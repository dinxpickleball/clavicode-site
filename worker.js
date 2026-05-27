export default {
  async fetch(request) {
    return new Response(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clavicode — Rapid Software Development</title>
    <meta name="description" content="Clavicode — Full-stack, mobile, and business automation. Rapid software development.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --bg: #0a0a0a;
            --fg: #e0e0e0;
            --dim: #555;
            --accent: #00d4aa;
            --accent-dim: #00d4aa33;
        }

        html {
            font-size: 16px;
        }

        body {
            font-family: 'JetBrains Mono', monospace;
            background: var(--bg);
            color: var(--fg);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            -webkit-font-smoothing: antialiased;
        }

        .terminal {
            max-width: 620px;
            width: 100%;
        }

        .prompt {
            color: var(--accent);
            user-select: none;
        }

        .line {
            line-height: 1.8;
            font-size: 0.9rem;
        }

        .line + .line {
            margin-top: 0.1rem;
        }

        .block + .block {
            margin-top: 2rem;
        }

        .comment {
            color: var(--dim);
        }

        .output {
            color: var(--fg);
            padding-left: 1.2rem;
        }

        .highlight {
            color: var(--accent);
        }

        h1 {
            font-size: 1.4rem;
            font-weight: 700;
            letter-spacing: 0.05em;
            color: var(--fg);
            margin-bottom: 0.25rem;
        }

        .tagline {
            font-size: 0.85rem;
            color: var(--dim);
            font-weight: 300;
        }

        .separator {
            border: none;
            border-top: 1px solid #1a1a1a;
            margin: 1.5rem 0;
        }

        .services-list {
            list-style: none;
        }

        .services-list li {
            line-height: 1.8;
            font-size: 0.9rem;
        }

        .services-list li::before {
            content: "→ ";
            color: var(--accent);
        }

        .contact-line {
            font-size: 0.85rem;
            line-height: 2;
        }

        .contact-line a {
            color: var(--accent);
            text-decoration: none;
            border-bottom: 1px solid var(--accent-dim);
            transition: border-color 0.2s;
        }

        .contact-line a:hover {
            border-color: var(--accent);
        }

        .cursor {
            display: inline-block;
            width: 0.55em;
            height: 1.1em;
            background: var(--accent);
            vertical-align: text-bottom;
            animation: blink 1s step-end infinite;
            margin-left: 0.15em;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }

        @media (max-width: 480px) {
            body { padding: 1.5rem; }
            h1 { font-size: 1.2rem; }
            .line, .services-list li { font-size: 0.8rem; }
        }
    </style>
</head>
<body>
    <main class="terminal">
        <div class="block">
            <h1>clavicode</h1>
            <div class="tagline">rapid software development</div>
        </div>

        <hr class="separator">

        <div class="block">
            <div class="line comment">// what we do</div>
            <ul class="services-list">
                <li>full-stack web development</li>
                <li>mobile applications</li>
                <li>business process automation</li>
                <li>AI integration &amp; tooling</li>
            </ul>
        </div>

        <div class="block">
            <div class="line comment">// how we work</div>
            <div class="line output">Ship fast. Iterate faster.</div>
            <div class="line output">From idea to production — no fluff, no bloat.</div>
        </div>

        <hr class="separator">

        <div class="block">
            <div class="line contact-line"><span class="comment">email</span>  <a href="mailto:info@clavicode.com">info@clavicode.com</a></div>
            <div class="line contact-line"><span class="comment">web</span>    <a href="https://clavicode.com">clavicode.com</a></div>
        </div>

        <div class="block">
            <div class="line">
                <span class="prompt">$</span> <span class="cursor"></span>
            </div>
        </div>
    </main>
</body>
</html>
`, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
};