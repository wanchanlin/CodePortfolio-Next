import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Professional Journey</h2>
            <p className="mb-4">
              With over 9 years of experience in the technology industry, I've developed a unique blend of skills
              in both design and development. My journey began with a passion for creating beautiful and functional
              digital experiences.
            </p>
            <p className="mb-4">
              Throughout my career, I've worked with clients across various industries, including entertainment,
              fashion, and technology. This diverse experience has allowed me to develop a versatile skill set
              and a deep understanding of different market needs.
            </p>
          </div>
          
          <div className="relative h-64">
            <Image
              src="/images/profile.jpg"
              alt="Professional photo"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <ul className="list-disc pl-6">
                <li>Frontend Development (HTML, CSS, JavaScript)</li>
                <li>React & Next.js</li>
                <li>Node.js & Express</li>
                <li>Database Management</li>
                <li>API Integration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <ul className="list-disc pl-6">
                <li>UI/UX Design</li>
                <li>Graphic Design</li>
                <li>Motion Graphics</li>
                <li>Video Production</li>
                <li>Adobe Creative Suite</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Education & Certifications</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Bachelor's Degree in Computer Science</h3>
              <p className="text-gray-600">University Name, Year</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">UI/UX Design Certification</h3>
              <p className="text-gray-600">Institution Name, Year</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Full Stack Development Bootcamp</h3>
              <p className="text-gray-600">Institution Name, Year</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 