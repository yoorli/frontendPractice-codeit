import Link from 'next/link';

const Day = () => {
  const practices = [
    // AUTO-GENERATED PRAC LINKS START
    { href: '/day05/prac01', label: 'Practice 1' },
    { href: '/day05/prac02', label: 'Practice 2' },
    // AUTO-GENERATED PRAC LINKS END
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day1
      <div className="flex gap-4">
        <Link href="/day05/test">
          <button type="button" className="btn-class">
            test
          </button>
        </Link>
        {/* test button */}
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
