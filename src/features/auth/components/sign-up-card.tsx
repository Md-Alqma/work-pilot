"use client";

import { z } from "zod";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpWithGithub, signUpWithGoogle } from "@/lib/oauth";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DottedSeparator } from "@/components/dotted-separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { registerSchema } from "../schemas";
import { useRegister } from "../api/use-register";

export const SignUpCard = () => {
  const { mutate, isPending } = useRegister();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate({ json: values });
  };
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up, you agree to out{" "}
          <Link href="/privacy">
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className="text-blue-700">Terms of Service</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <FormItem>
                    <Input
                      {...field}
                      type="name"
                      placeholder="Enter your name"
                    />
                    <FormMessage />
                  </FormItem>
                </FormControl>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <FormItem>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter email address"
                    />
                    <FormMessage />
                  </FormItem>
                </FormControl>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormControl>
                  <FormItem>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter password"
                    />
                    <FormMessage />
                  </FormItem>
                </FormControl>
              )}
            />
            <Button disabled={isPending} className="w-full">
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button
        onClick={() => signUpWithGoogle()}
          variant="secondary"
          disabled={isPending}
          size="lg"
          className="w-full"
        >
          <FcGoogle className="mr-2 size-5" />
          Continue with Google
        </Button>
        <Button
        onClick={() => signUpWithGithub()}
          variant="secondary"
          disabled={isPending}
          size="lg"
          className="w-full"
        >
          <FaGithub className="mr-2 size-5" />
          Continue with Github
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Already have an account?
          <Link href="/sign-in">
            <span className="text-blue-700">&nbsp;Sign In</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
