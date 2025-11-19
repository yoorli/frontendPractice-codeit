import { expect, test } from '@playwright/test';

test('홈페이지가 올바르게 로드됩니다', async ({ page }) => {
  // 홈페이지 방문
  await page.goto('http://localhost:3000/day10/prac02');

  // 제목이 보이는지 확인
  const title = page.locator('h1', { hasText: '시나리오 테스트' });

  await expect(title).toBeVisible();
  await expect(title).toHaveText('시나리오 테스트');
});
