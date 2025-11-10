import Link from "next/link";

const Day2 = () => {
  const practices = [
    { href: "/day2/prac1", label: "Practice 1" },
    { href: "/day2/prac2", label: "Practice 2" },
    { href: "/day2/prac3", label: "Practice 3" },
    { href: "/day2/prac4", label: "Practice 4" },
    { href: "/day2/prac5", label: "Practice 5" },
    { href: "/day2/prac6", label: "Practice 6" },
    { href: "/day2/prac7", label: "Practice 7" },
    { href: "/day2/prac8", label: "Practice 8" },
    { href: "/day2/prac9", label: "Practice 9" },
    { href: "/day2/prac10", label: "Practice 10" },
    { href: "/day2/prac11", label: "Practice 11" },
    { href: "/day2/prac12", label: "Practice 12" },
    { href: "/day2/prac13", label: "Practice 13" },
    { href: "/day2/prac14", label: "Practice 14" },
    { href: "/day2/prac15", label: "Practice 15" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      Day2
      <Link href="/day2/test">
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
