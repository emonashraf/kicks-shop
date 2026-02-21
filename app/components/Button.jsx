'use client';
import Link from 'next/link';

const Button = ({
    text = '',
    children,
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
        md: 'px-3 sm:px-4 md:px-5 lg:px-6 xl:px-8 py-3.5 text-sm ',
        lg: 'px-10 py-4 text-lg',
    };

    const variants = {
        primary: 'bg-primary text-white hover:bg-primary/80',
        darkGray: 'bg-[#232321] text-white hover:bg-[#111111]',
        outline: 'border-2 border-primary text-primary hover:text-white',
    };

    const sharedClasses = `
    inline-flex items-center justify-center gap-2
    rounded-lg font-bold transition-all duration-300 
    active:scale-95 shadow-lg 
    ${sizeClasses[size]} 
    ${variants[variant]} 
    ${className}
  `;

    const content = (
        <span className="flex items-center gap-2">
            {children ?? text}
            {icon}
        </span>
    );

    if (href) {
        return (
            <Link
                href={href}
                onClick={onClick}   // ✅ added
                className={sharedClasses}
            >
                {content}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={sharedClasses}>
            {content}
        </button>
    );
};

export default Button;