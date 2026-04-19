import { login, signup } from "./actions";

export default function LoginPage() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" required/>
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required/>
            <button formAction={login}> Log In</button>
            <button formAction={signup}>Sign Up</button>
        </form>
    )
}