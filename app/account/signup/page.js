import Link from "next/link";

export default function Signup() {
  return (
    <div className="mx-auto w-full max-w-sm flex flex-col items-center space-y-4">
      <h1 className="text-5xl font-extrabold text-white mb-6">Signup to Rafflo</h1>
      {formInput({type: "text", placeholder: "First Name"})}
      {formInput({type: "text", placeholder: "Last Name"})}
      {formInput({type: "email", placeholder: "Email"})}
      {formInput({type: "password", placeholder: "Password"})}
      <Link href="/account/causes/bermuda-national-trust" className="text-center mt-2 w-full rounded-lg bg-purple-600 p-4 font-semibold text-white">Create Account</Link>
    </div>
  );
}


function formInput({type, placeholder}) {
  return (
    <input type={type} placeholder={placeholder} required
      className="mt-2 
      w-full 
      rounded-lg 
      border-gray-400 
      bg-gray-200
      bg-opacity-20 
      shadow-sm
      font-semibold
      placeholder-white
      placeholder-opacity-50
      text-white
      text-lg 
      p-4
      focus:ring-2 focus:ring-purple-600" />
  );
}
