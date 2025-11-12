// 쿠키 추가하는 함수 만들기

// 쿠키 옵션을 위한 인터페이스 정의
interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  'max-age'?: number;
  secure?: boolean;
  samesite?: 'Strict' | 'Lax' | 'None';
  [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  // 1. 옵션을 설정합니다.
  options = {
    // 기본적으로 전체 사이트에서 접근 가능하게 만듭니다.
    path: '/',
    // path를 수정하거나 다른 옵션들을 넣어줍니다.
    ...options,
  };

  // 쿠키 문자열 만들기
  // ex) cookieString = "key=value"
  let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  // 옵션 추가하기
  for (const optionKey in options) {
    // 옵션의 값을 추출합니다.
    const optionValue = options[optionKey];
    // 예를 들어, null과 undefined 같은 값이 들어간다면 저장하지 않고 넘어간다.
    if (
      optionValue === undefined ||
      optionValue === null ||
      optionValue === false
    )
      continue;

    // Date 객체 처리
    let finalValue = optionValue;
    if (optionValue instanceof Date) {
      finalValue = optionValue.toUTCString();
    }

    // 세미콜론(;)을 먼저 추가한 후 뒤에 옵션의 key를 추가합니다.
    // ex) cookieString = "key=value; path"
    cookieString += `; ${optionKey}`;

    // 옵션의 값이 true가 아니라면 '=옵션값'을 추가합니다.
    // ex) cookieString = "key=value; path=/checkout"
    if (finalValue !== true) {
      cookieString += `=${finalValue}`;
    }
  }

  // 쿠키 설정하기
  document.cookie = cookieString;
}

export function isCookieExists(name: string): boolean {
  const encodedName = encodeURIComponent(name);
  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(encodedName + '='))
    ? true
    : false;
}

export function deleteCookie(name: string) {
  document.cookie = encodeURIComponent(name) + '=; Max-age=0';
}

// 문제 1) 특정 쿠키의 값을 찾는 함수 만들기
// 쿠키의 이름을 파라미터로 받아서 쿠키가 있으면 그 값을 리턴, 없다면 undefined를 리턴하는 getCookieValue 함수를 브라우저 콘솔에서 완성해보세요.
// 1. 쿠키 이름을 인코딩한다.
// 2. `document.cookie`를 '; '로 분리하여 쿠키 배열을 만든다.
// 3. 배열에서 존재하는지 찾기
// 4. 있으면 디코딩해서 값 변환
// 5. 없으면 `undefined` 반환

export function getCookieValue(name: string) {
  const encodedName = encodeURIComponent(name);
  const search = encodedName + '=';

  const cookie = document.cookie
    .split(';')
    .find((cookie) => cookie.startsWith(search));

  if (!cookie) return undefined;

  const valuePart = cookie.substring(search.length);
  return decodeURIComponent(valuePart);
}
