import { baseUrl } from "../../constants/api.js";
import { renderPosts } from "../../templates/posts/renderPosts.js";


export async function displayPosts() {
	try {
		const response = await fetch(baseUrl + "");
		const blogs = await response.json();
		renderPosts(blogs);
	} catch (error) {
		console.log(error);
		document.querySelector("#blog-container").innerHTML = "There was an error fetching the posts";
	}
}
