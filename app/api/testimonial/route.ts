import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    
    // Basic validation
    if (!body.name || !body.email || !body.testimonial || !body.rating) {
      return NextResponse.json(
        { error: 'Name, email, testimonial, and rating are required' },
        { status: 400 }
      );
    }
    
    // In a real application, you would:
    // 1. Validate the email format
    // 2. Store the data in a database
    // 3. Send an email notification to admin
    // 4. Maybe have an approval process before showing testimonials publicly

    // For now, we'll just log the data and return a success response
    console.log('Testimonial submission:', body);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json(
      { success: true, message: 'Thank you for your testimonial! It will be reviewed and published soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Testimonial submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit your testimonial. Please try again later.' },
      { status: 500 }
    );
  }
}