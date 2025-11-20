// 배포용 함수
// response.json()을 호출했는데, 응답이 JSON이 아니라 HTML이라서 생기는 에러 해결
export async function safeFetchJson<T>(
  url: string,
  options?: RequestInit
): Promise<T | null> {
  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      console.error('[safeFetchJson] Failed to fetch', url, res.status);
      return null;
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await res.text();
      console.error(
        '[safeFetchJson] Response is not JSON',
        url,
        'preview:',
        text.slice(0, 200)
      );
      return null;
    }

    const data = (await res.json()) as T;
    return data;
  } catch (e) {
    console.error('[safeFetchJson] Fetch error', url, e);
    return null;
  }
}
