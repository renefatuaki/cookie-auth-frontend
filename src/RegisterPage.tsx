import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const nav = useNavigate();

  function submitRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios.post('/api/user/register', { username, password }).then(() => nav('/login'));
  }

  return (
    <form onSubmit={submitRegister}>
      <input value={username} type="text" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
      <input value={password} type="password" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
      <button>Register</button>
    </form>
  );
}
