import Image from 'next/image'
export default function Teams() {

    const teamMembers = [
        { id: 1, name: 'John Doe', position: 'CEO', imageUrl: 'https://eu.ui-avatars.com/api/?name=John+Dmith&size=250' },
        { id: 2, name: 'Jane Smith', position: 'CTO', imageUrl: 'https://eu.ui-avatars.com/api/?name=Jane+Smith&size=250' },
        { id: 3, name: 'David Johnson', position: 'Lead Developer', imageUrl: 'https://eu.ui-avatars.com/api/?name=David+Johnson&size=250' },
        { id: 4, name: 'Emily Brown', position: 'Marketing Manager', imageUrl: 'https://eu.ui-avatars.com/api/?name=Emily+Brown&size=250' },
        { id: 5, name: 'Michael Lee', position: 'Graphic Designer', imageUrl: 'https://eu.ui-avatars.com/api/?name=Michael+Lee&size=250' },
        { id: 6, name: 'Sarah Wilson', position: 'HR Manager', imageUrl: 'https://eu.ui-avatars.com/api/?name=Sarah+Wilson&size=250' },
        { id: 7, name: 'Kevin Martinez', position: 'Finance Director', imageUrl: 'https://eu.ui-avatars.com/api/?name=Kevin+Martinez&size=250' },
        { id: 8, name: 'Amanda Taylor', position: 'Customer Support Specialist', imageUrl: 'https://eu.ui-avatars.com/api/?name=Amanda+Taylor&size=250' },
    ];

    return (
        <div>

            <h1 className="block text-2xl font-bold sm:text-4xl pb-2">Our Teams</h1>
            <div className="grid grid-cols-4 gap-4">
                {teamMembers.map((member) => (
                    <div key={member.id} className="w-10/12 p-4">
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            width={200}
                            height={200}
                            className="w-full rounded mb-2"
                        />
                        <h2 className="text-lg font-semibold">{member.name}</h2>
                        <p className="text-gray-700">{member.position}</p>
                    </div>
            ))}
        </div>

</div>
)
    ;
}
