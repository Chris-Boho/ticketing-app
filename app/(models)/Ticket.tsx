import mongoose, { Schema, Types } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

export interface ticket_type {
	_id: Types.ObjectId;
	title: string;
	description: string;
	category: string;
	priority: number;
	progress: number;
	status: string;
	active: boolean;
	createdAt: Date;
}

const ticketSchema = new Schema(
	{
		title: String,
		description: String,
		category: String,
		priority: Number,
		progress: Number,
		status: String,
		active: Boolean,
	},
	{
		timestamps: true,
	}
);

//gets the existing ticket model or creates a model if it doesn't exist
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;
