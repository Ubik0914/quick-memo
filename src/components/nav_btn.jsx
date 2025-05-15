import Link from "next/link"


const NavBtn = ({ url, path }) => {

    return (

        <div className="flex justify-center items-center">
            <Link href={url} className="h-12 w-15 rounded-full hover:bg-slate-400 bg-slate-200 flex justify-center items-center transition-all duration-500">
                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 fill-slate-300">
                    <path stroke-linecap="round" stroke-linejoin="round" d={path} />
                </svg>

            </Link>
        </div>

    )

}

export default NavBtn
