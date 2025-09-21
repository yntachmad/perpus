import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

export default function NavLink({active = false, url = '#', title,icon:icons,...props})
{
    return (
        <Link
        {...props}
        href={url}
        className={cn(
            active
            ? "bg-gradient-to-t from-orange-400 via-orange-600 to-orange-500 font-semibold text-white hover:text-white"
            : 'text-muted-forground text-orange-500',
            'flex items-center gap-3 rounded-lg font-medium transition-all',
        )}
        >

        <icon className='w-4 h-4'/>
        {title}

        </Link>
    );

}


// export default function NavLink({
//     active = false,
//     className = '',
//     children,
//     ...props
// }) {
//     return (
//         <Link
//             {...props}
//             className={
//                 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
//                 (active
//                     ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
//                     : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700') +
//                 className
//             }
//         >
//             {children}
//         </Link>
//     );
// }
