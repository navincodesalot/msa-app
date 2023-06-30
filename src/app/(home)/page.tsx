"use client"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const submitForm = async (event: any) => {
    event.preventDefault(); // Stop reload
    let formData = {
      userchoice: event.target.userchoice.value
    }
    const JSONdata = JSON.stringify(formData)
    const endpoint = '/api/user-choice'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const res = await fetch(endpoint, options);
    const data = await res.json();
    if (data.choice === "admin") {
      router.push('/admin')
    }
    else if (data.choice === "reserve") {
      //pass
    }
  }

  return (
    <>
      <h1>Home</h1>
      <p>Use the select box to choose whether to make a reservation or log in as administrator</p>
      <form onSubmit={submitForm}>
        <label>Choose Menu Option</label>
        <select id="userchoice">
          <option value="admin">Admin Login</option>
          <option value="reserve">Reserve a Seat</option>
        </select>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}