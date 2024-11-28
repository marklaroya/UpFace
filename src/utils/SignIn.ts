import React, { useState, FormEvent } from 'react';
import { firebaseAuth } from './FirebaseConfig'; // Import firebase configuration
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import sign-in function from Firebase Auth
import { Sign } from 'crypto';
import { error } from 'console';
import { type } from 'os';

function SignIn() {
    // Use state for managing email, password, and error message
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>(''); // To handle sign-in errors


    // Handle form submission
    const handleSignIn = async (e: FormEvent) => {
        e.preventDefault();

        try {
            // Sign in with email and password using Firebase Auth
            const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
            console.log('Signed in user:', userCredential.user); // Log signed-in user info

            // Optionally, redirect or update state after successful login
            setError(''); // Reset error message
        } catch (err: any) {
            console.error('Error signing in:', err);
            setError('Failed to sign in. Please check your credentials.'); // Show error message
        }
    };

}
