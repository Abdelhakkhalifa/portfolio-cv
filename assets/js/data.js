/*
  Étudiant: Abdelhak KHALIFA
  Données CV centralisées
*/

const CV_DATA = {
  fullName: "Abdelhak KHALIFA",

  headline: "Étudiant en Informatique – Développement Logiciel, IA & IoT",

  stack: "(Java, Python, React, IA, IoT, DevOps)",

  phone: "+33 6 25 57 65 86",
  email: "abdelhakkhalifa4@gmail.com",
  city: "Annecy, France",
  website: "https://www.oussdeep.com",

  goal:
    "À la recherche d'une alternance à partir de septembre 2026 – Master 1 Informatique",

  objective:
    "Étudiant en informatique passionné par le développement logiciel, l’intelligence artificielle, la data et les systèmes connectés. Actuellement en Licence 3 Informatique, Numérique et Gestion Industrielle à l’IAE Savoie Mont Blanc, je recherche une alternance à partir de septembre 2026 dans le cadre de mon Master 1. Mon objectif est de contribuer à des projets innovants en développement logiciel, intelligence artificielle, analyse de données, cloud ou IoT tout en renforçant mes compétences techniques et professionnelles.",

  targetRoles: [
    "Développeur Full Stack",
    "Développeur Logiciel",
    "Développeur IA / Machine Learning Junior",
    "Data Analyst Junior",
    "Ingénieur Logiciel Junior",
    "Développeur IoT"
  ],

  experiences: [
    {
      period: "Fév. 2025 — Juil. 2025",
      title: "Stagiaire IoT & Développement Liferay",
      company: "Beorn Technologies",
      location: "Toulouse, France",
      bullets: [
        "Participation au projet Smart Office 3.0.",
        "Conception et développement de capteurs IoT pour l’automatisation du confort des espaces de travail.",
        "Développement de fonctionnalités liées à la sécurisation des accès (reconnaissance faciale et lecture de plaques d’immatriculation).",
        "Mise en place de workflows intelligents sous Liferay.",
        "Développement d’interfaces React pour la visualisation en temps réel des données IoT.",
        "Intégration et consommation d’API REST."
      ],
      tech: "React, Liferay, IoT, MQTT, JavaScript, API REST"
    },

    {
      period: "Sept. 2023 — Avr. 2024",
      title: "Responsable DevOps Club",
      company: "ISI Mahdia",
      location: "Mahdia, Tunisie",
      bullets: [
        "Management et coordination d’une équipe de plus de 17 membres.",
        "Organisation d’ateliers techniques sur Git, Docker et les bonnes pratiques DevOps.",
        "Sensibilisation aux pipelines CI/CD et à l’automatisation.",
        "Accompagnement des nouveaux membres dans leur montée en compétences."
      ]
    },

    {
      period: "Sept. 2023 — Déc. 2024",
      title: "Responsable Sponsoring & Marketing",
      company: "Club IT – ISIMA",
      location: "Mahdia, Tunisie",
      bullets: [
        "Développement de partenariats avec des entreprises du secteur IT.",
        "Gestion des actions de sponsoring et de communication.",
        "Organisation et promotion d’événements technologiques."
      ]
    }
  ],

  education: [
    {
      year: "2025 — 2026",
      title: "Licence 3 Informatique, Numérique et Gestion Industrielle (INGI)",
      place: "IAE Savoie Mont Blanc – Annecy, France"
    },

    {
      year: "2022 — 2025",
      title: "Licence Ingénierie des Systèmes Informatiques – spécialité IoT & Systèmes Embarqués",
      place: "Institut Supérieur d’Informatique de Mahdia – Tunisie"
    },

    {
      year: "2021 — 2022",
      title: "Baccalauréat Sciences de l’Informatique",
      place: "Lycée Secondaire Souassi – Mahdia, Tunisie"
    }
  ],

  skills: [
    {
      category: "Programmation",
      items: [
        "Java",
        "Python",
        "JavaScript",
        "PHP",
        "C",
        "C++",
        "SQL"
      ]
    },

    {
      category: "Développement Web",
      items: [
        "React",
        "Node.js",
        "HTML",
        "CSS",
        "API REST"
      ]
    },

    {
      category: "Bases de données",
      items: [
        "MySQL",
        "PostgreSQL",
        "MongoDB"
      ]
    },

    {
      category: "Intelligence Artificielle & Data",
      items: [
        "Python",
        "Analyse de données",
        "Power BI",
        "Pandas (bases)",
        "NumPy (bases)",
        "Machine Learning (bases)"
      ]
    },

    {
      category: "IoT & Systèmes embarqués",
      items: [
        "MQTT",
        "Capteurs connectés",
        "Communication temps réel",
        "Collecte de données IoT"
      ]
    },

    {
      category: "DevOps & Systèmes",
      items: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Docker",
        "CI/CD (bases)",
        "Linux"
      ]
    },

    {
      category: "Outils & Méthodes",
      items: [
        "Jira",
        "UML",
        "Agile",
        "Scrum",
        "Kanban",
        "Liferay",
        "Tomcat"
      ]
    }
  ],

  projects: [
    {
      title: "Plateforme IoT Temps Réel",
      description:
        "Développement d’une application de visualisation de données IoT en temps réel avec React, MQTT et MongoDB."
    },

    {
      title: "API REST",
      description:
        "Conception et intégration d’API REST pour la communication entre différents services."
    },

    {
      title: "Conteneurisation Docker",
      description:
        "Mise en place d’environnements de développement et de déploiement avec Docker."
    },

    {
      title: "Pipeline CI/CD",
      description:
        "Automatisation des phases de build et de test via Git et outils DevOps."
    }
  ],

  languages: [
    "Français : Courant",
    "Anglais : Intermédiaire"
  ],

  hobbies: [
    "Football",
    "Veille technologique",
    "Intelligence artificielle",
    "Développement logiciel"
  ]
};
