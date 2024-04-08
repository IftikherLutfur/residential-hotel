const Cards = ({ card }) => {

	const { estate_title , relevant_image, price, status, area, location, facilities} = card;

	return (
		<div className="mx-auto">

			<div className=" p-5 border-2 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mb-4 w-[400px] h-[680px]">

				<img src={relevant_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 rounded-lg dark:bg-gray-500" />

				<div className="flex flex-col justify-between p-6 space-y-8">

					<div className="space-y-1">
						<h2 className="text-2xl text-center font-bold tracking-wide">{estate_title}</h2>
						<h2 className="text-xl font-bold">Facilities:</h2>
						{
							facilities.map(fac=><li className="font-bold opacity-90" key={fac.id}>
								{fac}
							</li>)
						}
						<div className="grid grid-cols-2 font-semibold opacity-80 text-center items-center pt-6">
					<p>Status: {status}</p>
					<p className="dark:text-gray-800">Area: {area}</p>
						</div>
						
					<p className="opacity-80 font-semibold text-center">Location: {location}</p>
					
					</div>
					<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default Cards;