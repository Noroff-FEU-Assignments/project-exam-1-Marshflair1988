export function renderPosts(posts) {
	const blogContainer = document.querySelector("#blog-container");
	blogContainer.innerHTML = "";
	posts.forEach(function (post) {
		blogContainer.append(createPost(post));
	});
}

function createPost(post) {
    const div = document.createElement("div");
    div.classList.add("post");

    const heading = document.createElement("h1");
    heading.innerText = post.title.rendered;
    div.append(heading);

    const content = document.createElement("div");
    content.innerHTML = post.content.rendered;
    div.append(content);

    return div;
}

