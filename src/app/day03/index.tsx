import Link from 'next/link';

const Day = () => {
  const practices = [
    // AUTO-GENERATED PRAC LINKS START
    { href: '/day03/prac01', label: 'Practice 1' },
    { href: "/day03/prac02", label: "Practice 2" },
{ href: "/day03/prac03", label: "Practice 3" },
{ href: "/day03/prac04", label: "Practice 4" },
{ href: "/day03/prac05", label: "Practice 5" },
{ href: "/day03/prac06", label: "Practice 6" },
{ href: "/day03/prac07", label: "Practice 7" },
{ href: "/day03/prac08", label: "Practice 8" },
{ href: "/day03/prac09", label: "Practice 9" },
{ href: "/day03/prac10", label: "Practice 10" },
{ href: "/day03/prac11", label: "Practice 11" },
// AUTO-GENERATED PRAC LINKS END
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day1
      <Link href="/day03/test">
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
