import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "Resend <onboarding@resend.dev>",
      to: ["retaliator215@gmail.com"],
      subject: `[Contact] ${data.sujet}`,
      replyTo: data.email,
      html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${data.nom}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Poste :</strong> ${data.poste || "-"}</p>
        <p><strong>Entreprise :</strong> ${data.entreprise || "-"}</p>
        <hr />
        <p>${data.contenu.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("Email envoyé avec succès !");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur Resend :", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}