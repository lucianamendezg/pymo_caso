interface Prop {
    title: string;
    onClick:any;
}

export const Button = (prop:Prop) => {
    return (
        <button className="m-3 px-10 py-3 rounded-full border-solid border-1 border-white font-filson text-white bg-orange hover:bg-red" onClick={prop.onClick}>
            {prop.title}
        </button>
    )
}