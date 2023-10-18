interface Props {
    title: string;
    subtitle: string;
    image?: string  
}

export default function HeroImage (props: Props) {
    const imageUrl = "url("+props.image+")";
    return (
        <div className="w-full bg-center bg-cover" style={{backgroundImage: imageUrl}}>
            <div className="items-center justify-center text-center w-full h-full bg-blue bg-opacity-40 py-12">
                <div className="my-16 md:my-24">
                    <h1 className="text-4xl md:text-7xl text-white font-filson">
                        {props.title}
                    </h1>
                </div>
                <div className="my-16 md:my-24">
                    <h2 className="px-6 text-lg md:text-2xl text-white font-filson">
                        {props.subtitle}
                    </h2>
                </div>
            </div>
        </div>
    )
}