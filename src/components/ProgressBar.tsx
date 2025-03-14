
import { motion } from 'framer-motion';

interface ProgressBarProps {
  skillName: string;
  percentage: number;
}

const ProgressBar = ({ skillName, percentage }: ProgressBarProps) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-sm font-medium">{skillName}</h4>
        <span className="text-sm text-dboy-pink">{percentage}%</span>
      </div>
      <div className="h-2 bg-dboy-black/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-dboy-pink rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
