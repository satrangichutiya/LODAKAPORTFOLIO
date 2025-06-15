"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Zap, Database, Cloud } from 'lucide-react'

export default function Projects() {
  console.log("Projects component rendered")

  const projects = [
    {
      id: 1,
      title: "CloudDeploy Pro",
      description: "Advanced CI/CD pipeline management platform with real-time deployment monitoring and rollback capabilities.",
      image: "https://assets.macaly-user-data.dev/iigi7lqdkaxxl7hauba793jw/m0kmypwknggi6kax4791wyx9/qQiB6kubNBBpt25gQp8kx/tmpt88-euvf.webp",
      tech: ["Next.js", "TypeScript", "Docker", "AWS", "Redis"],
      github: "#",
      live: "#",
      status: "Production",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      id: 2,
      title: "DevOps Dashboard",
      description: "Comprehensive monitoring solution for multi-cloud infrastructure with custom alerting and analytics.",
      image: "https://assets.macaly-user-data.dev/iigi7lqdkaxxl7hauba793jw/m0kmypwknggi6kax4791wyx9/dhDJWYtZHWaA3_w4b4Kj5/tmpynrzfydz.webp",
      tech: ["React", "Node.js", "PostgreSQL", "Kubernetes", "Grafana"],
      github: "#",
      live: "#",
      status: "Beta",
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 3,
      title: "API Gateway Suite",
      description: "High-performance API gateway with rate limiting, authentication, and microservices orchestration.",
      image: "https://assets.macaly-user-data.dev/iigi7lqdkaxxl7hauba793jw/m0kmypwknggi6kax4791wyx9/RBhX7jxj46RhKS4-Kvqnk/tmpzvumbwj6.webp",
      tech: ["Go", "Redis", "MongoDB", "Docker", "Istio"],
      github: "#",
      live: "#",
      status: "Production",
      icon: <Zap className="w-6 h-6" />
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-dark relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-crisp-white mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-light-gray max-w-2xl mx-auto">
            Showcasing production-ready applications with focus on scalability, performance, and deployment excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-dark-gray/50 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 overflow-hidden group">
                {/* Anime Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/90 via-dark-gray/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={project.status === 'Production' ? 'default' : 'secondary'}
                      className={`text-xs backdrop-blur-sm ${
                        project.status === 'Production' 
                          ? 'bg-success-green/20 text-success-green border-success-green/30' 
                          : 'bg-deep-purple/20 text-deep-purple border-deep-purple/30'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="p-2 bg-gradient-primary/80 backdrop-blur-sm rounded-lg text-crisp-white">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-crisp-white mb-2">{project.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-light-gray mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-crisp-white mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-rich-black/50 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90 text-crisp-white flex-1 rounded-full"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-crisp-white rounded-full"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-accent hover:opacity-90 text-crisp-white font-semibold px-8 py-3 rounded-full"
          >
            View All Projects
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}