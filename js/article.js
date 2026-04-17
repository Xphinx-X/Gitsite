const articleData = {
    1: {
        title: "Building Modern Web Applications with Vanilla JavaScript",
        tag: "Tutorial",
        date: "Apr 15, 2026",
        readTime: "8 min read",
        content: `
            <p>JavaScript frameworks come and go, but vanilla JavaScript remains the foundation of the web. In this article, we'll explore how to build modern, maintainable web applications without relying on heavy frameworks.</p>
            
            <h2>Why Vanilla JavaScript?</h2>
            <p>Before diving into the code, let's address the elephant in the room. Why would anyone choose vanilla JS over React, Vue, or Angular? The answer isn't straightforward, but there are compelling reasons:</p>
            <ul>
                <li><strong>Performance</strong> - No framework overhead means faster load times and smaller bundles</li>
                <li><strong>Simplicity</strong> - You understand exactly what's happening under the hood</li>
                <li><strong>Portability</strong> - Your code runs anywhere without build tools or dependencies</li>
                <li><strong>Learning</strong> - Building with vanilla JS makes you a better developer</li>
            </ul>
            
            <h2>Project Structure</h2>
            <p>A well-organized project structure is crucial. Here's what I recommend:</p>
            <pre><code>project/
├── index.html
├── css/
│   ├── style.css
│   └── components.css
├── js/
│   ├── main.js
│   └── components/
└── assets/</code></pre>
            
            <h2>DOM Manipulation</h2>
            <p>Modern DOM APIs have made manipulation easier than ever. Here's a pattern I use frequently:</p>
            <pre><code>const createElement = (tag, className, content) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (content) el.innerHTML = content;
    return el;
};</code></pre>
            
            <h2>Event Handling</h2>
            <p>Delegation is your friend. Instead of attaching listeners to every element, attach one to the parent:</p>
            <pre><code>document.addEventListener('click', (e) => {
    if (e.target.matches('.btn')) {
        handleButtonClick(e.target);
    }
});</code></pre>
            
            <h2>State Management</h2>
            <p>You don't need Redux for state management. A simple store pattern works well:</p>
            <pre><code>const store = {
    state: {},
    subscribers: [],
    
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.notify();
    },
    
    subscribe(fn) {
        this.subscribers.push(fn);
    },
    
    notify() {
        this.subscribers.forEach(fn => fn(this.state));
    }
};</code></pre>
            
            <h2>Conclusion</h2>
            <p>Vanilla JavaScript is more than capable of building modern web applications. The key is understanding the fundamentals and applying good patterns. Start simple, stay organized, and only add complexity when truly needed.</p>
        `
    },
    2: {
        title: "Why I Switched to Static Site Generators",
        tag: "Thoughts",
        date: "Apr 10, 2026",
        readTime: "5 min read",
        content: `
            <p>For years, many built dynamic websites with databases, server-side rendering, and complex backends. Then they discovered static site generators, and haven't looked back.</p>
            
            <h2>The Turning Point</h2>
            <p>Security concerns with dynamic sites pushed many to reconsider. Managing updates, plugins, and vulnerabilities became overwhelming. That's when the question arose: why complicate things?</p>
            
            <h2>What Changed</h2>
            <p>Static sites aren't new, but modern tooling has made them incredibly powerful:</p>
            <ul>
                <li>Instant loading - no database queries, no server processing</li>
                <li>Security - there are no server-side vulnerabilities to exploit</li>
                <li>Hosting - free hosting on GitHub Pages, Netlify, Vercel</li>
                <li>Version control - content is in Git, easy to rollback</li>
                <li>Performance - Lighthouse scores of 100 are achievable</li>
            </ul>
            
            <h2>The Trade-offs</h2>
            <p>Static isn't always the answer. If you need real-time data, user authentication, or frequently changing content, a dynamic site makes sense. But for blogs, portfolios, and documentation, static is hard to beat.</p>
            
            <h2>The Setup</h2>
            <p>Plain HTML, CSS, and JavaScript. No build step, no framework, just files that deploy directly. It's refreshingly simple.</p>
        `
    },
    3: {
        title: "Understanding CSS Grid Layout Once and For All",
        tag: "Tutorial",
        date: "Apr 5, 2026",
        readTime: "12 min read",
        content: `
            <p>CSS Grid has been around for years, yet many developers still struggle with it. Let's fix that with clear explanations and practical examples.</p>
            
            <h2>The Two Dimensional Reality</h2>
            <p>Unlike Flexbox (one-dimensional), Grid works in two dimensions - rows and columns simultaneously. This makes it perfect for page layouts and complex component designs.</p>
            
            <h2>Basic Grid Setup</h2>
            <pre><code>.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}</code></pre>
            
            <h2>The fr Unit</h2>
            <p>The fr unit represents a fraction of available space. <code>1fr 2fr 1fr</code> creates three columns where the middle column is twice as wide.</p>
            
            <h2>Auto-fit vs Auto-fill</h2>
            <p>These are powerful keywords for responsive grids:</p>
            <pre><code>/* Expands columns to fill space */
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

/* Maintains column count, may leave empty space */
grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));</code></pre>
            
            <h2>Grid Areas</h2>
            <p>Named grid areas make layouts readable:</p>
            <pre><code>.container {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>
            
            <p>Practice these concepts, and Grid will become second nature.</p>
        `
    },
    4: {
        title: "The State of Web Performance in 2026",
        tag: "Tech",
        date: "Mar 28, 2026",
        readTime: "6 min read",
        content: `
            <p>Web performance continues to evolve. Let's look at what matters most in 2026 and how to optimize for it.</p>
            
            <h2>Core Web Vitals</h2>
            <p>Google's metrics remain central to performance optimization:</p>
            <ul>
                <li><strong>LCP</strong> (Largest Contentful Paint) - Aim for under 2.5s</li>
                <li><strong>FID</strong> (First Input Delay) - Keep under 100ms</li>
                <li><strong>CLS</strong> (Cumulative Layout Shift) - Maintain below 0.1</li>
            </ul>
            
            <h2>New Metrics</h2>
            <p>INP (Interaction to Next Paint) has replaced FID. It measures responsiveness throughout the page lifecycle, not just the first interaction.</p>
            
            <h2>Optimization Techniques</h2>
            <p>Some timeless advice still applies:</p>
            <ul>
                <li>Minimize JavaScript - lazy load when possible</li>
                <li>Optimize images - use modern formats like WebP</li>
                <li>Reduce server response time - consider edge deployment</li>
                <li>Eliminate render-blocking resources</li>
            </ul>
        `
    },
    5: {
        title: "Development Environment Setup",
        tag: "Thoughts",
        date: "Mar 20, 2026",
        readTime: "4 min read",
        content: `
            <p>Every developer has their sacred setup. Here's a popular configuration - the tools many use daily and why.</p>
            
            <h2>Editor</h2>
            <p>VS Code with a minimal theme and a handful of essential extensions. Keeping things lean - fewer extensions mean fewer things that can break.</p>
            
            <h2>Terminal</h2>
            <p>Ghostty on macOS. Fast, GPU-accelerated, and config file is just a text file.</p>
            
            <h2>Browser</h2>
            <p>Firefox Developer Edition for its excellent dev tools and privacy-first approach. Chrome for testing cross-browser compatibility.</p>
            
            <h2>The Philosophy</h2>
            <p>Don't chase the latest tools. Use what works and ignore the hype. New tools are evaluated critically before adoption.</p>
        `
    },
    6: {
        title: "Introduction to Web Accessibility",
        tag: "Tutorial",
        date: "Mar 15, 2026",
        readTime: "10 min read",
        content: `
            <p>Web accessibility isn't a feature - it's a requirement. Let's cover the fundamentals every developer should know.</p>
            
            <h2>Why Accessibility Matters</h2>
            <p>Over 1 billion people worldwide have some form of disability. Accessible design benefits everyone - think keyboard navigation, screen readers, and reduced motion.</p>
            
            <h2>Semantic HTML</h2>
            <p>Use the right element for the job:</p>
            <ul>
                <li>Use <code>&lt;button&gt;</code> for clickable actions, not <code>&lt;div&gt;</code></li>
                <li>Use <code>&lt;nav&gt;</code> for navigation regions</li>
                <li>Use <code>&lt;main&gt;</code> for primary content</li>
                <li>Use proper heading hierarchy (<code>h1</code> to <code>h6</code>)</li>
            </ul>
            
            <h2>Keyboard Navigation</h2>
            <p>Every interactive element should be reachable via keyboard. Use <code>tabindex</code> sparingly and logically.</p>
            
            <h2>Color Contrast</h2>
            <p>WCAG 2.1 requires:</p>
            <ul>
                <li>4.5:1 contrast for normal text</li>
                <li>3:1 for large text (18px+ or 14px+ bold)</li>
            </ul>
            
            <h2>ARIA When Needed</h2>
            <p>ARIA attributes can help, but semantic HTML should always be your first choice. When you need ARIA, use it correctly - incorrect ARIA can be worse than none.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
    if (id && articleData[id]) {
        const article = articleData[id];
        document.title = `${article.title} - GitsiteX`;
        document.getElementById('article-title').textContent = article.title;
        document.getElementById('article-tag').textContent = article.tag;
        document.getElementById('article-date').textContent = article.date;
        document.getElementById('article-readtime').textContent = article.readTime;
        document.getElementById('article-content').innerHTML = article.content;
    } else {
        document.getElementById('article-content').innerHTML = `
            <p>Article not found. <a href="articles.html">Return to articles</a>.</p>
        `;
    }
});
