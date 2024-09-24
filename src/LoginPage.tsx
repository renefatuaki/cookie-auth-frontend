import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type LoginPageProps = {
  setUser: (user: string) => void;
};

export default function LoginPage(props: Readonly<LoginPageProps>) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const nav = useNavigate();

  function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    axios
      .post('/api/user/login', undefined, { auth: { username, password } })
      .then((response) => props.setUser(response.data))
      .then(() => nav('/hello'));
  }

  return (
    <form onSubmit={submitLogin}>
      <input value={username} type="text" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
      <input value={password} type="password" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}
