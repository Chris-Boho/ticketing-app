"use client";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Types } from "mongoose";
import { useRouter } from "next/navigation";

type Props = {
	id: Types.ObjectId;
};

export default function DeleteBlock({ id }: Props) {
	const router = useRouter();
	async function deleteTicket() {
		const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
			method: "DELETE",
		});
		if (res.ok) {
			router.refresh();
		}
	}

	return (
		<FontAwesomeIcon
			icon={faX}
			className="text-red-400 hover:curser-pointer hover:text-red-200"
			onClick={deleteTicket}
		/>
	);
}
