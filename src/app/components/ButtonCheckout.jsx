"use client"


import React from 'react'

function ButtonCheckout({ priceId }) {
    return (
        <button className='bg-sky-500 text-white px-4 py-2 rounded'
            onClick={async () => {
                const res = await fetch("api/checkout",
                    {
                        body: JSON.stringify({ priceId }),
                        headers: { "Content-Type": "application/json" },
                        method: "POST"
                    })
                const data = await res.json()
                window.location.href = data.url
            }}
        >
            Buy
        </button>)
}

export default ButtonCheckout