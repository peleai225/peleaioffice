import { NextResponse } from 'next/server'
import { z } from 'zod'

const demoSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = demoSchema.parse(body)
    
    // Here you would typically:
    // 1. Send an email notification to the sales team
    // 2. Store the demo request in a database
    // 3. Create a lead in your CRM
    // 4. Schedule a calendar event
    
    // For now, we'll just log the demo request
    console.log('[Demo Request Submission]', {
      ...validatedData,
      product: 'PeleAI360',
      timestamp: new Date().toISOString(),
    })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demande de démo reçue avec succès' 
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

    console.error('[Demo Request Error]', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Une erreur est survenue. Veuillez réessayer.' 
      },
      { status: 500 }
    )
  }
}
