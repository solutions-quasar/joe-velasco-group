import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center p-6 text-center">
      <div className="font-serif-luxury text-6xl mb-4 font-light text-neutral-300">404</div>
      <h1 className="text-2xl font-serif-luxury text-white mb-2">Page Not Found</h1>
      <p className="text-neutral-400 text-sm max-w-md mb-8 font-light">
        The luxury estate or property listing you are seeking may have been privatized or moved.
      </p>
      <Link
        href="/"
        className="px-8 py-3 bg-white text-black text-xs font-mono tracking-widest uppercase hover:bg-neutral-200 transition-colors"
      >
        RETURN TO HOMEPAGE
      </Link>
    </div>
  );
}
