"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    const RESUME_LINK = process.env.NEXT_PUBLIC_RESUME_LINK;

    if (!RESUME_LINK) {
      console.error("Resume link not found in environment variables.");
      router.push("/contact"); // fallback redirect if missing
      return;
    }

    // Create a hidden anchor to trigger download
    const link = document.createElement("a");
    link.href = RESUME_LINK;
    link.download = "Jacob_Jerry_Resume.pdf";
    document.body.appendChild(link);

    // Trigger download
    link.click();

    // Clean up
    document.body.removeChild(link);

    // Redirect to home after a short delay
    const timer = setTimeout(() => {
      router.push("/");
    }, 3000); // adjust timing if needed

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8">
      <h1 className="text-2xl font-semibold text-foreground">
        Preparing your download...
      </h1>
      <p className="mt-2 text-gray-500">You’ll be redirected shortly.</p>
    </div>
  );
}
