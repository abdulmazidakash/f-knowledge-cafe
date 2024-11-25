import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {


	return (
		<div className="md:w-1/3 bg-gradient-to-r from-purple-300 to-green-300 ml-4 p-4 rounded-lg shadow-lg">
			<div>
			<button className="btn bg-green-500 mb-2">Reading Time: {readingTime}</button>
			</div>
			<button className="md:text-sm text-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white btn text-center mb-2">Bookmarks Blogs: {bookmarks.length}</button>
			<div>
				{
					bookmarks.map((bookmark, idx )=> <Bookmark  key={idx} bookmark={bookmark} />)
				}
			</div>
		</div>
	);
};

Bookmarks.propTypes = {
	
}

export default Bookmarks;