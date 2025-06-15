import ContactForm from "@/components/contact-form"
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Contact Us | Whitecircle Group",
  description: "Get in touch with Whitecircle Group for all your e-commerce needs. We're here to help you grow your online business.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to take your e-commerce business to the next level? 
            Reach out to us and one of our experts will get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8 rounded-lg">
            <h2 className="font-heading text-2xl mb-4">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll respond within 24 hours.
            </p>
            <ContactForm />
          </div>

          <div>
            <div className="glass-card p-8 rounded-lg mb-6">
              <h2 className="font-heading text-2xl mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-primary">hello@whitecirclegroup.com</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Address</h3>
                  <p>123 E-Commerce Street<br />
                  Digital City, DC 10101<br />
                  United States</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h2 className="font-heading text-2xl mb-4">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}