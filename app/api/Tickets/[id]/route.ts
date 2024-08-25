import Ticket, { ticket_type } from "@/app/(models)/Ticket";
import { Types } from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {id: string}}){
  try {
    const {id} = params;
    const foundTicket: ticket_type | null = await Ticket.findOne({_id: id});
    console.log("my found ticket: ", foundTicket)
    return NextResponse.json(foundTicket, {status: 200})
  } catch (error) {
    console.log("GET ERROR: ", error)
    return NextResponse.json({message: "Error", error}, {status: 500})
  }
}

export async function DELETE(req: Request, {params}: {params: {id: number}}) {
  try{
    const {id} = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({message: "Ticket Deleted"}, {status: 200})

  } catch (error) {
    console.log("DELETE ERROR: ", error)
    return NextResponse.json({message: "Error", error}, {status: 500})
  }
}

export async function PUT(req: Request, {params}: {params: {id: number}}) {
  try{
    const {id} = params;
    const body = await req.json()
    const ticketData = body.formData

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {...ticketData,})

    return NextResponse.json({message: "Ticket Updated"}, {status: 200})

  } catch (error) {
    console.log("PUT ERROR: ", error)
    return NextResponse.json({message: "Error", error}, {status: 500})
  }
}