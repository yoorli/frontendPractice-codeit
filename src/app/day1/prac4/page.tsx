import Card from "@/app/day1/components/Card";

export default function Home() {
  return (
    <div className="space-y-4 p-4">
      <Card variant="default" padding="sm" radius="sm">
        <h2 className="mb-4 text-xl font-bold">제목</h2>
        <p className="text-gray-600">내용</p>
      </Card>
      <Card variant="outlined" padding="md" radius="md">
        <h2 className="mb-4 text-xl font-bold">제목</h2>
        <p className="text-gray-600">내용</p>
      </Card>
      <Card variant="elevated" padding="lg" radius="lg">
        <h2 className="mb-4 text-xl font-bold">제목</h2>
        <p className="text-gray-600">내용</p>
      </Card>
    </div>
  );
}
