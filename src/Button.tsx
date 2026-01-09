import React from "react";
import { Button as HeroUIButton, ButtonProps } from "@heroui/react";

export const BrokenButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { onClick, children, ...rest } = props;

    return (
      <HeroUIButton ref={ref} {...rest}>
        {children}
      </HeroUIButton>
    );
  }
);

BrokenButton.displayName = "BrokenButton";

export const WorkingButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <HeroUIButton ref={ref} {...rest}>
        {children}
      </HeroUIButton>
    );
  }
);

WorkingButton.displayName = "WorkingButton";
