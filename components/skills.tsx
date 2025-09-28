"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/components/language-provider"

const skillCategories = [
  {
    title: "skills.frontend",
    icon: "🎨",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "React Native", level: 90 }, // Highlighted React Native
      { name: "CSS3/HTML5", level: 88 },
      { name: "Electron", level: 85 },
    ],
  },
  {
    title: "skills.backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js/Express", level: 93 },
      { name: "PHP/Symfony", level: 88 },
      { name: "AI/Machine Learning", level: 80 }, // Increased AI level and highlighted
      { name: "Python/Django", level: 40 },
    ],
  },
  {
    title: "skills.mobile",
    icon: "📱",
    skills: [
      { name: "React Native", level: 90 }, // Dedicated mobile section highlighting React Native
      { name: "Ionic", level: 75 },
      { name: "Electron", level: 85 },
      { name: "C++/ESP32", level: 80 },
    ],
  },
  {
    title: "skills.devops",
    icon: "☁️",
    skills: [
      { name: "CI/CD", level: 90 },
      { name: "AWS/Firebase", level: 87 },
      { name: "Docker/Proxmox", level: 85 },
      { name: "Jenkins", level: 82 },
    ],
  },
]

const certifications = [
  "Grado Ingeniería Informática",
  "Técnico Superior en DAW",
  "Técnico Superior en ASIR",
  "PET Certificate (Inglés)",
  "Euskera B2",
]

const softSkills = [
  "Liderazgo técnico",
  "Mentoring",
  "Arquitectura de software",
  "Code Review",
  "Metodologías ágiles",
  "Comunicación técnica",
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance">{t("skills.title")}</h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center flex items-center justify-center gap-2">
                  <span className="text-2xl">{category.icon}</span>
                  {t(category.title)}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">🏆 Certificaciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <Badge key={cert} className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">👥 Habilidades de Liderazgo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-blue-200 text-blue-700">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
