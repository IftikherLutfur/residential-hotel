import { useParams,useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { IoLocation } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";




const CardDetails = () => {

const cards = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const card = cards.find(bk => bk.id === idInt)

    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 gap-5 p-4 bg-slate-100 mx-5 rounded-xl border-2">
                <div>
            <img className="rounded-xl" src={card.relevant_image} alt="" />
                </div>
                <div>
            <h1 className="text-3xl font-bold">{card.estate_title}</h1>
           <p className="font-bold mt-2 text-xl opacity-90 "> Facilities:</p>
           {card.facilities.map(fac => <li className="font-bold opacity-90" key={fac.id}>
								{fac}
							</li>)}
            <p className="font-semibold"><b>Description:</b><small> {card.description}</small></p>
            <div className="flex justify-between font-semibold my-3">
            <p>Status: {card.status}</p>
            <p>Area: {card.area}</p>
            <p className="flex items-center"><IoLocation> </IoLocation>{card.location}</p>
            <p className="flex items-center"><MdOutlineAttachMoney></MdOutlineAttachMoney> {card.price}</p>
            </div>
            <h1 className="text-xl font-bold">Contact:</h1>
            <p className="text-xl font-bold">{card.contact.phone}</p>
            <p className="text-xl font-bold">{card.contact.email}</p>
                </div>
            </div>
            
            
            
        </div>
    );
};

export default CardDetails;