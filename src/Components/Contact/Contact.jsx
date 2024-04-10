import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocation } from "react-icons/io5";





const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero " style={{backgroundImage: 'url(https://timelinecovers.pro/facebook-cover/download/i-am-a-businesswoman-facebook-cover.jpg)'}}>
  <div className="hero-overlay bg-opacity-50"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-20 mt-20 text-5xl font-bold text-white">Contact US</h1>
    </div>
  </div>
</div>

<div className="flex justify-between items-center mx-5 mt-5">

    <div className="w-[650px] bg-slate-100 p-10">
   
     <h1 className="text-3xl mb-4 font-semibold text-center"> Contact Details</h1>
     <p className="opacity-90 text-center">If you have any questions, just fill in the contact form, and we will answer you shortly. If you are living nearby, come visit our office.</p>
     <div className="mt-4">
        <p className="font-bold">Client Support:</p>
        <h1 className="text-2xl pt-2 flex items-center"><small><FaPhone></FaPhone></small> 1-800-1234-567</h1>
     </div>
     <br />
     <div className="mt-4">
        <p className="font-bold ">E-mail:</p>
        <h className="text-2xl pt-2 flex items-center"><small><IoMdMailOpen></IoMdMailOpen></small>info@demolink.org</h>
     </div>
     <br />
     <div className="mt-4">
        <p className="font-bold">Main Office:</p>
        <h className="text-2xl pt-2 flex items-center"><small><IoLocation></IoLocation></small>3015 Grand Ave, Coconut Grove,Merrick Way</h>
     </div>


    </div>

    <div className="w-[550px] h-[500px]">
    <section className="p-6 dark:text-gray-800">
	<form noValidate="" className="container p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50">Send</button>
		</div>
	</form>
</section>
    </div>
</div>

<Footer></Footer>
        </div>
    );
};

export default Contact;