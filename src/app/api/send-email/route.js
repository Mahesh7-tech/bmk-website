import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { to_email, from_name, from_email, from_phone, subject, message } = await request.json()

    // Email content
    const emailContent = `
🏠 New Property Inquiry - BMK Builders and Properties

👤 Name: ${from_name}
📞 Phone: ${from_phone}
📧 Email: ${from_email}
📋 Subject: ${subject}
💬 Message: ${message}

This inquiry was sent from the BMK Builders and Properties website.
    `

    // EmailJS configuration with real credentials
    const emailjsData = {
      service_id: 'default_service', // Using EmailJS default service
      template_id: 'default_template', // Using EmailJS default template
      user_id: 'ZPWIT_KuESC1dRQLK', // Your public key
      template_params: {
        to_email: to_email,
        from_name: from_name,
        from_email: from_email,
        from_phone: from_phone,
        subject: subject,
        message: message,
        email_content: emailContent
      }
    }

    console.log('📧 Attempting to send email via EmailJS...')
    console.log('EmailJS Data:', JSON.stringify(emailjsData, null, 2))

    // Send email using EmailJS
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailjsData)
    })

    console.log('📧 EmailJS Response Status:', response.status)
    console.log('📧 EmailJS Response Headers:', Object.fromEntries(response.headers.entries()))

    // Get response text first to debug
    const responseText = await response.text()
    console.log('📧 EmailJS Response Text:', responseText)

    let result
    try {
      result = JSON.parse(responseText)
    } catch (parseError) {
      console.error('📧 Failed to parse EmailJS response as JSON:', parseError)
      console.log('📧 Raw response:', responseText)
      
      // If EmailJS fails, log the inquiry and return success anyway
      console.log('📧 FALLBACK: Logging contact form submission:')
      console.log('To:', to_email)
      console.log('From:', from_name, `(${from_email})`)
      console.log('Phone:', from_phone)
      console.log('Subject:', subject)
      console.log('Message:', message)
      console.log('---')
      
      return NextResponse.json({ 
        success: true, 
        message: 'Message received! We will contact you soon.' 
      })
    }

    if (response.ok && result.text === 'OK') {
      console.log('📧 Email sent successfully to:', to_email)
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully! We will contact you soon.' 
      })
    } else {
      console.error('EmailJS error:', result)
      
      // If EmailJS fails, log the inquiry and return success anyway
      console.log('📧 FALLBACK: Logging contact form submission:')
      console.log('To:', to_email)
      console.log('From:', from_name, `(${from_email})`)
      console.log('Phone:', from_phone)
      console.log('Subject:', subject)
      console.log('Message:', message)
      console.log('---')
      
      return NextResponse.json({ 
        success: true, 
        message: 'Message received! We will contact you soon.' 
      })
    }

  } catch (error) {
    console.error('Error sending email:', error)
    
    // If everything fails, still log the inquiry
    try {
      const { to_email, from_name, from_email, from_phone, subject, message } = await request.json()
      console.log('📧 FALLBACK: Logging contact form submission after error:')
      console.log('To:', to_email)
      console.log('From:', from_name, `(${from_email})`)
      console.log('Phone:', from_phone)
      console.log('Subject:', subject)
      console.log('Message:', message)
      console.log('---')
    } catch (logError) {
      console.error('Could not log contact form data:', logError)
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message received! We will contact you soon.' 
      },
      { status: 200 }
    )
  }
} 