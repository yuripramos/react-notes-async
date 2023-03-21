import type { User } from './types';
import UserDisplay from './components/UserDisplay';

function App() {
  const users: User[] = [
    {
      name: 'John Doe',
      messages: [
        {
          body: 'hey you',
        },
        {
          body: 'whats up',
        },
      ],
    },
  ];

  return (
    <div className="bg-zinc-500 flex-col-l h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {users.map((user, index) => (
        <UserDisplay user={user} key={index} />
      ))}
    </div>
  );
}

export default App;
