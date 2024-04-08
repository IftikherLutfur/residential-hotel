import { useEffect, useState } from "react";

const Team = () => {

    const [member, setMember] = useState([])

    useEffect(()=>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setMember(data))
    },[])
        return (
       <div className="grid grid-cols-4 gap-5 ml-5 mr-5 mx-auto">
        {
           member.map(mem =><div key={mem.id} className="card w-full bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-2xl text-center font-bold">{mem.name}</h2>
    <p className="text-xl opacity-90 text-center">{mem.residential_agent}</p>
  </div>
</div>)}
       </div>
    );
};

export default Team;