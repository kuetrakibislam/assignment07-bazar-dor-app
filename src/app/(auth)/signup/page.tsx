"use client";

import React from 'react';

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { signUp } from '@/lib/auth-client';




const signUpPage = () => {

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
         try {
            const formData = new FormData(e.currentTarget);

            // Extract form values safely
            const name = String(formData.get("name") ?? "").trim();
            const email = String(formData.get("email") ?? "").trim();
            const password = String(formData.get("password") ?? "");

            // Better Auth signup
            const { data: resData, error } = await signUp.email({
                name,
                email,
                password,
            });

            if (error) {
                console.error("Sign-up Error:", error);
                return;
            }

            console.log("Sign-up Response:", resData);

        } catch (error) {
            console.error("Unexpected Error:", error);
        }       
    };



    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-green-50 p-4">
            <h1 className='text-4xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h1>
            <p className='text-lg text-muted-foreground text-gray-500'>
                বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
            </p>

            <div>
                <Form
                    className="flex w-120 flex-col gap-3 rounded-xl border border-border/80 bg-surface p-4 shadow-sm"
                    onSubmit={onSubmit}
                >
                    <TextField isRequired name="name" type="text">
                        <Label>নাম</Label>
                        <Input className="bg-field" placeholder="যেমন: রহিম উদ্দিন" />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='py-3'>ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className='py-3'>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className='py-3'>পাসওয়ার্ড নিশ্চিত করুন</Label>
                        <Input placeholder="আবার লিখুন" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>


                    <Button className="w-full bg-green-600" type="submit">
                        অ্যাকাইন্ট তৈরি করুন
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default signUpPage;