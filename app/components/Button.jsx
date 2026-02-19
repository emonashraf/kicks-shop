'use client';
import Link from 'next/link';

const Button = ({
    text = 'Click Me',
    href = null,
    onClick = null,
    variant = 'primary',
    icon = null,
    size = 'md',
    className = '',
    download = false
}) => {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-3 sm:px-4 mx:px-5 lg:px-6 xl:px-8 py-1.5 md:py-2 lg:py-2.5 xl:py-4 leading-5 text-sm lg:text-base',
        lg: 'px-10 py-4 text-lg',
    };

    const variants = {
        primary: 'bg-primary text-white relative overflow-hidden group hover:bg-primary/80',
        outline: 'border-2 border-primary text-primary hover:text-white relative overflow-hidden group',
    };

    const sharedClasses = `
        inline-flex items-center justify-center rounded-lg font-bold transition-all duration-500 
        active:scale-95 shadow-lg ${sizeClasses[size]} ${variants[variant]} ${className}
    `;

    const buttonContent = (
        <>
            {variant === 'outline' && (
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out -z-0"></span>
            )}

            <span className="relative z-10 flex items-center">
                {text}
                {icon && <span className="ml-2">{icon}</span>}
            </span>
        </>
    );

    if (href) {
        const isExternal = href.startsWith('http') || download;

        return (
            <Link
                href={href}
                className={sharedClasses}
                download={download ? "" : undefined}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
            >
                {buttonContent}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={sharedClasses}>
            {buttonContent}
        </button>
    );
};

export default Button