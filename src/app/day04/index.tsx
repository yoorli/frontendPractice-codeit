import Link from 'next/link';

const Day = () => {
  const practices = [
    // AUTO-GENERATED PRAC LINKS START
    { href: '/day04/prac01', label: 'Practice 1' },
    { href: '/day04/prac02', label: 'Practice 2' },
    { href: '/day04/prac03', label: 'Practice 3' },
    { href: '/day04/prac04', label: 'Practice 4' },
    { href: '/day04/prac05', label: 'Practice 5' },
    { href: '/day04/prac06', label: 'Practice 6' },
    // AUTO-GENERATED PRAC LINKS END
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day1
      <div className="flex gap-4">
        <Link href="/day04/test">
          <button type="button" className="btn-class">
            test
          </button>
        </Link>
        <Link href="/day04/test2">
          <button type="button" className="btn-class">
            test2
          </button>
        </Link>
        <Link href="/day04/test3">
          <button type="button" className="btn-class">
            test3
          </button>
        </Link>
        <Link href="/day04/test4">
          <button type="button" className="btn-class">
            test4
          </button>
        </Link>
      </div>
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

export default Day;
