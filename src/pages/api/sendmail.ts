import type { NextApiRequest, NextApiResponse } from "next";
import { trans } from "../../utils/nodemailer";

const test = async (request: NextApiRequest, response: NextApiResponse) => {
	if (request.method !== "POST") {
		return response.status(400).json({ message: "Bad request" });
	}
	const data = request.body;
	try {
		trans
			.sendMail({
				from: process.env['MAIL_USER'],
				to: process.env['MAIL_USER'],
				html: data.html,
				subject: data.subject,
			})
			.then((res) => {
				console.log(res);
			});
			return response.status(200).json({ success: true });
	} catch (error) {
		console.log(error);
		return response.status(400).json({ message: "Bad request" });
	}
};

export default test;
