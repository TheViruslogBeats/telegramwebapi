interface initDataUnsafe {
  query_id: string,
  user: {
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    language_code: string,
  }
  auth_date: string,
  hash: string
}

export type userData = initDataUnsafe | undefined

