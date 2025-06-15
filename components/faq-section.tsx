"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Whitecircle Group offer?",
    answer: "Whitecircle Group offers comprehensive e-commerce services including Amazon and Flipkart marketplace optimization, PPC advertising management, product listing enhancement, keyword research, competitor analysis, and full-service account management. Our goal is to maximize your sales and ROI across all major e-commerce platforms."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients begin to see measurable improvements within the first 30 days of working with us. However, significant growth typically occurs within 3-6 months as our strategies gain momentum. We provide detailed monthly reports so you can track your progress every step of the way."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes, we work with e-commerce businesses of all sizes, from startups to established brands. We have specialized packages for different business stages, whether you're just launching on Amazon or looking to scale your existing seven-figure operation."
  },
  {
    question: "What marketplaces do you specialize in?",
    answer: "We specialize in Amazon, Flipkart, Walmart Marketplace, eBay, and Etsy. Our team has expertise across all major global e-commerce platforms, helping you expand your reach domestically and internationally."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing is customized based on your specific needs and business size. We offer packages starting from $499/month for small businesses and scaling up for larger operations. We provide transparent pricing with no hidden fees, and we're committed to delivering a strong ROI on your investment."
  },
  {
    question: "Do you require long-term contracts?",
    answer: "While we achieve the best results with ongoing partnerships, we understand the need for flexibility. We typically recommend a 3-month minimum engagement to properly implement and measure our strategies, but we offer month-to-month options after the initial period."
  },
  {
    question: "What makes Whitecircle Group different from other agencies?",
    answer: "Unlike general marketing agencies, we focus exclusively on e-commerce marketplace optimization. Our team consists of former Amazon and Flipkart employees, giving us insider knowledge of platform algorithms and best practices. We maintain a limited client roster to ensure personalized attention and exceptional results for every brand we work with."
  }
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-5xl mb-4">
            Frequently <span className="gradient-text">Asked Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our e-commerce services and how we can help grow your business.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}