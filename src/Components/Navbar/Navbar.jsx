import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => {
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
              <button><NavLink to='/about'><li>About Us</li></NavLink></button>
              {
              user &&
              <button><NavLink to="/contact"><li>Contact Us</li></NavLink></button>
            }
            {
              user &&
              <button><NavLink to="/services"><li>Services</li></NavLink></button>
            }
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">Homies</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-5 text-[16px] font-semibold px-1">
            <button>
              <NavLink className={({ isActive}) =>
                      isActive
                        ? "text-green-500 underline"
                       :
                         ""  
                    } to='/'>
                <li>Home</li>
              </NavLink>
            </button>
            <button><NavLink className={({ isActive}) =>
                      isActive
                        ? "text-green-500 underline"
                       :
                         ""  
                    } to='/about'><li>About Us</li></NavLink></button>
            {
              user &&
              <button><NavLink className={({ isActive}) =>
              isActive
                ? "text-green-500 underline"
               :
                 ""  
            } to="/contact"><li>Contact Us</li></NavLink></button>
            }
            {
              user &&
              <button><NavLink className={({ isActive}) =>
              isActive
                ? "text-green-500 underline"
               :
                 ""  
            } to="/services"><li>Services</li></NavLink></button>
            }

          </ul>
        </div>


        <div className="navbar-end gap-5">
        <div>
          {user ?
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="text-center font-bold">
              {user.displayName}  
              </li>
              <li><NavLink to='/update'>Update<small>Profile</small></NavLink></li>
             
              <li>
                <button onClick={handleLogOut}>
                  Logout</button>
              </li>

                {/* {user && */}

              {/* } */}
            </ul>
          </div>
        :
<button className="btn btn-primary">
                  <NavLink to='/login'>Login</NavLink></button>
        }

</div>
          {/* {
            user &&
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img className={`hover:${user.displayName}`} src={user.photoURL} />
              </div>
            </div>
          } */}
          {/* {user ?

            <button onClick={handleLogOut} className="btn font-bold btn-primary w-24">
              Logout</button>
            :
            <button className="btn font-bold btn-primary w-24">
              <NavLink to='/login'>Login</NavLink></button>
          } */}

        </div>
      </div>



      {/* <div className="navbar flex justify-between bg-base-100">
        <div className="flex">
          <a className="btn btn-ghost text-xl">Homies</a>
        </div>

        <div className="flex gap-56 ">

          <div className="navbar-center ml-24 lg:flex">
            <ul className="menu menu-horizontal gap-5 text-[16px] font-semibold px-1">
              <button>
                <NavLink to='/'>
                  <li>Home</li>
                </NavLink>
              </button>
              <button><NavLink to='/about'><li>About Us</li></NavLink></button>
              <button><li>Update Profile</li></button>
              {
                user &&
                <button><NavLink to="/contact"><li>Contact Us</li></NavLink></button>
              }
              {
                user &&
                <button><NavLink to="/profile"><li>Profile</li></NavLink></button>
              }
              {
                user &&
                <button><NavLink to="/services"><li>Services</li></NavLink></button>
              }

            </ul>
          </div>
<div>
          {user ?
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                {
                user &&
                <button><NavLink to="/profile"><li>Profile</li></NavLink></button>
              }
                </a>
              </li>
              <li><a>Settings</a></li>

              <li><a>{user &&

                <button onClick={handleLogOut}>
                  Logout</button>
              }
              </a></li>
            </ul>
          </div>
        :
<button className="">
                  <NavLink to='/login'>Login</NavLink></button>
        }

</div>
        </div>

      </div> */}



    </div>
  );
};

export default Navbar;