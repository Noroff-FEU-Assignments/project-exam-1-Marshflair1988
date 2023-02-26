baseUrl = "http://localhost/myblog/wp-json/wp/v2/posts/";
const productContainer = document.querySelector(".post")

async function getBlogs(url){
  const response = await fetch(url);
  const blogs = await response.json();
  console.log(blogs);
  blogs.forEach(function(blogs){
    productContainer.innerHTML += `
    <div class="title"><h3>${blogs.slug}</h3>
    <div class="image"><${blogs.better_featured_media}`
  })
}

getBlogs(baseUrl);

