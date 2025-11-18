import { render, screen } from '@testing-library/react';

import LoginForm from '.';

test('로그인 폼이 올바르게 렌더링 되는지 확인', () => {
  render(<LoginForm />);

  const emailByLabel = screen.getByLabelText('이메일:');

  const emailByPlaceholder = screen.getByPlaceholderText('이메일을 입력하세요');

  const loginButton = screen.getByRole('button', { name: '로그인' });

  const emailByTestId = screen.getByTestId('email-input');

  
  expect(emailByLabel).toBeInTheDocument();
  expect(emailByPlaceholder).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
  expect(emailByTestId).toBeInTheDocument();
  
  expect(emailByLabel).toBe(emailByPlaceholder);
  expect(emailByPlaceholder).toBe(emailByTestId);
  
  expect(emailByPlaceholder).toEqual(emailByTestId);
  expect(emailByPlaceholder).toEqual(emailByTestId);

  // 해당 주석 코드는 오류 발생. 
  // name 속성 값이랑 children text node 랑 같아야 함?
  // const justButton = screen.getByRole('button', { name: '그냥버튼' });
  const justButton2 = screen.getByRole('button', { name: '버튼' });
  // expect(justButton).toBeInTheDocument();
  expect(justButton2).toBeInTheDocument();
});
