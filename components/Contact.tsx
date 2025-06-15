"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  MessageSquare, 
  Github, 
  Linkedin, 
  Twitter,
  Calendar,
  MapPin,
  Clock,
  Instagram,
  MessageCircle
} from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })

  console.log("Contact component rendered", { formData })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log("Form data updated:", { name, value })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "aayush@deployer.dev",
      href: "mailto:aayush@deployer.dev"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Available Worldwide",
      href: null
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Response Time",
      value: "Within 24 hours",
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/ayushboyofficia",
      color: "hover:text-crisp-white"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://instagram.com/woxpc",
      color: "hover:text-pink-500"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Telegram",
      href: "https://t.me/SATHYA_0Pcontent",
      color: "hover:text-electric-blue"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#",
      color: "hover:text-electric-blue"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Twitter",
      href: "#",
      color: "hover:text-electric-blue"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-electric-blue rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-crisp-white mb-4">
            Let's Build <span className="bg-gradient-primary bg-clip-text text-transparent">Something</span> Together
          </h2>
          <p className="text-xl text-light-gray max-w-2xl mx-auto">
            Ready to deploy your next project? Let's discuss how I can help bring your ideas to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-dark-gray/50 backdrop-blur-sm border-electric-blue/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-primary rounded-lg text-crisp-white">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-crisp-white">Start a Project</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-crisp-white text-sm font-medium mb-2 block">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="bg-rich-black/50 border-electric-blue/30 text-crisp-white placeholder:text-light-gray focus:border-electric-blue"
                      />
                    </div>
                    <div>
                      <label className="text-crisp-white text-sm font-medium mb-2 block">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="bg-rich-black/50 border-electric-blue/30 text-crisp-white placeholder:text-light-gray focus:border-electric-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-crisp-white text-sm font-medium mb-2 block">
                      Project Type
                    </label>
                    <Input
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="Web App, API, Deployment, etc."
                      className="bg-rich-black/50 border-electric-blue/30 text-crisp-white placeholder:text-light-gray focus:border-electric-blue"
                    />
                  </div>

                  <div>
                    <label className="text-crisp-white text-sm font-medium mb-2 block">
                      Project Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, timeline, and requirements..."
                      rows={4}
                      className="bg-rich-black/50 border-electric-blue/30 text-crisp-white placeholder:text-light-gray focus:border-electric-blue resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:opacity-90 text-crisp-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                    <Mail className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <Card className="bg-dark-gray/50 backdrop-blur-sm border-electric-blue/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-crisp-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.div
                      key={info.label}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-electric-blue/5 transition-all duration-300"
                    >
                      <div className="p-2 bg-gradient-primary rounded-lg text-crisp-white">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-light-gray text-sm">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-crisp-white font-medium hover:text-electric-blue transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-crisp-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-dark-gray/50 backdrop-blur-sm border-electric-blue/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-crisp-white mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-rich-black/50 border border-electric-blue/30 rounded-lg text-light-gray ${social.color} transition-all duration-300 hover:border-electric-blue/60`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-dark-gray/50 backdrop-blur-sm border-success-green/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-success-green rounded-full animate-pulse-glow"></div>
                  <h3 className="text-xl font-bold text-crisp-white">Currently Available</h3>
                </div>
                <p className="text-light-gray mb-4">
                  Ready to take on new projects and deployment challenges.
                </p>
                <Button
                  size="sm"
                  className="bg-success-green hover:bg-success-green/90 text-crisp-white rounded-full"
                >
                  <Calendar className="mr-2 w-4 h-4" />
                  Schedule a Call
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer Attribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-electric-blue/20"
        >
          <p className="text-light-gray text-sm font-mono">
            MADE BY{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
              AYUSH X XMD
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}