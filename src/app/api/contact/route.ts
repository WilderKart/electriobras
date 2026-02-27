import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, company, email, phone, projectType, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Electriobras Web <onboarding@resend.dev>', // Resend sandbox requires this from address unless a domain is verified
            to: 'info@electriobras.com',
            subject: `Nuevo mensaje de Contacto: ${name} - ${company}`,
            html: `
        <h2>Nuevo mensaje de contacto desde la Web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Tipo de Proyecto:</strong> ${projectType}</p>
        <br/>
        <h3>Mensaje:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ success: false, error: 'Hubo un error enviando el mensaje.' }, { status: 500 });
    }
}
