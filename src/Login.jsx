import React, { useRef } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useToast } from "./hooks/use-toast.js";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Define the schema using Zod
const formSchema = z.object({
  email: z
    .string()
    .min(10, { message: "Email must include @ and domain" })
    .email({ message: "Invalid email address" }), // Enhanced email validation
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

function Login() {
  const { toast } = useToast();
  let loginBtn = useRef(null);
  let loginLoadingBtn = useRef(null);
  // Initialize useForm with defaultValues
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "", // Initialize email as an empty string
      password: "", // Initialize password as an empty string
    },
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    loginBtn.current.classList.toggle("hidden");
    loginLoadingBtn.current.classList.toggle("hidden");
    try {
      let res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );
      // console.log(res);
      if (res.user.uid != null) {
        navigate("/home");
        loginBtn.current.classList.toggle("hidden");
        loginLoadingBtn.current.classList.toggle("hidden");
        toast({
          description: "Login Successful",
          variant: "success",
        });
      } else {
        navigate("/login");
        loginBtn.current.classList.toggle("hidden");
        loginLoadingBtn.current.classList.toggle("hidden");
        toast({
          description: "Login Failed",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);
      loginBtn.current.classList.toggle("hidden");
      loginLoadingBtn.current.classList.toggle("hidden");
      toast({
        description: "Login Failed" + error.message,
        variant: "destructive",
      });
      // You can set form errors here if needed
    }
  };

  return (
    <div className="login__container flex h-screen w-full items-center justify-center bg-background px-4">
    <div className="login__card__container w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div className="login__Heading__container flex w-full justify-center mb-8">
        <button className="button" data-text="Awesome">
          <span className="actual-text">&nbsp;STAR&nbsp;</span>
          <span aria-hidden="true" className="hover-text">
            &nbsp;STAR&nbsp;
          </span>
        </button>
      </div>
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription className="text-justify">
            <a className="btn-shine">
              Enter your credentials to login
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="login__card">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-3"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your Password"
                          {...field}
                          type="password" // changed to password
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  ref={loginBtn}
                  type="submit"
                  className="block w-full bg-[#8411e9] font-bold tracking-wider hover:bg-[#5e2292]"
                >
                  Login
                </Button>
                <button
                  ref={loginLoadingBtn}
                  className="hidden w-full rounded-sm bg-[#8411e9] px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-neutral-50 shadow-lg hover:bg-[#5e2292] focus:outline-none active:bg-[#8411e9]"
                  type="button"
                >
                  <div
                    role="status"
                    className="mr-2 inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em]"
                  ></div>
                  Loading...
                </button>
              </form>
            </Form>
          </div>
        </CardContent>
        <CardFooter className="text-center">
          <a  className="btn-shine mt-3">
            Smart Trash Autonomous Robot
          </a>
        </CardFooter>
      </Card>
    </div>
  </div>
  
  );
}

export default Login;
