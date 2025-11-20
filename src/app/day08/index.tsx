import Link from 'next/link';

const Day = () => {
  const practices = [
    // AUTO-GENERATED PRAC LINKS START
    { href: '/day08/prac01', label: 'Practice 1' },
    { href: '/day08/prac02', label: 'Practice 2' },
    { href: '/day08/prac03', label: 'Practice 3' },
    { href: '/day08/prac04', label: 'Practice 4' },
    { href: '/day08/prac05', label: 'Practice 5' },
    // AUTO-GENERATED PRAC LINKS END
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day1
      <Link href="/day08/test">
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

export default Day;
