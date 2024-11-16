"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const handleSignIn = async () => {
        await gitHubSignIn();
    };


    // Sign out of Firebase
    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    // Display some of the user's information
    return (
        <div>
            {user ? (
                <>
                    <p className="font-bold text-4xl">Shopping List App</p>
                    <p className="mt-4 font-bold">Signed in as {user.displayName} ({user.email})</p>
                    <button className="font-bold hover:underline" onClick={handleSignOut}>Sign Out</button>
                    <br />
                    <Link className="font-bold hover:underline" href="week-10\shopping-list">Continue to your Shopping List</Link>
                </>
            ) : (
                <>
                    <p className="font-bold text-4xl">Shopping List App</p>
                    <button className="mt-4 font-bold hover:underline" onClick={handleSignIn}>Sign In with GitHub</button>
                </>
            )}
        </div>
    );
}
