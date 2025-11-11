import clsx from 'clsx';

type CardProps = {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'full';
};

const Card = ({
  children,
  padding = 'md',
  radius = 'md',
  variant = 'default',
}: CardProps) => {
  const cardClasses = clsx(
    'overflow-hidden transition-all max-w-md ',
    {
      'p-0': padding === 'none',
      'p-3': padding === 'sm',
      'p-5': padding === 'md',
      'p-8': padding === 'lg',
    },
    {
      'rounded-none': radius === 'none',
      'rounded-sm': radius === 'sm',
      'rounded-md': radius === 'md',
      'rounded-lg': radius === 'lg',
    },
    {
      'bg-white border border-gray-300': variant === 'default',
      'bg-white border border-gray-500 hover:border-blue-600':
        variant === 'outlined',
      'bg-white shadow-md hover:shadow-lg': variant === 'elevated',
    },
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
