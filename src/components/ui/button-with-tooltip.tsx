import React from 'react'
import { Button, ButtonProps } from './button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip'

interface ButtonWithTooltipProps extends ButtonProps {
  children: React.ReactNode
  text: string
}

export default function ButtonWithTooltip({
  children,
  text,
  size,
  variant,
  ...classNames
}: ButtonWithTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button {...classNames} size={size} variant={variant}>
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
