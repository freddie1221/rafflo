import Link from "next/link";

export default function Account() {
  return (
    <div className="min-w-full flex flex-col justify-center items-center my-auto">
      <Link href="/account/signup" className="button-primary w-full">Join Rafflo</Link>
    </div>
  );
}
