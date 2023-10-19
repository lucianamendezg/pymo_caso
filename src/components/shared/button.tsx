interface Prop {
    title: string;
    onClick?:any;
    id?:string;
}

export const Button = (prop:Prop) => {
    return (
        <button className="px-10 py-3 rounded-full border-solid border-1 border-white font-filson text-white bg-orange hover:bg-red" onClick={prop.onClick} id={prop.id}>
            {prop.title}
        </button>
    )
}