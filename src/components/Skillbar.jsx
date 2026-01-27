import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Used Resource 3

const SkillBar = ({ skills = [] }) => {
  return (
    <div className="border border-border p-4 w-full">
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
      <span className="block text-sm os-text font-semibold mb-1">
        {name}
      </span>
      <div className="w-full bg-black/40 h-2 overflow-hidden border border-border">
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={controls}
          className="h-full bg-[var(--os-accent)] relative"
        >
          <span className="absolute -top-6 right-0 text-xs font-semibold os-text px-2 py-0.5 border border-border bg-black/60">
            {level}%
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillBar;