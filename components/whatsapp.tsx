import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';

export default function WhatsApp() {
    return (
        <div className="fixed bottom-20 right-10">
            <Link href="/" className="bg-green-600 rounded-full p-3 flex justify-center items-center">
                <WhatsAppIcon className="text-white" />
            </Link>
        </div>
    )
}