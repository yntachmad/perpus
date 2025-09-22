import { Link } from 'lucide-react';

export default function NavLinkResponsive({ active = false, url = '#', title, icon: icons, ...props }) {
    return (
        <Link
            {...props}
            href={url}
            className={cn(
                active
                    ? 'via-orang-500 font-semobold hover:text:white bg-gradient-to-r from-orange-400 to-orange-500 text-white'
                    : 'text-muted-foreground hover:text-orange-500',
                'flex items-center gap-3 rounded-lg p-2 font-medium transition-all',
            )}
        >
            <Icon className="h-4 w-4" />
            {title}
        </Link>
    );
}
