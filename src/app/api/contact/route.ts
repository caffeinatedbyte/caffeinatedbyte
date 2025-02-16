import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		console.log(body);

		return NextResponse.json({ status: "OK" }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 },
		);
	}
}
