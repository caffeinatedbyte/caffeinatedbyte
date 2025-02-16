"use server";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		axios
			.post(
				"https://getform.io/f/bllylelb",
				{
					First_Name: body.firstName,
					Last_Name: body.lastName,
					Email: body.email,
					Phone: body.phone,
					message: body.message,
				},
				{ headers: { Accept: "application/json" } },
			)
			.catch((error) => console.log(error));

		return NextResponse.json({ status: "OK" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 },
		);
	}
}
