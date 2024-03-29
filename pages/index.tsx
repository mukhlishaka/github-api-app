import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import { Header } from "../components/Header";
import UserList from "../components/UserList";
import { SearchRes } from "../types/SearchRes";
import { User } from "../types/User";

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [result, setResult] = useState<SearchRes | null>(null)

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setIsLoading(true)
      fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
        .then(res => res.json())
        .then(data => {
          const users: User[] = data.items
          const searchRes: SearchRes = {
            search: search,
            users: users
          }
          setResult(searchRes)
        }).finally(() => {
          setIsLoading(false)
        })
    }
  }
  return (
    <div className="space-y-5">
      <Head>
        <title>Search Users App</title>
      </Head>
      <Header />
      <form className="flex place-self-center space-x-3" onSubmit={onSearchSubmit}>
        <Form value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit" isLoading={isLoading} />
      </form>
      {result && <UserList result={result} />}
    </div>
  )
}