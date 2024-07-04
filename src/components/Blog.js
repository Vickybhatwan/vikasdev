import React from 'react';

const Blog = () => {
  // Dummy data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id odio sem.',
      author: 'Vikas',
      date: 'July 4, 2024'
    },
    {
      id: 2,
      title: 'Advanced CSS Techniques',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id odio sem.',
      author: 'Vikas',
      date: 'July 5, 2024'
    }
    // Add more blog posts as needed
  ];

  return (
    <section id="blog" className="section">
      <div className="container">
        <h1>Blog</h1>
        {blogPosts.map(post => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="meta">
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Blog;
