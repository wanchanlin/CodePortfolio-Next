import React from 'react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main>
      <div>
        <h1>About Me</h1>
        
        <div>
          <div>
            <h2>Professional Journey</h2>
            <p>
              With over 9 years of experience in the technology industry, I've developed a unique blend of skills
              in both design and development. My journey began with a passion for creating beautiful and functional
              digital experiences.
            </p>
            <p>
              Throughout my career, I've worked with clients across various industries, including entertainment,
              fashion, and technology. This diverse experience has allowed me to develop a versatile skill set
              and a deep understanding of different market needs.
            </p>
          </div>
          
          <div>
            <img
              src="/images/profile.jpg"
              alt="Professional photo"
              
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div>
          <h2>Skills & Expertise</h2>
          <div>
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
              <h3>Design</h3>
              <ul>
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
          <h2>Education & Certifications</h2>
          <div>
            <div>
              <h3>Bachelor's Degree in Computer Science</h3>
              <p>University Name, Year</p>
            </div>
            
            <div>
              <h3>Web Development Postgraduate Certificate</h3>
              <p>Humber College, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 