import TicketForm from "@/app/(components)/TicketForm";
import { ticket_type } from "@/app/(models)/Ticket";
import { Types } from "mongoose";

type Props = {
	params: { id: string };
};

async function getTicketById(id: string) {
	const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
		cache: "no-store",
	});
	if (!res.ok) {
		throw new Error("Failed to get Ticket");
	}
	return res.json();
}

export default async function TicketPage({ params }: Props) {
	console.log("params", params);
	const EDITMODE = params.id === "new" ? false : true;
	let updateTicketData;
	if (EDITMODE) {
		console.log("editmode: ", EDITMODE);
		updateTicketData = await getTicketById(params.id);
		console.log("updateTicketData: ", updateTicketData);
		// updateTicketData = updateTicketData.foundTicket;
		// console.log("updateTicketData2: ", updateTicketData);
	} else {
		updateTicketData = {
			_id: "new",
		};
	}
	console.log("editmode in page: ", EDITMODE);
	console.log("my updated ticket data is: ", updateTicketData);
	return <TicketForm ticket={updateTicketData} />;
}
