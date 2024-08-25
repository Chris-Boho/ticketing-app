import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import { ticket_type } from "../(models)/Ticket";
import Link from "next/link";

type Props = {
	ticket: ticket_type;
};

export default function TicketCard({ ticket }: Props) {
	function formatTimestamp(timestamp: Date) {
		const date = new Date(timestamp);
		const formattedDate = date.toLocaleString("en-US");

		return formattedDate;
	}

	return (
		<div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
			<div className="flex mb-3">
				<PriorityDisplay priority={ticket.priority} />
				<div className="ml-auto">
					<DeleteBlock id={ticket._id} />
				</div>
			</div>
			<Link href={`/TicketPage/${ticket._id}`} style={{ display: "content" }}>
				<h4>{ticket.title}</h4>
				<hr className="h-px border-0 bg-page mb-2" />
				<p className="whitespace-pre-wrap">{ticket.description}</p>
				<div className="flex-grow"></div>
				<div className="flex mt-2">
					<div className="flex flex-col">
						<p className="text-xs my-1">{formatTimestamp(ticket.createdAt)}</p>
						<ProgressDisplay progress={ticket.progress} />
					</div>
					<div className="ml-auto flex items-end">
						<StatusDisplay status={ticket.status} />
					</div>
				</div>
			</Link>
		</div>
	);
}
