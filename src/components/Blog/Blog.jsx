import PropTypes from "prop-types";
import { MdBookmarks } from "react-icons/md";


const Blog = ({blog, handleBookmarks, handleMarksAsRead}) => {
	// console.log(blog);
	const {id, cover, author, author_img, title, posted_date, reading_time, hashtags} = blog;

	return (

		<div className="bg-gradient-to-r from-blue-200 to-red-200 p-2 my-2 rounded-lg">
			<img className="rounded-lg w-full" src={cover} alt={`cover picture of the title ${title}`} />
			<div  className="flex justify-between mt-2">
				<div className="flex items-center ml-6">
					<img className="w-14 rounded-full" src={author_img} alt="" />
					<div className=" ml-6">
						<h3 className="text-2xl font-semibold">{author}</h3>
						<p>{posted_date}</p>
					</div>
				</div>
				<div className="flex items-center text-2xl gap-2">
					<button  className="btn bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold">{reading_time} min read </button>
					<button onClick={()=> handleBookmarks(blog)} className="btn bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold"><MdBookmarks /></button>
				</div>
			</div>
			<h2 className="text-4xl my-2">{title}</h2>
			<p className="mb-2">
				{
					hashtags.map((hash, idx) => <span key={idx}><a href="">#{hashtags}</a></span>)
				}
			</p>

			<button onClick={() =>handleMarksAsRead(id, reading_time)} className="btn mb-8 bg-gradient-to-r from-blue-500 to-red-500 text-white font-semibold">Mark As Read</button>
		</div>

	);
};

Blog.propTypes = {
	blog: PropTypes.object.isRequired,
	handleBookmarks: PropTypes.func,
}

export default Blog;