"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft } from "lucide-react";

const Waitlist = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here, you would send the data to your backend or database
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, role }),
      });

      setSubmitted(true); // Show thank you message on successful submission
    } catch (error) {
      console.error("Failed to submit waitlist:", error);
      // Handle error (e.g., show an error message)
    }
  };

  if (submitted) {
    return (
      <main className="relative flex items-center justify-center min-h-screen bg-emerald-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tighter">
            Thank you for joining the waitlist!
          </h1>
          <p className="text-muted-foreground text-sm mt-4">
            We appreciate your interest and will notify you when we launch.
          </p>
          <Button
            className="mt-6"
            onClick={() => router.push("/")}
          >
            Go back to Home
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative flex items-center justify-center min-h-screen bg-emerald-50">
      <Link href="/" className="absolute top-4 left-4">
        <Button variant="ghost">
          <ArrowLeft />
        </Button>
      </Link>

      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex items-center justify-center py-12">
          <form onSubmit={handleSubmit} className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-4xl font-bold tracking-tighter">
                Join the Waitlist
              </h1>
              <p className="text-balance text-muted-foreground text-sm">
                Be the first to know when we launch. Sign up for early access!
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role</Label>
                <Select onValueChange={setRole}>
                  <SelectTrigger id="role">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clinical-nurse">Clinical Nurse</SelectItem>
                    <SelectItem value="registered-nurse">Registered Nurse</SelectItem>
                    <SelectItem value="assistant-in-nursing">
                      Assistant in Nursing
                    </SelectItem>
                    <SelectItem value="enrolled-nurse">Enrolled Nurse</SelectItem>
                    <SelectItem value="nurse-practitioner">
                      Nurse Practitioner
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Join Waitlist
              </Button>
            </div>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              By joining, you agree to our{" "}
              <Link href="#" className="underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline">
                Privacy Policy
              </Link>
            </div>
          </form>
        </div>
        <div className="hidden bg-muted lg:block">
          <Image
            src="/placeholder.svg"
            alt="Product preview"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
      </div>
    </main>
  );
};

export default Waitlist;



