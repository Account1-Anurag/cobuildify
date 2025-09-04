import {Resend} from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async ({ to, subject, text }: { to: string; subject: string; text: string }) => {
    try    {
        await resend.emails.send({
            from: "onboarding@resend.dev",
            to,
            subject,
            text,
        });
        console.log("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
