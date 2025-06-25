import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,

  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-auto w-full min-w-0 rounded-xs border bg-[#f6f6f6] px-3 py-2 text-lg font-semibold transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-lg",
        "file:text-foreground dark:bg-input/30 border-input file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium ",
        "placeholder:font-medium placeholder:text-gray-400",
        "selection:bg-primary selection:text-primary-foreground",
        "focus-visible:border-ring focus-visible:ring-black focus-visible:ring-[1px] focus-visible:bg-red",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Input };
