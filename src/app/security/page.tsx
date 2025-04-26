import React from 'react'

export default function SecurityPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Security</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Data Protection</h2>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information.
              Your personal information is contained behind secured networks and is only accessible by a limited
              number of persons who have special access rights to such systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Secure Communication</h2>
            <p>
              All sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.
              We implement SSL throughout our website to ensure that your data is encrypted during transmission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Regular Security Updates</h2>
            <p>
              We regularly update our security measures and protocols to ensure the highest level of protection
              for your data. This includes:
            </p>
            <ul className="list-disc pl-6">
              <li>Regular security audits</li>
              <li>Software updates and patches</li>
              <li>Vulnerability assessments</li>
              <li>Penetration testing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Data Storage</h2>
            <p>
              Your data is stored on secure servers with multiple layers of protection, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Firewall protection</li>
              <li>Intrusion detection systems</li>
              <li>Regular data backups</li>
              <li>Access control systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Incident Response</h2>
            <p>
              In the event of a security breach, we have a comprehensive incident response plan that includes:
            </p>
            <ul className="list-disc pl-6">
              <li>Immediate containment of the breach</li>
              <li>Investigation and assessment</li>
              <li>Notification of affected parties</li>
              <li>Implementation of corrective measures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
            <p>
              If you have any security concerns or questions, please contact our security team at:
              <a href="mailto:security@example.com" className="text-blue-500 hover:underline">
                security@example.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
} 