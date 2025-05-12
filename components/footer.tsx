import Link from "next/link";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


export default function Footer() {
    return (
        <div className="min-h-[55vh] flex">
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-8 md:px-16 lg:px-24 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="flex flex-col justify-between col-span-2">
                        <div>
                            <h1 className="text-2xl font-semibold tracking-tight">MERYLISH</h1>
                            <span className="flex flex-row items-center gap-3 mt-6">
                                <Link href="/"><FacebookIcon /></Link>
                                <Link href="/"><InstagramIcon /></Link>
                                <Link href="/"><WhatsAppIcon /></Link>
                            </span>
                        </div>
                        <div className="text-muted-foreground text-sm">
                            <span>Merylish Luxury Fashion</span><br />
                            <span>123 Fashion Avenue Suite 567</span> <br />
                            <span>Accra, Ghana</span> <br /><br />
                            <span className="mt-10">
                                © 2025 Merylish Luxury Fashion. All rights reserved.
                            </span>
                        </div>
                    </div>
                    <div className="md:flex hidden flex-col gap-3 text-sm">
                        <Link href="/">Shop</Link>
                        <Link href="/">About</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}