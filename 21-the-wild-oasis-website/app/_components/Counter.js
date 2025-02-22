// using "use client" we can make the compoent client side compoent
"use client"

import { useState } from 'react'

// Client componenst can accept props from other client or server components
export default function Counter({users}) {
  // Client components can have state, and hence are interactive
  const [count, setCount] = useState(0)
  // As it is a client component, this will be logged in the browser console
  // console.log(users)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
