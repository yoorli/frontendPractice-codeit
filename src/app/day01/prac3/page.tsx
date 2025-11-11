// src/app/page.tsx

export default function Home() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-4 text-sm">
      <form className="flex w-full max-w-sm flex-col gap-4">
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="email" className="font-medium">
            이메일
          </label>
          <input
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="password" className="font-medium">
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-lg border border-gray-200 bg-gray-50 p-3 shadow-sm"
            required
          />
        </div>
        <div className="flex gap-2">
          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="h-4 w-4 rounded-sm border border-gray-300 bg-gray-50"
              required
            />
          </div>
          <label htmlFor="remember" className="">
            로그인 상태 유지
          </label>
        </div>
        <button
          type="submit"
          className="rounded-lg bg-blue-700 p-2 font-thin text-white shadow-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
