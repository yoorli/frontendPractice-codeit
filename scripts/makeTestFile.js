/* eslint-disable @typescript-eslint/no-require-imports */

const fs = require("fs");
const path = require("path");

const dayFolder = process.argv[2]; // 예: "day05"

if (!dayFolder) {
  console.error('day 폴더 이름을 인자로 넘겨주세요. 예: npm run make:test day05');
  process.exit(1);
}

const appDir = path.join(__dirname, '..', 'src', 'app');
const dayDir = path.join(appDir, dayFolder);

// 1) test/page.tsx 생성
const testDir = path.join(dayDir, 'test');
const testPagePath = path.join(testDir, 'page.tsx');

if (!fs.existsSync(testDir)) {
  fs.mkdirSync(testDir, { recursive: true });
}

if (!fs.existsSync(testPagePath)) {
  const testPageCode = `
    export default function TestPage() {
      return (
        <div>
          Test Page (${dayFolder})
        </div>
      );
    }
    `;
  fs.writeFileSync(testPagePath, testPageCode, 'utf8');
  console.log(`생성: ${path.relative(process.cwd(), testPagePath)}`);
} else {
  console.log('이미 test/page.tsx가 존재합니다.');
}

// 2) day 페이지에 test 버튼 코드 삽입
const dayPagePath = path.join(dayDir, 'index.tsx');

if (!fs.existsSync(dayPagePath)) {
  console.error(`Day 페이지 파일이 없습니다: ${dayPagePath}`);
  process.exit(1);
}

let source = fs.readFileSync(dayPagePath, 'utf8');

// 기준이 되는 주석
const marker = '{/* test button */}';

if (!source.includes(marker)) {
  console.error('Day 파일에서 "{/* test button */}" 주석을 찾을 수 없습니다.');
  process.exit(1);
}

// 이미 자동 생성된 블록이 있는지 체크
if (source.includes('AUTO-GENERATED TEST BUTTON START')) {
  console.log('이미 test 버튼이 생성되어 있습니다.');
} else {
  const buttonBlock = `<Link href="/${dayFolder}/test">
                          <button type="button" className="btn-class">
                            test
                          </button>
                        </Link>
                        ${marker}`;

  // 기존 주석을 버튼 블록 + 주석으로 교체
  source = source.replace(marker, buttonBlock);
  fs.writeFileSync(dayPagePath, source, 'utf8');
  console.log('Day 페이지에 test 버튼 코드를 추가했습니다.');
}
