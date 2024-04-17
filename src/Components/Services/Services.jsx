import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import Rev from "../Rev/Rev";

const Services = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="bg-dark py-32" style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/b8/West_Kensington_Estate_2012-09-22_13.05.44.jpg')" }}>

            <div className="hero-overlay bg-opacity-60"></div>

                <div className="bg-opacity-80">
                    <h2 className="text-6xl font bold text-white">Our Services</h2>
                    <p className="text-white">Construction of itself, because it is pain some proper style design occur are pleasure</p>
                </div>

            </div>

            <h1 className="text-4xl font-bold mt-8 mb-5 text-center">Our Services</h1>

            <div className="grid lg:grid-cols-3 grid-cols-2 text-white space-x-3 space-y-4 mx-auto">


                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Security Services</h1>
                    <p className="opacity-90">Implementing security measures such as gated entries, surveillance cameras, security patrols, and access control systems to ensure the safety and security of residents.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Maintenance and Repairs</h1>
                    <p className="opacity-90">Providing maintenance and repair services for common areas, facilities, and infrastructure within the residential estate, including landscaping, building upkeep, and utility maintenance.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Landscaping and Gardening</h1>
                    <p className="opacity-90">Maintaining green spaces, gardens, parks, and recreational areas within the estate to enhance the aesthetic appeal and quality of life for residents.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Waste Management</h1>
                    <p className="opacity-90">Managing waste disposal and recycling services to maintain cleanliness and sanitation standards within the residential community.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Community Facilities</h1>
                    <p className="opacity-90">Offering access to community amenities such as swimming pools, fitness centers, playgrounds, clubhouses, and sports facilities for the enjoyment and recreation of residents.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Concierge Services</h1>
                    <p className="opacity-90">Providing assistance and support to residents with tasks such as package delivery, event planning, transportation arrangements, and information inquiries.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Emergency Response</h1>
                    <p className="opacity-90">Establishing emergency response protocols, including fire safety measures, medical assistance, and disaster preparedness plans, to ensure the well-being and security of residents during emergencies.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Social and Recreational Programs:</h1>
                    <p className="opacity-90">Organizing social events, recreational activities, and educational programs to foster a sense of community and camaraderie among residents.</p>
                </div>

                <div className="bg-sky-900 py-5 text-center px-3 rounded-lg hover:bg-orange-600">
                    <img src="" alt="" />
                    <h1 className="text-3xl font-bold">Environmental Sustainability</h1>
                    <p className="opacity-90"> Implementing eco-friendly practices and initiatives such as energy-efficient lighting, water conservation measures, and green building standards to promote environmental sustainability within the residential community.</p>
                </div>






            </div>

            <div className="lg:flex justify-center text-center items-center mt-10 gap-5">
                <div>
                    <p className="text-orange-400 font-bold ml-48">WORK PROCESS</p>
                    <h1 className="text-6xl font-bold text-blue-900"><span className="ml-8">The way of</span> <br /> our Working</h1>
                </div>
                <div>
                    <p className="font-semibold">
                        Construction of itself, because it is pain, but because some <br /> proper style design occur in toil and pain pleasure we <br /> have expert team
                    </p>
                </div>
            </div>

            <div className="lg:flex lg:space-y-0 space-y-4 justify-center text-center text-white gap-5 mt-10">

                <div className="bg-sky-900 rounded-lg py-4 px-2"><h1 className="text-2xl font-bold">Meeting with
                    our Clients</h1>
                    <p>Meeting with our clients for all requirements for this project we start now</p>
                </div>

                <div className="bg-sky-900 rounded-lg py-4 px-2"><h1 className="text-2xl font-bold">Project
                    Planning</h1>
                    <p>Meeting with our clients for all requirements for this project we start now</p>
                </div>

                <div className="bg-sky-900 rounded-lg py-4 px-2"><h1 className="text-2xl font-bold">Construction
                    & Finalize</h1>
                    <p>Meeting with our clients for all requirements for this project we start now</p>
                </div>

                <div className="bg-sky-900 rounded-lg py-4 px-2"><h1 className="text-2xl font-bold">Hand over
                    Project</h1>
                    <p>Meeting with our clients for all requirements for this project we start now</p>
                </div>
            </div>

            <Rev></Rev>

            <Footer></Footer>
        </div>
    );
};

export default Services;