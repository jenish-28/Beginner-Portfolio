// // import { EmailTemplate } from '../../../components/EmailTemplate';
// // import { EmailTemplate } from '@/components/EmailTemplate';

// import { Resend } from 'resend';
// import { NextResponse } from 'next/server';

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { body} = await req.json();
//   const { email, subject, message } = body;
//   try {
//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ['16jenishkumarpatel@gmail.com'],
//       subject: subject,
//       react: 
//       (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),

//     });

//     if (error) {
//       return Response.json({ error }, { status: 500 });
//     }

//     return Response.json(data);
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    // Parse request body
    const { email, subject, message } = await req.json();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["16jenishkumarpatel@gmail.com"], // You can add dynamic recipient if needed
      subject: subject || "No Subject",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // Handle resend error
    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    // ✅ Always return valid JSON response
    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data,
    });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
