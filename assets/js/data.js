/*
  Étudiant: Abdelhak KHALIFA
  Données CV centralisées (JSON) — justifiable: séparation contenu / affichage
*/
const CV_DATA = {
  fullName: "Abdelhak KHALIFA",
  headline: "Étudiant en Informatique – IoT & Développement Web",
  stack: "(React, IoT, Liferay, DevOps)",
  phone: "+33 6 25 57 65 86",
  email: "abdelhakkhalifa4@gmail.com",
  city: "Annecy, France",
  website: "https://www.oussdeep.com",
  goal: "Alternance recherchée : Master 1 (2026–2027)",

  objective:
    "Je suis étudiant en 3e année de licence en informatique, numérique et gestion industrielle (L3 – INGI), spécialisé en IoT et systèmes embarqués. Je suis actuellement à la recherche d’une alternance pour mon année universitaire de Master 1 (2026–2027), afin de renforcer mes compétences techniques et contribuer activement à des projets innovants en entreprise.",

  experiences: [
    {
      period: "Fév. 2025 — Juil. 2025",
      title: "Stagiaire IoT & Développement Liferay",
      company: "Beorn Technologies",
      location: "Toulouse, France",
      bullets: [
        "Projet Smart Office 3.0.",
        "Conception et développement de capteurs IoT pour l’automatisation du confort.",
        "Sécurisation des accès (reconnaissance faciale, lecture de plaques d’immatriculation).",
        "Mise en place de workflows intelligents sous Liferay.",
        "Visualisation en temps réel des données IoT via une plateforme développée en React."
      ],
      tech: "React, Liferay, IoT, MQTT, JavaScript, APIs REST"
    },
    {
      period: "Sept. 2023 — Avr. 2024",
      title: "CEO Manager",
      company: "Club DevOps – ISI Mahdia",
      location: "Mahdia, Tunisie",
      bullets: [
        "Coordination des activités internes et organisation d’événements.",
        "Gestion des recrutements.",
        "Management d’une équipe de plus de 60 membres.",
        "Suivi des performances systèmes et résolution de problèmes techniques.",
        "Intégration et formation des nouveaux arrivants."
      ]
    },
    {
      period: "Sept. 2023 — Déc. 2024",
      title: "Responsable Sponsoring & Marketing",
      company: "Club IT – ISIMA",
      location: "Mahdia, Tunisie",
      bullets: [
        "Management d’équipe et pilotage des activités.",
        "Mise en relation avec de nouveaux partenaires.",
        "Suivi sponsoring et communication."
      ]
    }
  ],

  education: [
    {
      year: "2022 — 2025",
      title: "Licence Économie et Gestion — Parcours Informatique, Numérique et Gestion Industrielle (L3 – INGI)",
      place: "Institut Supérieur d’Informatique de Mahdia, Tunisie"
    },
    {
      year: "2025 — 2026",
      title: "IAE Savoie Mont Blanc",
      place: "Annecy, France"
    },
    {
      year: "2021 — 2022",
      title: "Baccalauréat — Sciences de l’Informatique",
      place: "Lycée secondaire Souassi, Mahdia"
    }
  ],

  skills: [
    { category: "Programmation", items: ["React", "Java", "Python", "PHP", "JavaScript", "HTML", "CSS", "C++", "SQL"] },
    { category: "Bases de données", items: ["MySQL", "PostgreSQL"] },
    { category: "IoT & Embarqué", items: ["Capteurs", "MQTT", "Communication temps réel"] },
    { category: "Tests & Qualité", items: ["Tests unitaires", "Validation"] },
    { category: "DevOps", items: ["Git", "GitHub", "Bitbucket", "CI/CD (bases)"] },
    { category: "Data", items: ["Power BI"] },
    { category: "Serveurs", items: ["Tomcat"] },
    { category: "CMS", items: ["Liferay"] },
    { category: "Méthodologies", items: ["Agile", "Scrum", "Kanban"] },
    { category: "Modélisation", items: ["UML"] }
  ],

  languages: ["Français", "Anglais"],
  hobbies: ["Football", "Baby-foot"]
};
