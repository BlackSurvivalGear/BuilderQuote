import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  ...props
}) => {
  const baseStyle = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bgDark disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] hover:-translate-y-0.5";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5 rounded-xl",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-lg shadow-primary/20 hover:shadow-primary/30",
    secondary: "bg-secondary text-white hover:bg-secondary-hover border border-borderDark focus:ring-secondary",
    accent: "bg-accent text-bgDark hover:bg-accent-hover focus:ring-accent shadow-lg shadow-accent/15 hover:shadow-accent/25",
    outline: "bg-transparent text-white border border-borderDark hover:border-textSecondary/40 hover:bg-white/5 focus:ring-textSecondary",
    ghost: "bg-transparent text-textSecondary hover:text-white hover:bg-white/5 focus:ring-white/10",
    danger: "bg-danger text-white hover:bg-red-600 focus:ring-danger shadow-lg shadow-danger/20",
  };

  return (
    <button
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!isLoading && icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
    </button>
  );
};
export default Button;
