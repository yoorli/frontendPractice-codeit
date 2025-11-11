import Link from 'next/link';

const Day2 = () => {
  const practices = [
    { href: '/day02/prac01', label: 'Practice 1' },
    { href: '/day02/prac02', label: 'Practice 2' },
    { href: '/day02/prac03', label: 'Practice 3' },
    { href: '/day02/prac04', label: 'Practice 4' },
    { href: '/day02/prac05', label: 'Practice 5' },
    { href: '/day02/prac06', label: 'Practice 6' },
    { href: '/day02/prac07', label: 'Practice 7' },
    { href: '/day02/prac08', label: 'Practice 8' },
    { href: '/day02/prac09', label: 'Practice 9' },
    { href: '/day02/prac010', label: 'Practice 10' },
    { href: '/day02/prac011', label: 'Practice 11' },
    { href: '/day02/prac012', label: 'Practice 12' },
    { href: '/day02/prac013', label: 'Practice 13' },
    { href: '/day02/prac014', label: 'Practice 14' },
    { href: '/day02/prac015', label: 'Practice 15' },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day2
      <Link href="/day02/test">
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

export default Day2;
