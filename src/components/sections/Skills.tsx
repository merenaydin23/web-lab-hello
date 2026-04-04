const skills = [
  { name: "React", level: 90, color: "bg-blue-500" },
  { name: "TypeScript", level: 85, color: "bg-blue-600" },
  { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
  { name: "Node.js", level: 75, color: "bg-green-600" },
  { name: "Git", level: 80, color: "bg-orange-600" },
  { name: "Python", level: 70, color: "bg-yellow-600" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Yetenekler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((skill) => (
            <div key={skill.name} className="group">
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </span>
                <span className="text-gray-500 text-sm font-medium">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${skill.color} transition-all duration-1000 ease-out rounded-full group-hover:scale-x-105 origin-left`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
