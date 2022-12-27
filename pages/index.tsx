import Button from "../components/Button";
import Form from "../components/Form";
import { Header } from "../components/Header";
import UserList from "../components/UserList";

export default function Home() {
  return (
    <div className="space-y-5">
      <Header />
      <form className="flex place-self-center space-x-3">
        <Form />
        <Button type="submit" isLoading={false} />
      </form>
      <UserList />
    </div>
  )
}