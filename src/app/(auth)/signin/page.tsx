"use client";
import React from 'react';
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { signIn } from '@/lib/auth-client';

const signInPage = () => {

    const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
            e.preventDefault();
             try {
                const formData = new FormData(e.currentTarget);
    
                const data = Object.fromEntries(formData.entries());
    
                // Better Auth signin
                const { data: resData, error } = await signIn.email({
                    email: data.email as string,
                    password: data.password as string,
                    rememberMe: true,
                    callbackURL: "/", // Redirect to homepage after successful sign-in
                });
    
                if (error) {
                    console.error("Sign-in Error:", error);
                    return;
                }
    
                console.log("Sign-in Response:", resData);
    
            } catch (error) {
                console.error("Unexpected Error:", error);
            }       
        };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-green-50 p-4">
            <h1 className='text-4xl font-bold'>সাইন ইন</h1>
            <p className='text-lg text-muted-foreground text-gray-500'>
                বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে লগইন করুন
            </p>

            <div>
                <Form
                    className="flex w-120 flex-col gap-3 rounded-xl border border-border/80 bg-surface p-4 shadow-sm"
                    onSubmit={onSubmit}
                >
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>ইমেইল</Label>
                        <Input placeholder="you@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                    >
                        <Label className='py-3'>পাসওয়ার্ড</Label>
                        <Input placeholder="কমপক্ষে ৮ অক্ষর" />
                        <FieldError />
                    </TextField>

                    <Button className="w-full bg-green-600" type="submit">
                        সাইন ইন
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default signInPage;