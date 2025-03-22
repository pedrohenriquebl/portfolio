import Image from "next/image";

export default function MiniCV () {
    return (
        <div className="flex flex-1 flex-col xl:flex-row lg-items-center bg-black border border-zinc-800 rounded-2xl px-6 pt-6 gap-4">
            <div className="relative min-w-72 h-64 self-center">
                <Image src="/perfil.jpeg" alt="Principal" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="flex flex-col gap-5 self-center py-6">
                <div className="flex flex-col items-start">
                    <span className="
                            bg-gradient-to-r from-red-500 via-white to-white
                            text-transparent bg-clip-text text-2xl font-bold
                        "
                    >Pedro Barcellos</span>
                    <span>Web Developer</span>       
                </div>
                <p className="text-sm text-left">Passionate about creating interactive and user-friendly web applications.</p>
            </div>
        </div>
    )
}