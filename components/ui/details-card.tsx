"use client"; // Ensures this component runs on the client side

import { itemVariants } from "@/animations"; // Import animation variants
import { DetailsCardProps } from "@/types"; // Import the type definition for props
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Define a functional component with typed props
const DetailsCard: React.FC<DetailsCardProps> = ({ title, description, Icon }) => {
  return (
    <motion.div
      variants={itemVariants} // Apply animation variants for motion effects
      className="flex flex-col items-center text-center space-y-4"
    >
      {/* Icon container with background styling */}
      <div className="p-4 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-8 w-8 text-primary" /> {/* Display the passed icon */}
      </div>

      {/* Title of the feature/card */}
      <h3 className="text-xl font-semibold">{title}</h3>

      {/* Description text with muted foreground color */}
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
};

// Export the component for use in other parts of the application
export default DetailsCard;
