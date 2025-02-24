import React from 'react'
import MainNavigation from '../components/MainNavigation'

export default function Error() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not fins this page!</p>
            </main>
        </>
    )
}
