"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error}:ErrorProps) {
    return (
        <div>
            {error.message}
        </div>
    );
}