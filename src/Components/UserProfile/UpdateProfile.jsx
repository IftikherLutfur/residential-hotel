import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import UserProfile from "./UserProfile";

const UpdateProfile = () => {
    return (
        <div className="">
            <Navbar></Navbar>
           <div>
           <UserProfile></UserProfile>
           </div>
           <div>

            
<div className="flex items-center justify-center gap-5 text-center dark:bg-gray-50 dark:text-gray-800">
           <div>
           <h1 className="text-4xl font-bold text-center">Update Your Profile</h1>
            <p>You can update / modify your profile picture and your current name </p>
           </div>
	<form noValidate="" action="" className="flex text-black flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800">

		<label htmlFor="username" className="self-start text-xs font-semibold">Name</label>

		<input 
        type="text" 
        className="flex items-center h-12 px-4 mt-2 rounded 
        dark:text-black focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" />

		<label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Photo URL</label>

		<input 
        type="url" 
        className="flex items-center h-12 px-4 mt-2 rounded dark:text-black focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" />

		<button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Update Profile</button>

	</form>
</div>
           </div>

           <Footer></Footer>
            
        </div>
    );
};

export default UpdateProfile;