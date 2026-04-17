const articles = [
    {
        id: 1,
        title: "Building Modern Web Applications with Vanilla JavaScript",
        excerpt: "Learn how to create powerful web applications without relying on heavy frameworks. We'll explore DOM manipulation, event handling, and best practices.",
        category: "tutorial",
        tag: "Tutorial",
        date: "Apr 15, 2026",
        readTime: "8 min read",
        url: "article.html?id=1"
    },
    {
        id: 2,
        title: "Why I Switched to Static Site Generators",
        excerpt: "After years of using dynamic backends, many made the switch to static sites. Here's what was learned and why it's the future of web development.",
        excerpt: "After years of using dynamic backends, I made the switch to static sites. Here's what I learned and why I think it's the future of web development.",
        category: "thoughts",
        tag: "Thoughts",
        date: "Apr 10, 2026",
        readTime: "5 min read",
        url: "article.html?id=2"
    },
    {
        id: 3,
        title: "Understanding CSS Grid Layout Once and For All",
        excerpt: "CSS Grid doesn't have to be confusing. This comprehensive guide breaks down grid concepts with practical examples you can use today.",
        category: "tutorial",
        tag: "Tutorial",
        date: "Apr 5, 2026",
        readTime: "12 min read",
        url: "article.html?id=3"
    },
    {
        id: 4,
        title: "The State of Web Performance in 2026",
        excerpt: "Core Web Vitals are more important than ever. Let's look at the latest performance metrics and how to optimize for them.",
        category: "tech",
        tag: "Tech",
        date: "Mar 28, 2026",
        readTime: "6 min read",
        url: "article.html?id=4"
    },
    {
        id: 5,
        title: "Development Environment Setup",
        excerpt: "A tour through essential tools, extensions, and workflow that helps stay productive as a developer.",
        category: "thoughts",
        tag: "Thoughts",
        date: "Mar 20, 2026",
        readTime: "4 min read",
        url: "article.html?id=5"
    },
    {
        id: 6,
        title: "Introduction to Web Accessibility",
        excerpt: "Making the web usable for everyone isn't optional. Learn the fundamentals of accessibility and how to implement it in your projects.",
        category: "tutorial",
        tag: "Tutorial",
        date: "Mar 15, 2026",
        readTime: "10 min read",
        url: "article.html?id=6"
    }
];

function renderArticles(filter = 'all') {
    const grid = document.getElementById('articles-grid');
    const filtered = filter === 'all' 
        ? articles 
        : articles.filter(a => a.category === filter);
    
    grid.innerHTML = filtered.map(article => `
        <a href="${article.url}" class="article-card">
            <div class="article-meta">
                <span class="article-tag">${article.tag}</span>
                <span class="article-date">${article.date}</span>
            </div>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
            <div class="article-footer">
                <span class="read-time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    ${article.readTime}
                </span>
                <span class="read-more">
                    Read
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </span>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderArticles();
    
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderArticles(chip.dataset.filter);
        });
    });
});
