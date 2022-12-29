import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import { Header } from "../components/Header";
import UserList from "../components/UserList";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)
  }
  return (
    <div className="space-y-5">
      <Head>
        <title>Search Users App</title>
      </Head>
      <Header />
      <form className="flex place-self-center space-x-3" onSubmit={onSearchSubmit}>
        <Form />
        <Button type="submit" isLoading={isLoading} />
      </form>
      <UserList />
    </div>
  )
}