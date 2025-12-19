import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Used Resource 3

const SkillBar = ({ skills = [] }) => {
  return (
    <div className="bg-background text-white rounded-lg p-6 w-full shadow-md">
      {skills.map((skill, idx) => (
        <Skill
          key={skill.name}
          name={skill.name}
          level={skill.level}
          delay={idx * 0.1}
        />
      ))}
    </div>
  );
};

const Skill = ({ name, level, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        width: `${level}%`,
        opacity: 1,
        transition: { duration: 1, delay },
      });
    }
  }, [inView, controls, level, delay]);

  return (
    <div ref={ref} className="mb-6">
      <span className="block text-sm text-primary text-glow font-semibold mb-1">
        {name}
      </span>
      <div className="w-full bg-background rounded h-2 overflow-hidden border border-border">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={controls}
          className="h-full bg-primary rounded relative"
        >
          <span className="absolute -top-6 right-0 text-xs font-semibold text-black px-2 py-0.5 rounded shadow-sm bg-white">
            {level}%
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;