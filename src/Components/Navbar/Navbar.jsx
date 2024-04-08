import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext)

const handleLogOut = () => {
   logOut()
   .then(()=>{
    console.log("Logged Out")
   })
   .catch(error => {
    console.log(error)
   })
}

    return (
        <div className="mx-10">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li className="font-bold ml-5">Home</li>
        <li className="font-bold ml-5">Update Profile</li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-5 text-[16px] font-semibold px-1">
     <button>
        <NavLink to='/'>
        <li>Home</li>
          </NavLink>
        </button> 
      <button><li>Update Profile</li></button>
    </ul>
  </div>


  <div className="navbar-end">
    { user ?
    
    <button onClick={handleLogOut} className="btn font-bold btn-primary w-24">
        Logout</button>
        :
    <button className="btn font-bold btn-primary w-24">
        <NavLink to='/login'>Login</NavLink></button>
    }

  </div>


</div>
        </div>
    );
};

export default Navbar;