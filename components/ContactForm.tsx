"use client"

import { useActionState } from "react"
import { sendContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(sendContactForm, null)

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Contacto</h2>

        <form action={action} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Nombre:</label>
            <input
              name="name"
              placeholder="Tu nombre"
              required
              className="bg-white text-gray-900 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Asunto:</label>
            <input
              name="subject"
              placeholder="Asunto"
              required
              className="bg-white text-gray-900 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Email:</label>
            <input
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="bg-white text-gray-900 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm">Mensaje:</label>
            <textarea
              name="message"
              placeholder="Tu mensaje..."
              required
              className="bg-white text-gray-900 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
            />
          </div>

          {state?.error && <p className="text-red-400">{state.error}</p>}
          {state?.success && <p className="text-green-400">{state.success}</p>}

          <button
            type="submit"
            disabled={isPending}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isPending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </section>
  )
}