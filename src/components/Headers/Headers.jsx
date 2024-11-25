import profile from '../../assets/images/profile.png'

const Headers = () => {
	return (
		<header className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg sticky top-0'>
			<div className='w-11/12 mx-auto flex justify-between items-center p-4 bottom-4'>
			<h1 className="font-bold text-4xl text-white">Knowledge cafe</h1>
			<img src={profile} alt="" />
			</div>
		</header>
	
	);
};

export default Headers;