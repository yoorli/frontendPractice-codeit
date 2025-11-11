/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs"); // 'fs' 모듈을 불러옵니다.
const path = require("path");

const appDir = path.join(__dirname, "..", "src", "app");
const entries = fs.readdirSync(appDir, { withFileTypes: true }); // 디렉터리 목록 읽기
const folders = entries.filter((entry) => entry.isDirectory()) // 디렉터리만 필터링

var lastFolder;
if (folders.length === 0) {
  console.log("폴더가 없습니다.");
  process.exit(1);
} else {
  lastFolder = folders[folders.length - 1].name;
  console.log("마지막 폴더 이름:", lastFolder);
}

const dayDir = path.join(__dirname, "..", "src", "app", lastFolder);

const countArg = process.argv[2]; // 명령행 인자로 생성할 개수 받기 (없으면 1개)
const makeCount = Number(countArg) || 1;

if (makeCount <= 0) {
  console.log("1 이상의 숫자를 입력하세요.");
  process.exit(1);
}

const appendPracToIndex = (pracNumber) => {
  const indexPath = path.join(dayDir, "index.tsx");

  let content;
  if (fs.existsSync(indexPath)) {
    content = fs.readFileSync(indexPath, "utf8");
  }

  const markerStart = "// AUTO-GENERATED PRAC LINKS START";
  const markerEnd = "// AUTO-GENERATED PRAC LINKS END";

  const startIdx = content.indexOf(markerStart);
  const endIdx = content.indexOf(markerEnd);

  if (startIdx === -1 || endIdx === -1 || endIdx < startIdx) {
    console.error("index.tsx 안에 AUTO-GENERATED 마커가 없습니다.");
    return;
  }

  const insertPos = endIdx;
  const before = content.slice(0, insertPos);
  const pracLabelNumber = Number(pracNumber.slice(-2));

  const between = `{ href: "/${lastFolder}/${pracNumber}", label: "Practice ${pracLabelNumber}" },\n`;
  const after = content.slice(insertPos);

  const newContent = before + between + after;
  fs.writeFileSync(indexPath, newContent, "utf8");
  console.log(`index.tsx 업데이트: ${indexPath} (${pracNumber} 추가)`);
};

const makePracFolders = (count) => {
  const dayEntries = fs.readdirSync(dayDir, { withFileTypes: true }); // 디렉터리 목록 읽기
  const dayFolders = dayEntries.filter((entry) => entry.isDirectory() && entry.name.toLowerCase().startsWith('prac')); // 디렉터리만 필터링

  const baseIndex = dayFolders.length;

  for (let i = 1; i <= count; i += 1) {
    const num = baseIndex + i; // 새로 만들 번호
    const pracNumber = "prac" + String(num).padStart(2, "0");
    const folderName = pracNumber; // 생성할 폴더 이름

    const targetDir = path.join(dayDir, folderName);

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`폴더 생성: ${targetDir}`);
    } else {
      console.log(`폴더가 이미 존재합니다: ${targetDir}`);
    }

    const indexFilePath = path.join(targetDir, "page.tsx");
    const indexFileContent =
      `export default function Home() {
          return (
            <> prac </>
          );
        };  
      `;

    fs.writeFileSync(indexFilePath, indexFileContent);
    console.log(`파일 생성: ${indexFilePath}`);

    appendPracToIndex(pracNumber);
  }
}

makePracFolders(makeCount);