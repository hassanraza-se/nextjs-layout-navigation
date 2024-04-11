'use client'
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div>

            <h1 className="block text-2xl font-bold sm:text-4xl pb-2">Welcome to Our Website!</h1>
            <p>
                We are dedicated to providing top-notch services to meet your needs. Whether you are looking for web
                development, software solutions, or digital marketing services, we have got you covered. Explore our
                website
                to learn more about what we offer and how we can help you achieve your goals.
            </p>

            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
                <button
                    onClick={() => { router.push('/portfolio') }}
                    className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">
                    View Portfolio
                </button>
            </div>

            <div className="mt-5">
                <strong>Name:</strong> Hassan Raza <br/>
                <strong>ID:</strong> PIAIC172263 <br/>
            </div>

        </div>
    );
}
