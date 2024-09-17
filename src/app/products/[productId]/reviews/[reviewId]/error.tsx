'use client'

export default function ErrorPage(error: Error, reset: () => void) {
    return <div> {error.message} <button onClick={reset}>Try again</button></div>;
}