import { useState } from "react"

function Login() {
    const [email , setEmail] = useState("jack@exemple.com")
    const [password , setPassword] = useState("qwerty")
    return (
      <main>
        <form>
            <div>
                <label>Email Adress</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
            </div>

               <div>
                <label>Password </label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
      </main>
    )
}

export default Login
