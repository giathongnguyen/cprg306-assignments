"use client";

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
                    <p>Welcome, {user.displayName} ({user.email})</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </>
            ) : (
                <>
                    <p>Please sign in to continue.</p>
                    <button onClick={handleSignIn}>Sign In with GitHub</button>
                </>
            )}
        </div>
    );
}
