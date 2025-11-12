'use client';

import { useEffect, useState } from 'react';

type FriendType = {
  이름: string;
  나이: string;
  
  성별: string;
};
export default function Home() {
  // 친구 목록과 새 친구 정보를 저장할 변수
  const [friends, isFriends] = useState<FriendType[]>([]);
  const [newFriend, isNewFriend] = useState<FriendType>({
    이름: '',
    나이: '',
    성별: '남자',
  });

  useEffect(() => {
    const resetFriend = () => {
      const friends = localStorage.getItem('friends');

      if (friends) {
        isFriends(JSON.parse(friends));
      }
    };
    resetFriend();
  }, []);

  // 친구를 추가하는 함수
  function addFriend() {
    if (newFriend.이름 === '' || newFriend.나이 === '') {
      return alert('이름과 나이를 입력해주세요.');
    }

    const newFriendList = [...friends, newFriend];
    isFriends(newFriendList);

    localStorage.setItem('friends', JSON.stringify(newFriendList));

    // 입력창 초기화
    isNewFriend({
      이름: '',
      나이: '',
      성별: '남자',
    });
  }

  return (
    <>
      친구 목록 앱 만들기 👭👬
      <div className="flex min-h-screen flex-col items-center bg-blue-100 p-8">
        <h1 className="mb-6 text-3xl font-bold text-blue-800">내 친구 목록</h1>

        {/* 친구 추가 폼 */}
        <div className="mb-8 flex w-full max-w-md flex-col gap-4">
          <input
            type="text"
            value={newFriend.이름}
            onChange={(e) =>
              isNewFriend({ ...newFriend, 이름: e.target.value })
            }
            placeholder="친구 이름 입력"
            className="rounded border border-blue-300 px-4 py-2"
          />
          <input
            type="number"
            value={newFriend.나이}
            onChange={(e) =>
              isNewFriend({ ...newFriend, 나이: e.target.value })
            }
            placeholder="나이 입력"
            className="rounded border border-blue-300 px-4 py-2"
          />
          <select
            value={newFriend.성별}
            onChange={(e) =>
              isNewFriend({ ...newFriend, 성별: e.target.value })
            }
            className="rounded border border-blue-300 px-4 py-2"
          >
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
          <button
            onClick={addFriend}
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            친구 추가
          </button>
        </div>

        {/* 친구 목록 */}
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl text-blue-600">
            친구들 ({friends.length}명)
          </h2>

          {friends.length === 0 ? (
            <p className="text-gray-500">
              아직 친구가 없어요. 친구를 추가해보세요!
            </p>
          ) : (
            <ul className="space-y-2">
              {friends.map((친구, 번호) => (
                <li
                  key={번호}
                  className="flex items-center justify-between rounded bg-blue-50 p-3"
                >
                  <span className="font-medium text-blue-700">
                    👫 {친구.이름} ({친구.나이}세, {친구.성별})
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
