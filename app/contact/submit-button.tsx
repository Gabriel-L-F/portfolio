"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-black text-white p-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
    >
      {pending ? "Envoi en cours..." : "Envoyer le message"}
    </button>
  );
}
