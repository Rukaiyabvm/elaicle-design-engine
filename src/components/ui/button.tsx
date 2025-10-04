import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover hover:scale-105 rounded-full px-8 py-4 text-sm",
        secondary: "bg-white text-primary border-2 border-white hover:bg-white/90 hover:scale-105 rounded-full px-8 py-4 text-sm",
        ghost: "bg-transparent text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/10 hover:scale-105 rounded-full px-8 py-4 text-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-full px-8 py-4 text-sm",
        outline: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 rounded-full px-8 py-4 text-sm",
        link: "text-primary underline-offset-4 hover:underline p-0",
      },
      size: {
        default: "h-12",
        sm: "h-10 px-6 py-3 text-xs",
        lg: "h-14 px-10 py-4 text-base",
        icon: "h-12 w-12 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
