import React from 'react'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-4">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through the contact form or any of the methods below.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">
                  your.email@example.com
                </a>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p>Taiwan, CA</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    GitHub
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
} 