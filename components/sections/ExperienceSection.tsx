import CardWrapper from "@/components/wrappers/CardWrapper"
import GradientText from "../GradientText"
import { CardSpotlight } from "../ui/card-spotlight"
import { experiences } from "@/lib/constants"



export default function ExperienceSection() {
  return (
    <section className="mb-6 mt-14 px-4 md:px-0 relative">
      <div className="text-center mb-10">
       <GradientText
        text="My Experience"
        className={'text-4xl md:text-5xl font-bold mb-4'}
       />
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Here's where theory met practice. Real deadlines, real users, and real challenges — shaping 
          me into the full-stack dev I am today.
        </p>
      </div>

      <div className="space-y-6 max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <CardWrapper key={idx} className="text-left text-gray-300">
            <CardSpotlight
                className="bg-black/30"
                color="#c0c0c0"
            >
            <div className="relative p-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <span className="text-sm text-neutral-100">{exp.duration}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{exp.company}</p>
              <p className="text-sm mb-3 leading-relaxed">{exp.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-400">
                {exp.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/5 border border-white/10 px-2 py-1 rounded-md text-neutral-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            </CardSpotlight>
          </CardWrapper>
        ))}
      </div>
    </section>
  )
}