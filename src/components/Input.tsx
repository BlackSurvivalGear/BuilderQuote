import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full text-left">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-textSecondary mb-2">
          {label}
        </label>
      )}
      <div className="relative rounded-lg shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-textSecondary">
            {icon}
          </div>
        )}
        <input
          id={id}
          className={`
            block w-full rounded-lg bg-bgDark border border-borderDark/80 text-white
            placeholder-textSecondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
            transition-all duration-200 text-sm py-2.5
            ${icon ? 'pl-11' : 'pl-4'}
            ${error ? 'border-danger focus:ring-danger/40 focus:border-danger' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-danger font-medium flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-danger inline-block" /> {error}
        </p>
      )}
    </div>
  );
};

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  className = '',
  id,
  ...props
}) => {
  return (
    <div className="w-full text-left">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-textSecondary mb-2">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`
          block w-full rounded-lg bg-bgDark border border-borderDark/80 text-white
          placeholder-textSecondary/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all duration-200 text-sm px-4 py-3 min-h-[120px] resize-y
          ${error ? 'border-danger focus:ring-danger/40 focus:border-danger' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-xs text-danger font-medium flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-danger inline-block" /> {error}
        </p>
      )}
    </div>
  );
};
export default Input;
