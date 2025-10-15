import React from "react";
import html from '../../assets/icons/html.png';

interface TechItem {
  name: string;
  img: string;
  description: string;
}

interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend",
    icon: "🌐",
    items: [
      { name: "HTML", img: html, description: "Estructura semántica de sitios web." },
      { name: "CSS", img: html, description: "Estilos y diseño adaptable." },
      { name: "JavaScript", img: html, description: "Lógica y dinamismo del frontend." },
      { name: "React", img:html, description: "Componentes reutilizables y SPA." },
      { name: "Tailwind", img: html, description: "Estilado rápido y responsivo con utilidades." },
    ],
  },
  {
    title: "Backend",
    icon: "🗄️",
    items: [
      { name: "Java", img: html, description: "Lenguaje base para desarrollo backend." },
      { name: "Spring Boot", img: html, description: "Framework para APIs y microservicios." },
      { name: "MySQL", img: html, description: "Base de datos relacional." },
      { name: "MongoDB", img: html, description: "Base de datos NoSQL flexible." },
      { name: "Python", img: html, description: "Lenguaje versátil para scripting y backend." },
    ],
  },
  {
    title: "Herramientas y otros",
    icon: "🧰",
    items: [
      { name: "Git / GitHub", img: html, description: "Control de versiones y repositorios." },
      { name: "VS Code", img: html, description: "Editor principal de desarrollo." },
      { name: "Figma", img: html, description: "Diseño UI/UX y prototipado." },
      { name: "Postman", img: html, description: "Pruebas de API y endpoints." },
      { name: "Node.js", img: html, description: "Entorno de ejecución de JavaScript en servidor." },
    ],
  },
];

const TechSection: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Tecnologías y habilidades</h2>
        <p className="text-gray-600">
          Experiencia sólida en el stack completo de desarrollo web moderno.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {techCategories.map((category) => (
          <div
            key={category.title}
            className="p-8 rounded-2xl shadow-md hover:shadow-lg transition bg-white"
          >
            <div className="flex flex-col items-center mb-6">
              <span className="text-3xl mb-2">{category.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-800">{category.title}</h3>
            </div>

            <div className="grid grid-cols-2 gap-6 justify-items-center">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex flex-col items-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 transition-transform group-hover:scale-110"
                  />
                  <p className="mt-2 text-sm text-gray-700">{item.name}</p>

                  <div className="absolute bottom-[-2.5rem] opacity-0 group-hover:opacity-100 transition bg-gray-800 text-white text-xs px-2 py-1 rounded text-center w-max max-w-[8rem]">
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
