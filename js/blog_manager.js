async function loadBlog() {
    // Get the id from the url
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');

    // Load the json
    const response = await fetch('../../json/blog_info.json');
    const blogs = await response.json();

    // Search for the blog
    const blog = blogs.find(b => b.id === blogId);

    if (blog) {
        document.getElementById('blog-title').innerText = blog.title;
        document.getElementById('blog-date').innerText = blog.date;
        document.getElementById('blog-body').innerHTML = blog.content;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadBlog();
});