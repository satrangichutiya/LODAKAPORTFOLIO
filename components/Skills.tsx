"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { 
  Code2, 
  Database, 
  Cloud, 
  GitBranch, 
  Server, 
  Zap,
  Terminal,
  Layers
} from 'lucide-react'

export default function Skills() {
  console.log("Skills component rendered")

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6" />,
      color: "electric-blue",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "deep-purple",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "Go", level: 82 },
        { name: "REST/GraphQL", level: 90 }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      color: "success-green",
      skills: [
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 80 },
        { name: "Elasticsearch", level: 75 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "electric-blue",
      skills: [
        { name: "AWS/Azure", level: 90 },
        { name: "Docker", level: 92 },
        { name: "Kubernetes", level: 85 },
        { name: "Terraform", level: 80 }
      ]
    }
  ]

  const tools = [
    "Git", "Docker", "Kubernetes", "Jenkins", "GitHub Actions", 
    "Terraform", "AWS", "Vercel", "Netlify", "MongoDB", 
    "PostgreSQL", "Redis", "Nginx", "Linux", "Bash"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="skills" className="py-20 bg-rich-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-light-gray max-w-2xl mx-auto">
            Full-stack capabilities with deep expertise in modern development and deployment technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="bg-dark-gray/50 backdrop-blur-sm border-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-primary rounded-lg text-crisp-white`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-crisp-white">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-crisp-white font-medium">{skill.name}</span>
                          <span className="text-light-gray text-sm">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-rich-black/50"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-crisp-white mb-8 flex items-center justify-center gap-3">
            <Terminal className="w-6 h-6 text-electric-blue" />
            Tools & Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <Badge
                  variant="outline"
                  className="bg-dark-gray/50 border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 hover:border-electric-blue/50 transition-all duration-300 px-4 py-2 text-sm font-medium"
                >
                  {tool}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Deployment Pipeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-crisp-white mb-8 text-center flex items-center justify-center gap-3">
            <GitBranch className="w-6 h-6 text-success-green" />
            Deployment Pipeline Expertise
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {[
              { icon: <Code2 className="w-5 h-5" />, label: "Code", color: "electric-blue" },
              { icon: <GitBranch className="w-5 h-5" />, label: "CI/CD", color: "deep-purple" },
              { icon: <Layers className="w-5 h-5" />, label: "Build", color: "success-green" },
              { icon: <Zap className="w-5 h-5" />, label: "Deploy", color: "electric-blue" },
              { icon: <Cloud className="w-5 h-5" />, label: "Production", color: "success-green" }
            ].map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <div className={`p-3 bg-gradient-primary rounded-full text-crisp-white animate-pulse-glow`}>
                  {step.icon}
                </div>
                <span className="text-crisp-white font-medium">{step.label}</span>
                {index < 4 && (
                  <div className="hidden md:block w-8 h-0.5 bg-gradient-primary"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}