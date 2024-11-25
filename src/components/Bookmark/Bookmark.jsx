import React from 'react'
import PropTypes from 'prop-types'

const Bookmark =({bookmark}) => {

	const {title} = bookmark;

  return (
	<div className=''>
		<h3 className='text-xl shadow-lg black bg-gradient-to-r from-sky-200 to-indigo-200 mb-2 p-2 rounded-lg'>{title}</h3>
	</div>
  )
}

Bookmark.propTypes = {
	bookmark: PropTypes.object,
}

export default Bookmark