import { NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(1, 'Veuillez sélectionner un sujet'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Here you would typically:
    // 1. Send an email notification (using Resend, SendGrid, etc.)
    // 2. Store the contact request in a database
    // 3. Send a webhook notification (Slack, Discord, etc.)
    
    // For now, we'll just log the contact request
    console.log('[Contact Form Submission]', {
      ...validatedData,
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message reçu avec succès' 
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstError = error.errors[0]
      return NextResponse.json(
        { 
          success: false, 
          error: firstError.message 
        },
        { status: 400 }
      )
    }

    console.error('[Contact Form Error]', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Une erreur est survenue. Veuillez réessayer.' 
      },
      { status: 500 }
    )
  }
}
