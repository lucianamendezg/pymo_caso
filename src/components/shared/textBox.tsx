interface Props {
    textLabel: string,
    id: string
    onChange?:any;
}

export const TextBox = (props:Props) => {
    return (
        <div className="">
            <label className="block font-filson font-normal text-white">
                {props.textLabel}
            </label>
            <input className="rounded shadow-md my-4 md:w-96" onChange={props.onChange} id={props.id} required>
            </input>
        </div>
    )
}

export const TextBoxError = (props:Props) => {
    return (
        <div className="">
            <label className="block font-filson font-normal text-white">
                {props.textLabel}
            </label>
            <input className="rounded shadow-md my-4 md:w-96 border-4 border-red" placeholder="Error: ingrese un número" onChange={props.onChange} id={props.id} required>
            </input>
        </div>
    )
}