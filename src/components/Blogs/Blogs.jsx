import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleBookmarks, handleMarksAsRead}) => {

	const [blogs, setBlogs] = useState([]);

	useEffect(()=>{
		fetch('blogs.json')
			.then(res => res.json())
			.then(data => setBlogs(data))
	}, [])

	return (
		<div className="md:2/3">
			<button className="btn  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white mb-2">Blogs: {blogs.length}</button>
			<div className="">
				{
					blogs.map(blog => <Blog 
						key={blog.id} 
						blog={blog}
						handleBookmarks={handleBookmarks}
						handleMarksAsRead={handleMarksAsRead}
						></Blog>)
				}
			</div>
		</div>
	);
};

Blogs.propTypes = {
	handleBookmarks: PropTypes.func,
}

export default Blogs;