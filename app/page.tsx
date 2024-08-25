import TicketCard from "./(components)/TicketCard";
import { ticket_type } from "./(models)/Ticket";

type Props = {};

async function getTickets() {
	try {
		const res = await fetch("http://localhost:3000/api/Tickets", {
			cache: "no-store",
		});

		return res.json();
	} catch (error) {
		console.log("Failed to get Tickets", error);
	}
}

async function Dashboard({}: Props) {
	const { tickets } = await getTickets();

	//might need to create a types file
	const uniqueCategories = [
		...new Set<string>(tickets?.map(({ category }: ticket_type) => category)),
	];

	return (
		<div className="p-5">
			<div>
				{tickets &&
					uniqueCategories?.map((uniqueCategory, categoryIndex) => (
						<div key={categoryIndex} className="mb-4">
							<h2>{uniqueCategory}</h2>
							<div className="lg:grid grid-cols-2 xl:grid-cols-4">
								{tickets
									.filter(
										(ticket: ticket_type) => ticket.category === uniqueCategory
									)
									.map((filteredTicket: ticket_type, _index: number) => (
										<TicketCard
											// id={_index}
											key={_index}
											ticket={filteredTicket}
										/>
									))}
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Dashboard;
