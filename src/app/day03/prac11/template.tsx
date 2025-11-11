// day03/prac11 템플릿 파일
// app/ 으로 이동 시 모든 파일에 적용됨

import PageTransition from './components/PageTransition';

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
