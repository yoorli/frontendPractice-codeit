import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';

import { Input } from '.';

test('Input 컴포넌트 미입력 시 X 버튼이 보이지 않아야 한다.', () => {
  render(<Input onChange={jest.fn()} onDelete={jest.fn()} />);

  const input = screen.getByRole('textbox');
  // 없으면 null 반환
  const deleteButton = screen.queryByRole('button', { name: '입력값 지우기' });

  // 입력값이 없고,
  expect(input).toHaveValue('');
  // X 버튼이 보이지 않아야 한다.
  expect(deleteButton).not.toBeInTheDocument();
});

test('Input 컴포넌트에 입력값이 있을 때 X 버튼이 보이는지 확인한다.', () => {
  render(<Input value="입력값" onChange={jest.fn()} onDelete={jest.fn()} />);

  const input = screen.getByRole('textbox');
  // 없으면 오류
  const deleteButton = screen.getByRole('button', { name: '입력값 지우기' });

  // 입력값이 있고,
  expect(input).toHaveValue('입력값');
  // X 버튼이 보인다.
  expect(deleteButton).toBeInTheDocument();
});

// est.fn()은 지우는 함수가 아니라 가짜함수이기 때문에 오류가 남
// 지우는 기능은 Input 컴포넌트 자체만으로 테스트할 수 없음
// 해당 함수가 호출이 되는지까지만 확인
// test('X 버튼 클릭 시 입역값이 지워지는지 테스트', () => {
//   render(<Input value="입력값" onChange={jest.fn()} onDelete={jest.fn()} />);
//   const input = screen.getByRole('textbox');
//   const deleteButton = screen.getByRole('button', { name: '입력값 지우기' });

//   fireEvent.click(deleteButton);

//   expect(input).toHaveValue('');
//   expect(deleteButton).not.toBeInTheDocument();
// });

test('X 버튼 클릭 시 onDelete props에 전달된 함수가 호출되는지 확인한다.', () => {
  const onDelete = jest.fn();
  render(<Input value="입력값" onChange={jest.fn()} onDelete={onDelete} />);

  const deleteButton = screen.getByRole('button', { name: '입력값 지우기' });

  // X 버튼 클릭
  fireEvent.click(deleteButton);

  // onDelete 함수가 호출된다.
  expect(onDelete).toHaveBeenCalled();
});

// 삭제를 테스트하고 싶으면 아래 방법 사용
test('X 버튼 클릭 시 입력값이 지워지는지 확인한다', () => {
  // 삭제 기능을 테스트하기 위해 Wrapper 컴포넌트를 생성
  const Wrapper = () => {
    const [value, setValue] = useState('입력값');
    const handleDelete = () => setValue('');

    return (
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onDelete={handleDelete}
      />
    );
  };
  render(<Wrapper />);

  const input = screen.getByRole('textbox');
  const deleteButton = screen.getByRole('button', { name: '입력값 지우기' });

  // X 버튼 클릭
  fireEvent.click(deleteButton);

  // 입력값이 지워지고,
  expect(input).toHaveValue('');
  // X 버튼이 사라진다.
  expect(deleteButton).not.toBeInTheDocument();
});

test('Input 컴포넌트 에러 발생 시 에러 메세지가 보이는지 확인한다', () => {
  render(
    <Input
      isError={true}
      errorMessage="입력값에 문제가 있습니다"
      onChange={jest.fn()}
      onDelete={jest.fn()}
    />,
  );

  const errorMessage = screen.getByText('입력값에 문제가 있습니다');

  // 에러 메세지가 보인다.
  expect(errorMessage).toBeInTheDocument();
});
