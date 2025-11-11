import clsx from 'clsx';

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
  fullWidth?: boolean;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  type = 'text',
  placeholder = '',
  label,
  error,
  size = 'md',
  variant = 'default',
  fullWidth = false,
  disabled = false,
  onChange,
}: InputProps) => {
  const labelClasses = clsx(
    'block mb-2 font-medium',
    {
      'text-sm': size === 'sm',
      'text-base': size === 'md',
      'text-lg': size === 'lg',
    },
    {
      'text-gray-400': disabled,
      'text-red-600': error,
    },
  );
  const InputClasses = clsx(
    'rounded border focus:outline-none focus:ring-2 transition-all',
    fullWidth ? 'w-full' : 'w-auto',
    {
      'px-2 py-1 text-sm': size === 'sm',
      'px-3 py-2 text-base': size === 'md',
      'px-4 py-3 text-lg': size === 'lg',
    },
    {
      'border-gray-300 focus:border-blue-500 focus:ring-blue-200':
        variant === 'default' && !error,
      'border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-blue-200':
        variant === 'filled' && !error,
      'border-gray-300 bg-transparent focus:border-blue-500 focus:ring-blue-200':
        variant === 'outlined' && !error,
    },
    {
      'border-red-500 focus:border-red-500 focus:ring-red-200': error,
      'bg-gray-100 text-gray-400 cursor-not-allowed': disabled,
    },
  );
  const errorClasses = 'mt-1 text-sm text-red-600';

  return (
    <div>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={InputClasses}
        onChange={onChange}
      />
      {error && <p className={errorClasses}>{error}</p>}
    </div>
  );
};

export default Input;
