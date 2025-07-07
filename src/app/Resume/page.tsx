"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Bot, FileText, Lightbulb, Linkedin, Shield } from "lucide-react";

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/resume-builder');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl text-white mb-4">Redirecting to Resume Builder...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
      </div>
    </div>
  );
}
