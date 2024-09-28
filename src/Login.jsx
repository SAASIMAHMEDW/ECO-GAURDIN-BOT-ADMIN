import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
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
    .min(10, { message: "Email must include @ and domain" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

function Login() {
  // Use the useForm hook with zodResolver
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="login__container flex h-[calc(100vh-8rem)] w-full justify-center">
        <div className="login__card__container relative top-32 w-[380px]">
          <div className="login__Heading__container flex w-full justify-center">
            <button className="button" data-text="Awesome">
              <span className="actual-text">&nbsp;STAR&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;STAR&nbsp;
              </span>
            </button>
          </div>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Login</CardTitle>
              <CardDescription className="text-justify">
                <a href="" className="btn-shine">
                  Enter your credentials to login
                </a>
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <div className="login__card">
                <Form {...form}>
                  {" "}
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
                          {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
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
                            />
                          </FormControl>
                          {/* <FormDescription>
                          This is your public display name.
                        </FormDescription> */}
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#8411e9] font-bold tracking-wider hover:bg-[#5e2292]"
                    >
                      Submit
                    </Button>
                    {/* /* From Uiverse.io by marcelodolza */}
                    {/* <button class="button">
                      <div class="bg"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 342 208"
                        height="208"
                        width="342"
                        class="splash"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M54.1054 99.7837C54.1054 99.7837 40.0984 90.7874 26.6893 97.6362C13.2802 104.485 1.5 97.6362 1.5 97.6362"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M285.273 99.7841C285.273 99.7841 299.28 90.7879 312.689 97.6367C326.098 104.486 340.105 95.4893 340.105 95.4893"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-opacity="0.3"
                          d="M281.133 64.9917C281.133 64.9917 287.96 49.8089 302.934 48.2295C317.908 46.6501 319.712 36.5272 319.712 36.5272"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-opacity="0.3"
                          d="M281.133 138.984C281.133 138.984 287.96 154.167 302.934 155.746C317.908 157.326 319.712 167.449 319.712 167.449"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M230.578 57.4476C230.578 57.4476 225.785 41.5051 236.061 30.4998C246.337 19.4945 244.686 12.9998 244.686 12.9998"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M230.578 150.528C230.578 150.528 225.785 166.471 236.061 177.476C246.337 188.481 244.686 194.976 244.686 194.976"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-opacity="0.3"
                          d="M170.392 57.0278C170.392 57.0278 173.89 42.1322 169.571 29.54C165.252 16.9478 168.751 2.05227 168.751 2.05227"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-opacity="0.3"
                          d="M170.392 150.948C170.392 150.948 173.89 165.844 169.571 178.436C165.252 191.028 168.751 205.924 168.751 205.924"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M112.609 57.4476C112.609 57.4476 117.401 41.5051 107.125 30.4998C96.8492 19.4945 98.5 12.9998 98.5 12.9998"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          d="M112.609 150.528C112.609 150.528 117.401 166.471 107.125 177.476C96.8492 188.481 98.5 194.976 98.5 194.976"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-opacity="0.3"
                          d="M62.2941 64.9917C62.2941 64.9917 55.4671 49.8089 40.4932 48.2295C25.5194 46.6501 23.7159 36.5272 23.7159 36.5272"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-width="3"
                          stroke-opacity="0.3"
                          d="M62.2941 145.984C62.2941 145.984 55.4671 161.167 40.4932 162.746C25.5194 164.326 23.7159 174.449 23.7159 174.449"
                        ></path>
                      </svg>

                      <div class="wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 221 42"
                          height="42"
                          width="221"
                          class="path"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-width="3"
                            d="M182.674 2H203C211.837 2 219 9.16344 219 18V24C219 32.8366 211.837 40 203 40H18C9.16345 40 2 32.8366 2 24V18C2 9.16344 9.16344 2 18 2H47.8855"
                          ></path>
                        </svg>

                        <div class="outline"></div>
                        <div class="content">
                          <span class="char state-1">
                            <span
                              data-label="J"
                              style={{
                                "--i": 1,
                              }}
                            >
                              J
                            </span>
                            <span
                              data-label="o"
                              style={{
                                "--i": 2,
                              }}
                            >
                              o
                            </span>
                            <span
                              data-label="i"
                              style={{
                                "--i": 3,
                              }}
                            >
                              i
                            </span>
                            <span
                              data-label="n"
                              style={{
                                "--i": 4,
                              }}
                            >
                              n
                            </span>
                            <span
                              data-label="T"
                              style={{
                                "--i": 5,
                              }}
                            >
                              T
                            </span>
                            <span
                              data-label="o"
                              style={{
                                "--i": 6,
                              }}
                            >
                              o
                            </span>
                            <span
                              data-label="d"
                              style={{
                                "--i": 7,
                              }}
                            >
                              d
                            </span>
                            <span
                              data-label="a"
                              style={{
                                "--i": 8,
                              }}
                            >
                              a
                            </span>
                            <span
                              data-label="y"
                              style={{
                                "--i": 9,
                              }}
                            >
                              y
                            </span>
                          </span>

                          <div class="icon">
                            <div></div>
                          </div>

                          <span class="char state-2">
                            <span
                              data-label="J"
                              style={{
                                "--i": 1,
                              }}
                            >
                              J
                            </span>
                            <span
                              data-label="o"
                              style={{
                                "--i": 2,
                              }}
                            >
                              o
                            </span>
                            <span
                              data-label="i"
                              style={{
                                "--i": 3,
                              }}
                            >
                              i
                            </span>
                            <span
                              data-label="n"
                              style={{
                                "--i": 4,
                              }}
                            >
                              n
                            </span>
                            <span
                              data-label="N"
                              style={{
                                "--i": 5,
                              }}
                            >
                              N
                            </span>
                            <span
                              data-label="o"
                              style={{
                                "--i": 6,
                              }}
                            >
                              o
                            </span>
                            <span
                              data-label="w"
                              style={{
                                "--i": 7,
                              }}
                            >
                              w
                            </span>
                          </span>
                        </div>
                      </div>
                    </button> */}
                  </form>
                </Form>
              </div>
            </CardContent>
            <CardFooter>
              <p className="mt-2 text-justify text-sm text-gray-400">
                Last Updated on 10-10-2022
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Login;
