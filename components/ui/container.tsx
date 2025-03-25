import { cn } from "@/lib/utils"; // Utility function to conditionally join class names
import { FC } from "react"; // Import FC (Function Component) type from React

// Define the types for the component props
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

// Functional component for a responsive container wrapper
export const Container: FC<ContainerProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-4 md:px-6 lg:px-8", // Responsive max width and padding
        className // Allow custom class names via props
      )}
      {...props} // Spread any additional props (e.g., `id`, `onClick`)
    >
      {children} {/* Render child elements inside the container */}
    </div>
  );
};
