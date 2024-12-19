'use server'

import { apiUrl } from "./env"
import { cookies } from 'next/headers'

export async function loginAction(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  const rememberMe = formData.get('remember-me');

  // Server-side validation
  if (!email || !password) {
    return { error: 'Email and password are required' };
  }

  try {
    // Make the API request
    const response = await fetch(`${apiUrl}/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
        rememberMe: rememberMe === 'on', 
      }),
    });

    // Handle the response
    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || 'Login failed' };
    }

    const data = await response.json();
    const jwtToken = data.jwt;

    // Set HTTP-only cookie
    cookies().set('token', jwtToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
      sameSite: 'strict',
      maxAge: rememberMe === 'on' ? 30 * 24 * 60 * 60 : undefined // 30 days if remember me, else session cookie
    });

    return { success: true, user: data.user };

  } catch (error) {
    console.error('Login error:', error);
    return { error: 'An unexpected error occurred' };
  }
}