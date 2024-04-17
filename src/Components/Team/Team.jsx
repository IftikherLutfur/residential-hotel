import { useEffect, useState } from "react";
import 'animate.css';

const Team = () => {

  const [member, setMember] = useState([]);

  useEffect(() => {
    fetch('team.json')
      .then(res => res.json())
      .then(data => setMember(data))
  }, [])
  return (

    <div className="mt-5">

      <h1 className="text-4xl font-bold ml-10 text-center">Meet Our Team</h1>
      <p className="mb-16 text-center mt-5 font-semibold opacity-90 ml-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis aspernatur quis distinctio modi sit. this is the most customer fvrt team they are top staff and they are so famous we are proud with this team. We are so happy to their work ethics the way they work totally amazing </p>

      <div className=" grid lg:grid-cols-4 grid-cols-2 gap-5 ml-5 mr-5 mx-auto">

        {
          member.map(mem => <div key={mem.id} className="card w-full bg-base-100 shadow-xl">
            <figure><img className="h-[200px] rounded-full w-[200px]" src={mem.img} /></figure>
            <div className="card-body">
              <h2 className=" animate__backInRight text-2xl text-center font-bold">{mem.name}</h2>
              <p className="text-xl opacity-90 text-center">{mem.residential_agent}</p>
            </div>

            </div>)}
            </div>


    </div>
  );
};

export default Team;