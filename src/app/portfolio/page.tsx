import Image from "next/image";
export default function Portfolio() {
    return (
        <div>

            <h1 className="block text-2xl font-bold sm:text-4xl pb-2">Our Portfolio</h1>
            <div className="portfolio-grid">

                <div className="bg-gray-200 p-4 rounded-md">
                    <Image
                        src="https://placehold.co/600x400"
                        alt="Portfolio Item 1"
                        className="w-full rounded-md mb-2"
                        width={600}
                        height={400}
                    />
                    <h2 className="text-lg font-semibold">Project Title 1</h2>
                    <p className="text-gray-700">Description of project 1 goes here. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</p>
                </div>

                <div className="bg-gray-200 p-4 rounded-md">
                    <Image
                        src="https://placehold.co/600x400"
                        alt="Portfolio Item 2"
                        className="w-full rounded-md mb-2"
                        width={600}
                        height={400}
                    />
                    <h2 className="text-lg font-semibold">Project Title 2</h2>
                    <p className="text-gray-700">Description of project 2 goes here. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</p>
                </div>

                <div className="bg-gray-200 p-4 rounded-md">
                    <Image
                        src="https://placehold.co/600x400"
                        alt="Portfolio Item 3"
                        className="w-full rounded-md mb-2"
                        width={600}
                        height={400}
                    />
                    <h2 className="text-lg font-semibold">Project Title 3</h2>
                    <p className="text-gray-700">Description of project 3 goes here. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</p>
                </div>

            </div>

        </div>
    );
}
