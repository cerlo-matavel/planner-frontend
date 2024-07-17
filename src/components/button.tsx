import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants"

const buttonVariants = tv({
    // todas as propriedades iguais
    base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2',

    //todas as propriedades que variam
    variants: {
        variant:{
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary:'bg-zinc-800 text-zinc-200  hover:bg-zinc-700'
        },
        size: {
            default: "py-2",
            full: "w-full h-11"
        }
    
    },
    //Valor dado as variantes, caso nada seja explicitamente declarado
    defaultVariants:{
        variant: "primary",
        size: "default",
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
    // React node é um datatype que me permite passar qualquer componente, seja este texto ou outra coisa
    children: ReactNode
    variant: "primary" | "secondary"
}
export function Button({children, variant, size,  ...props} : ButtonProps) {
    return (
        <button {...props}
            className={buttonVariants({variant, size})}>
            {children}
        </button>
    )
}