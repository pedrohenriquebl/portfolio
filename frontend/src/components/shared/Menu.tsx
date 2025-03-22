'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
    const path = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={path === '/'}>
                Inicio
            </MenuItem>            
            <MenuItem href="/projeto/1" selecionado={path.startsWith('/projeto/1')}>
                Projetos
            </MenuItem>
            <MenuItem href="https://wa.me/5515981015800" 
                novaAba={true} 
                selecionado={false}
            >
                Contato
            </MenuItem>
        </nav>
    )
}

function MenuItem(props: {
    href: string, 
    children: React.ReactNode,
    selecionado: boolean,
    novaAba?: boolean
}) {
    return (
        <div>
            <Link href={props.href} target={props.novaAba ? '_blank' : '_self'}>
                <span
                    className={`
                        flex items-center gap-2 text-sm border-red-600 hover:text-white
                        ${props.selecionado ? 'border-b-4 text-white' : 'text-zinc-300'}
                    `}
                >
                    {props.children}
                </span>
            </Link>
        </div>
    )
}