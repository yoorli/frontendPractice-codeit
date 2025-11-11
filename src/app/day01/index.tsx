import Link from 'next/link';

const Day1 = () => {
  const practices = [
    { href: '/day01/prac1', label: 'Practice 1' },
    { href: '/day01/prac2', label: 'Practice 2' },
    { href: '/day01/prac3', label: 'Practice 3' },
    { href: '/day01/prac4', label: 'Practice 4' },
    { href: '/day01/prac5', label: 'Practice 5' },
    { href: '/day01/prac6', label: 'Practice 6' },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day1
      <Link href="/day01/test">
        <button type="button" className="btn-class">
          test
        </button>
      </Link>
      <div className="grid grid-cols-2 gap-4">
        {practices.map((item) => (
          <Link key={item.href} href={item.href}>
            <button type="button" className="btn-class">
              {item.label}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Day1;
