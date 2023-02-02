import nodemailer from "nodemailer";
export const trans = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env['MAIL_USER'],
		pass: process.env['MAIL_PASS'],
	},
});
