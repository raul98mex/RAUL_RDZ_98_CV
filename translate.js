function toggleLanguage() {
  const langBtn = document.getElementById("langToggleBtn");
  const isEnglish = langBtn.dataset.lang === "en";
  langBtn.dataset.lang = isEnglish ? "es" : "en";
langBtn.textContent = isEnglish ? "🇺🇸 EN" : "🇲🇽 ES";

  const translations = {
    "Education": "Educación",
    "Expand All": "Expandir Todo",
    "Collapse All": "Colapsar Todo",
    "Bachelor of Business Management Engineering": "Ingeniería en Dirección y Gestión de Empresas",
    "High school": "Preparatoria",
    "Contact": "Contacto",
    "Location": "Ubicación",
    "Download  CV": "Descargar CV",
    "Send me an email": "Envíame un correo",
    "Visit my LinkedIn": "Visita mi LinkedIn",
    "Call me": "Llámame",
    "Send me a WhatsApp": "Envíame un WhatsApp",
    "See on Google Maps": "Ver en Google Maps",
    "Graduated with data analysis and problem-solving skills for business development.": "Graduado con habilidades de análisis de datos y resolución de problemas para el desarrollo empresarial.",
    "Earned a Bachelor degree in Business Management Engineering, blending business administration with process optimization and strategic planning.": "Obtuve el título de Ingeniería en Gestión empresarial, combinando administración de negocios con optimización de procesos y planificación estratégica.",
    "Developed strong skills in operations management, project coordination, finance, and organizational development.": "Desarrollé sólidas habilidades en gestión de operaciones, coordinación de proyectos, finanzas y desarrollo organizacional.",
    "Completed coursework in supply chain management, financial analysis, human resources, and quality systems.": "Cursé materias en gestión de la cadena de suministro, análisis financiero, recursos humanos y sistemas de calidad.",
    "Participated in team-based projects focused on solving real-world business challenges through data-driven decision-making.": "Participé en proyectos en equipo enfocados en resolver retos empresariales reales mediante la toma de decisiones basada en datos.",
    "Gained experience with tools such as Excel, ERP systems, and business modeling techniques.": "Adquirí experiencia con herramientas como Excel, sistemas ERP y técnicas de modelado de negocios.",
    "Completed a comprehensive high school program with a strong foundation in mathematics, science, and humanities.": "Completé un programa de preparatoria integral con una sólida base en matemáticas, ciencias y humanidades.",
    "Participated in academic and extracurricular activities that fostered teamwork and communication skills.": "Participé en actividades académicas y extracurriculares que fomentaron el trabajo en equipo y las habilidades de comunicación.",
    "Maintained consistent academic performance and demonstrated responsibility in group assignments.": "Mantener un rendimiento académico constante y demostrar responsabilidad en trabajos en grupo.",
    "Job Experience": "Experiencia Laboral",
    "Business Manager": "Gerente de Negocios",
    "Managed the full lifecycle of a web development project for a transportation company, from initial concept to final deployment.": "Gestionó todo el ciclo de vida de un proyecto de desarrollo web para una empresa de transporte, desde el concepto inicial hasta el despliegue final.",
    "Coordinated with stakeholders to gather requirements, define objectives, and translate business needs into technical specifications.": "Coordinó con las partes interesadas para recopilar requisitos, definir objetivos y traducir las necesidades empresariales en especificaciones técnicas.",
    "Oversaw a cross-functional team including developers, designers, and QA to ensure timely delivery and alignment with client expectations.": "Supervisó un equipo multifuncional incluyendo desarrolladores, diseñadores y QA para garantizar la entrega a tiempo y la alineación con las expectativas del cliente.",
    "Implemented a user-friendly interface to streamline logistics tracking and improve operational efficiency across multiple departments.": "Implementó una interfaz fácil de usar para agilizar el seguimiento logístico y mejorar la eficiencia operativa en varios departamentos.",
    
    "Succesfully developed multiple web projects.": "Desarrolle de forma exitosa multiples proyectos web",
    "Engage with stakeholders to understand their needs, gather requirements, and analyze business processes to identify areas for improvement.": "Interactuó con las partes interesadas para comprender sus necesidades, recopilar requisitos y analizar procesos empresariales para identificar áreas de mejora.",
    "Documented business requirements, functional specifications, user stories, and other project artifacts to ensure clear communication between stakeholders and development teams.": "Documentó requisitos empresariales, especificaciones funcionales, historias de usuario y otros artefactos del proyecto para asegurar una comunicación clara entre las partes interesadas y los equipos de desarrollo.",
    "Provided knowledge, creativity and follow-up sessions with the development team to ensure accurate work and efficiency.": "Proporcionó conocimientos, creatividad y sesiones de seguimiento con el equipo de desarrollo para garantizar un trabajo preciso y eficiente.",
    "Succesfully used Agile and Waterfall methodologies to accomodate necesities of different projects.": "Utilizó con éxito metodologías Ágiles y en Cascada para adaptarse a las necesidades de diferentes proyectos.",
    "Collaborated with testing teams to define test cases, conduct testing, and ensure that deliverables meet quality standards and business requirements.": "Colaboró con los equipos de pruebas para definir casos de prueba, realizar pruebas y asegurar que los entregables cumplan con los estándares de calidad y requisitos del negocio.",
    "Was part of an internal restructuring team for new HR department processes.": "Formó parte de un equipo de reestructuración interna para nuevos procesos del departamento de Recursos Humanos.",
    "Project coordinator": "Coordinador de Proyectos",
    "Ensured successful project execution according to established objectives, timelines and costs.": "Aseguró la ejecución exitosa del proyecto de acuerdo con los objetivos, cronogramas y costos establecidos.",
    "Improved communication among all operations by 70%.": "Mejoró la comunicación entre todas las operaciones en un 70%.",
    "Collaborated with salespeople to ensure projects and quotations were achievable.": "Colaboró con vendedores para asegurar que los proyectos y presupuestos fueran viables.",
    "Processed and managed invoices and expenses.": "Procesó y gestionó facturas y gastos.",
    "Generated quality control programs for stakeholders.": "Generó programas de control de calidad para las partes interesadas.",
    "Worked with a commitment to precision and strong attention to detail": "Trabajó con compromiso a la precisión y gran atención al detalle",
    "Managed and supported business risk and worked to develop and implement strategic solutions.": "Gestionó y apoyó riesgos empresariales y trabajó en el desarrollo e implementación de soluciones estratégicas.",
    "Developed the business plan and finances.": "Desarrolló el plan de negocios y las finanzas.",
    "Brought forth the ability to multitask and prioritize.": "Demostró la capacidad de realizar múltiples tareas y priorizar responsabilidades.",
    "Drafted and formatted reports, presentations, and other documents.": "Redactó y formateó informes, presentaciones y otros documentos.",
    "Performed general office duties such as ordering supplies, maintaining office equipment and space.": "Realizó tareas generales de oficina como pedir suministros, mantener el equipo y el espacio de oficina.",
    "Provided administrative support to other departments or executives as needed.": "Brindó apoyo administrativo a otros departamentos o ejecutivos según fuera necesario.",
    "Projects": "Proyectos",
    "IT Equipment Management": "Gestión de Equipos de TI",
    "Monterrey, Mexico": "Monterrey, México",
    "Designed and implemented a web-based platform to streamline IT equipment inventory tracking, allocation, and maintenance for a manufacturing company. Improved asset visibility and reduced manual errors.": "Diseñé e implementé una plataforma web para optimizar el seguimiento, asignación y mantenimiento del inventario de equipos de TI para una empresa manufacturera. Mejoró la visibilidad de activos y redujo errores manuales.",
    "SEMI-RMA Warehouse Inventory Management": "Gestión de Inventario de Almacén SEMI-RMA",
    "Developed a custom inventory management system for a transportation company’s SEMI-RMA warehouse, enabling real-time stock updates, automated reporting, and enhanced process efficiency.": "Desarrollé un sistema personalizado de gestión de inventarios para el almacén SEMI-RMA de una empresa de transporte, que permite actualizaciones de stock en tiempo real, reportes automáticos y mayor eficiencia en procesos.",
    "Inventory Management": "Gestión de Inventarios",
    "Created a scalable inventory management web application for a manufacturing client, featuring user-friendly dashboards, analytics, and automated reorder alerts to optimize stock levels.": "Creé una aplicación web escalable para gestión de inventarios para un cliente manufacturero, con paneles amigables, análisis y alertas automáticas para optimizar niveles de stock.",
    "Insurance & Bonds": "Seguros y Fianzas",
    "Designed and implemented an internal operations platform for an insurance and bonds company, streamlining policy management, claims processing, and client communications to enhance operational efficiency.": "Diseñé e implementé una plataforma interna para una compañía de seguros y fianzas, que optimiza la gestión de pólizas, el procesamiento de reclamos y la comunicación con clientes para mejorar la eficiencia operativa.",
    "Reverse Logistics": "Logística Inversa",
    "Monterrey, Mexico. For a US company": "Monterrey, México. Para una empresa estadounidense",
    "Modernized a web platform to optimize business processes and developed a new module for reverse logistics, improving returns management and integrating advanced tracking features for a US-based client.": "Modernicé una plataforma web para optimizar procesos de negocio y desarrollé un nuevo módulo para logística inversa, mejorando la gestión de devoluciones e integrando funciones avanzadas de seguimiento para un cliente estadounidense.",
    "DIAPP": "DIAPP",
    "Developed a specialized web platform for diabetic patient management, enabling secure data tracking, appointment scheduling, and personalized health analytics for improved patient care.": "Desarrollé una plataforma web especializada para la gestión de pacientes diabéticos, que permite seguimiento seguro de datos, programación de citas y análisis personalizados para mejorar la atención al paciente.", "Web Development": "Desarrollo Web","Project-Management": "Administrador de proyectos","Agile Methodologies": "Metodologías Ágiles","Waterfall Methodologies": "Metodología en Cascada", "Skills": "Habilidades","Scrum Methodologies": "Metodología scrum", "Process Modeling": "Modelado de procesos", "Data Analysis": "Análisis de datos", "Documentation": "Documentación", "Stakeholder Management": "Manejo de partes interesdas","Critical Thinking": "Pensamiento crítico", "Im a bilingual Business Analyst and Business Management Engineer with experience across technology, manufacturing, and healthcare. Skilled in project coordination, business administration and process improvement, I bridge the gap between business needs and technical execution. I’ve led and supported web platform projects using Agile and Waterfall methodologies, focusing on stakeholder collaboration, user stories, and quality assurance. Proficient in tools like Azure DevOps, HTML, Excel, Jira, Drawio and Lucidchart, I bring analytical thinking and adaptability to every project. Fluent in English and Spanish, I’m passionate about solving complex problems, driving efficiency, and delivering value through thoughtful, data-driven strategies.": "Soy un Analista de negocios bilingüe e Ingeniero en Gestión Empresarial con experiencia en tecnología, manufactura y salud. Con habilidades en coordinación de proyectos, administración de negocios y mejora de procesos, sirvo de puente entre las necesidades empresariales y la ejecución técnica. He liderado y apoyado proyectos de plataformas web utilizando metodologías Ágiles y en Cascada, enfocándome en la colaboración con los interesados, las historias de usuario y el aseguramiento de calidad. Competente en herramientas como Azure DevOps, HTML, Excel, Jira, Drawio y Lucidchart, aporto pensamiento analítico y adaptabilidad a cada proyecto. Fluido en inglés y español, me apasiona resolver problemas complejos, impulsar la eficiencia y entregar valor mediante estrategias cuidadosas y basadas en datos.", "Home": "Inicio", "About Me": "Sobre mi", 
    "My Job": "Mi trabajo", "Hobbie":"Pasatiempo", "Bachelor":"Título", "Business Management Engineer":"Inieniero en Gestión Empresarial", "Web dev beginner":"Desarrollador Web Principiante" , "Business Analyst":"Analista de Negocios", "Business management engineer":"Inieniero en gestión empresarial", "Traveling":"Viajar", "Fishing":"Pescar",

    
  "Identify business needs, gather and document requirements, and recommend solutions to improve processes and achieve organizational goal.": "Identificar necesidades empresariales, recopilar y documentar requisitos, y recomendar soluciones para mejorar procesos y alcanzar los objetivos organizacionales.",
  "Plan, execute, and oversee projects, managing scope, timelines, resources, and deliverables to ensure successful completion.": "Planificar, ejecutar y supervisar proyectos, gestionando alcance, cronogramas, recursos y entregables para asegurar la finalización exitosa.",
  "Develop and maintain websites using HTML, CSS, and JavaScript, focusing on responsive design and user experience.": "Desarrollar y mantener sitios web utilizando HTML, CSS y JavaScript, enfocándose en diseño responsivo y experiencia de usuario.",
  "Apply Agile principles to foster collaboration, adaptability, and continuous improvement within project teams.": "Aplicar principios Ágiles para fomentar la colaboración, adaptabilidad y mejora continua dentro de los equipos de proyecto.",
  "Facilitate Scrum ceremonies, manage sprints, and support teams in delivering incremental value efficiently.": "Facilitar ceremonias Scrum, gestionar sprints y apoyar a los equipos en entregar valor incremental de manera eficiente.",
  "Implement structured, sequential project management processes for predictable and well-documented outcomes.": "Implementar procesos estructurados y secuenciales de gestión de proyectos para resultados predecibles y bien documentados.",
  "Design and visualize business processes using diagrams and modeling tools to optimize workflows and communication.": "Diseñar y visualizar procesos empresariales usando diagramas y herramientas de modelado para optimizar flujos de trabajo y comunicación.",
  "Create clear, concise documentation including user stories, requirements, manuals, and process guides for diverse audiences.": "Crear documentación clara y concisa que incluya historias de usuario, requisitos, manuales y guías de procesos para diversas audiencias.",
  "Engage stakeholders, gather feedback, manage expectations, and ensure alignment throughout project lifecycles.": "Involucrar a las partes interesadas, recopilar retroalimentación, gestionar expectativas y asegurar alineación durante todo el ciclo de vida del proyecto.",
  "Enhance web pages with interactivity and dynamic content using JavaScript for client-side development.": "Mejorar páginas web con interactividad y contenido dinámico usando JavaScript para desarrollo del lado del cliente.",
  "Structure web content semantically for accessibility, SEO, and maintainability across devices.": "Estructurar contenido web de manera semántica para accesibilidad, SEO y mantenibilidad en diversos dispositivos.",
  "Style and layout web pages for visual appeal, responsiveness, and cross-browser compatibility.": "Diseñar y maquetar páginas web para atractivo visual, responsividad y compatibilidad entre navegadores.",
  "Analyze problems logically, evaluate solutions, and make informed decisions to drive business success.": "Analizar problemas de forma lógica, evaluar soluciones y tomar decisiones informadas para impulsar el éxito empresarial.",
  "Track tasks, manage workflows, and support Agile project management using Jira software.": "Rastrear tareas, gestionar flujos de trabajo y apoyar la gestión Ágil de proyectos usando el software Jira.",
  "Coordinate development and operations, automate deployments, and manage releases using DevOps tools.": "Coordinar desarrollo y operaciones, automatizar despliegues y gestionar versiones usando herramientas DevOps.",
  "Create diagrams and flowcharts to visualize systems, processes, and organizational structures.": "Crear diagramas y flujogramas para visualizar sistemas, procesos y estructuras organizacionales.",
  "Design process maps, technical diagrams, and visual documentation using Draw.io for effective communication.": "Diseñar mapas de procesos, diagramas técnicos y documentación visual usando Draw.io para comunicación efectiva.",
  "Collect, interpret, and visualize data to uncover insights, support decision-making, and drive business improvements.": "Recopilar, interpretar y visualizar datos para descubrir información, apoyar la toma de decisiones e impulsar mejoras empresariales."

  };


  const elements = document.querySelectorAll("body *");
  elements.forEach(el => {
    el.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim().length > 0) {
        let newText = node.nodeValue;
        for (const [enText, esText] of Object.entries(translations)) {
          const from = isEnglish ? enText : esText;
          const to = isEnglish ? esText : enText;
          newText = newText.replace(new RegExp(from, "g"), to);
        }
        if (newText !== node.nodeValue) {
          node.nodeValue = newText;
        }
      }
    });
  });
}