import { useEffect, useState } from "react";

const Team = () => {

    const [member, setMember] = useState([])

    useEffect(()=>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setMember(data))
    },[])
        return (
        
       <div className="mt-5">

<h1 className="text-2xl font-bold text-center mb-10">Our Agents</h1>

       <div className="grid grid-cols-4 gap-5 ml-5 mr-5 mx-auto">
        
        {
           member.map(mem =><div key={mem.id} className="card w-full bg-base-100 shadow-xl">
  <figure><img className="h-[200px] rounded-full w-[200px]" src={mem.img} /></figure>
  <div className="card-body">
    <h2 className="text-2xl text-center font-bold">{mem.name}</h2>
    <p className="text-xl opacity-90 text-center">{mem.residential_agent}</p>
  </div>
</div>)}
       
        
       </div>
       </div>
    );
};

export default Team;