/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs"); // 'fs' 모듈을 불러옵니다.
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");
const entries = fs.readdirSync(appDir, { withFileTypes: true }); // 디렉터리 목록 읽기
const folders = entries.filter((entry) => entry.isDirectory()); // 디렉터리만 필터링

console.log("폴더 개수:", folders.length);
const baseName = folders.length > 9 ? 'day' : 'day0';
const folderName = baseName + (folders.length + 1) + '';
const targetDir = path.join(appDir, folderName);

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log(`폴더 생성: ${targetDir}`);
}
else {
  console.log(`폴더가 이미 존재합니다: ${targetDir}`);
}

const indexFilePath = path.join(targetDir, "index.tsx");
const indexFileContent =
  `import Link from "next/link";

    const Day = () => {
      const practices = [
          // AUTO-GENERATED PRAC LINKS START
          // AUTO-GENERATED PRAC LINKS END
      ];

      return (
        <div className="flex flex-col items-center justify-center gap-8">
          Day1
          <Link href="/${folderName}/test">
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

      `;

fs.writeFileSync(indexFilePath, indexFileContent);
console.log(`파일 생성: ${indexFilePath}`);