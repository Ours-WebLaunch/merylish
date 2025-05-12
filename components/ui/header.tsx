import { AlignJustify } from "lucide-react";
import Link from "next/link";


export default function Header() {
    return (
        <div className="absolute top-0 left-0 w-full z-30">
            <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 py-4 tracking-tight">
                <div>
                    <div className="md:flex hidden items-center gap-4">
                        <Link href="/">
                            Shop
                        </Link>
                        <Link href="/">About</Link>
                    </div>
                    <div className="md:hidden block">
                        <AlignJustify />
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-2xl">MERYLISH</h3>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}