export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            // className={'text-sm text-red-600 ' + className}
            className={cn(
                'text-xs font-medium text-red-600',
                className
            )}
        >
            {message}
        </p>
    ) : null;
}
