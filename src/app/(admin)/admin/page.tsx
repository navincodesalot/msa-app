"use client"
export default function Home() {
  const submitForm = async (event: any) => {
    event.preventDefault();
    let formData = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    const JSONdata = JSON.stringify(formData)
    const endpoint = '/api/validate-user'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    const res = await fetch(endpoint, options);
    const data = await res.json();
  }

  return (
    <>
      <h1>Administrator Login</h1>
      <form onSubmit={submitForm} method="post">
        <label>Username:</label>
          <input type="text" id="username"/>
        <br/>
        <label>Password:</label>
          <input type="password" id="password"/>
        <button type="submit">Submit</button>
    </form>
    </>
  )
} 