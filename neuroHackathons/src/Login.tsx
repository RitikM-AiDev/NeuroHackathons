import { useNavigate} from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const login_func = async(e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
        try{
            e.preventDefault();
            // const response = await fetch("http://localhost:3000/login", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({ email, password })
            // });

            // if (!response.ok) {
            //     throw new Error("Login failed");
            // }

            // const data = await response.json();
            // console.log("Login successful:", data);
            // navigate("/dashboard",{ replace: true });

        } catch (error) {
            console.error("Error during login:", error);
        }

    }
    return (

        <div className="fixed inset-0 flex min-h-screen flex-col items-center justify-center overflow-y-auto bg-[#eff6ff] bg-[radial-gradient(circle_at_8%_10%,rgba(125,211,252,0.72),transparent_28%),radial-gradient(circle_at_92%_88%,rgba(196,181,253,0.70),transparent_30%),linear-gradient(135deg,#f8fbff_0%,#eef2ff_48%,#faf5ff_100%)] px-5 py-10 font-sans text-slate-800 dark:bg-[#07111f] dark:bg-[radial-gradient(circle_at_8%_10%,rgba(14,116,144,0.42),transparent_28%),radial-gradient(circle_at_92%_88%,rgba(79,70,229,0.40),transparent_30%),linear-gradient(135deg,#07111f_0%,#111b36_50%,#160e2b_100%)] dark:text-slate-100">
            <h1 className="relative w-full max-w-md rounded-t-3xl border border-white/70 bg-white/45 p-8 text-3xl font-bold tracking-tight text-slate-800 shadow-[0_28px_80px_-24px_rgba(30,64,175,0.38)] backdrop-blur-2xl backdrop-saturate-150 after:mt-4 after:block after:h-1 after:w-12 after:rounded-full after:bg-gradient-to-r after:from-sky-400 after:to-violet-500 dark:border-white/15 dark:bg-white/10 dark:text-white dark:shadow-[0_28px_80px_-24px_rgba(0,0,0,0.8)] sm:p-10">Login</h1>
            <form className="relative grid w-full max-w-md rounded-b-3xl border-x border-b border-white/70 bg-white/45 px-8 pb-8 pt-6 shadow-[0_28px_80px_-24px_rgba(30,64,175,0.38)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-white/10 dark:shadow-[0_28px_80px_-24px_rgba(0,0,0,0.8)] sm:px-10 sm:pb-10" onSubmit={(e)=>{login_func(e, e.target.email.value, e.target.password.value)}}>
                <label className="mb-2 text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-200" htmlFor="email">Email:</label>
                <input className="w-full rounded-xl border border-white/80 bg-white/60 px-4 py-3 text-slate-800 outline-none shadow-sm transition placeholder:text-slate-400 hover:border-sky-300 hover:bg-white/80 focus:border-sky-400 focus:bg-white/90 focus:ring-4 focus:ring-sky-300/25 dark:border-white/10 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:border-cyan-300/50 dark:hover:bg-slate-950/45 dark:focus:border-cyan-300 dark:focus:bg-slate-950/55 dark:focus:ring-cyan-300/15" type="email" id="email" name="email" onChange={(e) => console.log(e.target.value)} required />
                <br className="hidden" />
                <label className="mb-2 mt-5 text-sm font-semibold tracking-wide text-slate-600 dark:text-slate-200" htmlFor="password">Password:</label>
                <input className="w-full rounded-xl border border-white/80 bg-white/60 px-4 py-3 text-slate-800 outline-none shadow-sm transition placeholder:text-slate-400 hover:border-sky-300 hover:bg-white/80 focus:border-sky-400 focus:bg-white/90 focus:ring-4 focus:ring-sky-300/25 dark:border-white/10 dark:bg-slate-950/30 dark:text-slate-100 dark:hover:border-cyan-300/50 dark:hover:bg-slate-950/45 dark:focus:border-cyan-300 dark:focus:bg-slate-950/55 dark:focus:ring-cyan-300/15" type="password" id="password" name="password" onChange={(e) => console.log(e.target.value)} required />
                <br className="hidden" />
                <button className="mt-7 w-full rounded-xl bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-200 hover:-translate-y-0.5 hover:from-sky-500 hover:via-blue-600 hover:to-violet-600 hover:shadow-xl hover:shadow-blue-500/35 focus:outline-none focus:ring-4 focus:ring-sky-300/35 active:translate-y-0 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500 dark:text-slate-950 dark:shadow-indigo-500/30 dark:hover:from-cyan-300 dark:hover:via-blue-400 dark:hover:to-indigo-400" type="submit" >Login</button>
            </form>
        </div>
    )

}
export default Login;
