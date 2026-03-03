import { type NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
	const code = request.nextUrl.searchParams.get("code") as string;

	const params = new URLSearchParams({
		client_id: process.env.GOOGLE_CLIENT_ID as string,
		client_secret: process.env.GOOGLE_CLIENT_SECRET as string,
		code,
		grant_type: "authorization_code",
		redirect_uri:
			`${process.env.BASE_URL}/api/google/callback`,
	});

	const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: params.toString(),
	});

	const data = await tokenRes.json();

	return NextResponse.json(data);
};
