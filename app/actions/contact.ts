"use server"

export async function sendContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !subject || !message) {
    return { error: "Todos los campos son requeridos." }
  }

  return { success: "Mensaje enviado correctamente." }
}