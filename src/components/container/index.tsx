import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="root">
      <div className="flex-wrapper">{children}</div>
    </div>
  );
};

export default Container;
