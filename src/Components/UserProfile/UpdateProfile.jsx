import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import UserProfile from "./UserProfile";

const UpdateProfile = () => {

    const updateProfile = e => {
     e.preventDefault();
     console.log(e.currentTarget);
     const form = new FormData(e.currentTarget)
     const name = form.get("name")
     const image = form.get("image")
     console.log(name,image)
    }



    return (
        <div className="">
            <Navbar></Navbar>
            <div>
                <UserProfile></UserProfile>
            </div>
            <div>


                
            </div>

            <Footer></Footer>

        </div>
    );
};

export default UpdateProfile;