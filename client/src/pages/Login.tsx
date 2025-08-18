import React, { useState } from "react";
import toast from "react-hot-toast";

function Login() {

  const [credential, setCredential] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success("form submitado")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1e202c]">
      <div className="w-full max-w-md p-8 bg-[#31323e] rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white mb-6">{isLogin ? "Welcome back!" : "Create your account"}</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            {isLogin ?
              <>
                <label className="block text-sm text-gray-300 mb-1">Username or Email</label>
                <input
                  type="text"
                  value={credential}
                  onChange={(e) => setCredential(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#1e202c] text-white border border-transparent focus:outline-[#60519b] focus:outline-2 "
                  placeholder="username123 - myemail@email.com"
                />
              </> :
              <>
                <label className="block text-sm text-gray-300 mb-1">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#1e202c] text-white border border-transparent focus:outline-[#60519b] focus:outline-2 "
                  placeholder="username123"
                />
              </>
            }
          </div>

          {!isLogin && <div>
            <label className="text-sm text-gray-300 mb-1 flex justify-between"><span>Email</span> <span className="opacity-40"> ( optional )</span></label>
            <input
              type="password"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1e202c] text-white border border-transparent focus:outline-[#60519b] focus:outline-2"
              placeholder="myemail@email.com"
            />
          </div>}


          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1e202c] text-white border border-transparent focus:outline-[#60519b] focus:outline-2"
              placeholder="•••••••••••"
            />
          </div>

          {!isLogin && <div>
            <label className="block text-sm text-gray-300 mb-1">Confirm Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#1e202c] text-white border border-transparent focus:outline-[#60519b] focus:outline-2"
              placeholder="•••••••••••"
            />
          </div>}


          <button
            type="submit"
            className="w-full py-2 bg-[#60519b] text-white font-semibold rounded-lg shadow-md hover:bg-[#4e3f84] transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-400 text-center mt-6">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}
          <span className="text-[#60519b] ml-1 hover:underline cursor-pointer"
            onClick={() => setIsLogin(!isLogin)}
          >{isLogin ? "Sign up" : "Sign in"}</span>

        </p>
      </div>
    </div>
  );
}

export default Login;
