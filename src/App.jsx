
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Headers from './components/Headers/Headers'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog =>{
    // console.log('bookmark adding soon');
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarksAsRead = (id, time) =>{
    // console.log('marked as reading soon', time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    //remove the read blog from bookmark
    //console.log('remove bookmark', id);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (

    <>
      <Headers />
      <div className='md:flex justify-between mx-auto p-2 w-11/12 mt-8 gap-2'>
        <Blogs handleMarksAsRead={handleMarksAsRead} handleBookmarks={handleBookmarks} />
        <Bookmarks readingTime={readingTime}  bookmarks={bookmarks} />
      </div>
    </>
  )
}

export default App
