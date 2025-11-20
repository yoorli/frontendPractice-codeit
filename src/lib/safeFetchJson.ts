// 배포용 함수
// response.json()을 호출했는데, 응답이 JSON이 아니라 HTML이라서 생기는 에러 해결
export async function safeFetchJson<T>(
  url: string,
  options?: RequestInit,
  fallback: T = [] as unknown as T, // 기본값을 배열/객체 등으로 넘길 수 있음
): Promise<T> {
  const res = await fetch(url, options);

  // HTTP 에러 처리
  if (!res.ok) {
    console.error('[safeFetchJson] Failed to fetch', url, res.status);
    return fallback;
  }

  // JSON 아닌 응답(HTML 등) 처리
  const contentType = res.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    const text = await res.text();
    console.error(
      '[safeFetchJson] Response is not JSON',
      url,
      'preview:',
      text.slice(0, 200),
    );
    return fallback;
  }

  const data = (await res.json()) as T;
  return data;
}