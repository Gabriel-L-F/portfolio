
"use client";

import style from "./page.module.css";
import { useState } from "react";
import Header from "@/components/Header";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      form.reset();
    }
  }

  return (
    <div className={`${style.bg}`}>
      <Header />
      <div className={`${style.content}`}>
        <h1 className={`${style.title}`}>Contact</h1>


        <form onSubmit={handleSubmit} className={`${style.form}`}>
          <input name="nom" required placeholder="Nom"
            className={`${style.input}`} />

          <input name="email" type="email" required placeholder="Email"
            className={`${style.input}`} />

          <input name="poste" placeholder="Poste"
            className={`${style.input}`} />

          <input name="entreprise" placeholder="Entreprise"
            className={`${style.input}`} />

          <input name="sujet" required placeholder="Sujet"
            className={`${style.input}`} />

          <textarea name="contenu" required placeholder="Message"
            rows={5}
            className={`${style.textarea}`} />

          <button
            disabled={loading}
            className={`${style.button}`}
            >
            {loading ? "Envoi..." : "Envoyer"}


          </button>
            {success && (
              <p className={`${style.success}`}>
                Message envoyé avec succès
              </p>
            )}
        </form>
      </div>
    </div>
  );
}