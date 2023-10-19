interface Props {
    textLabel: string,
    id: string
}

export const TextBox = (props:Props) => {
    return (
        <div className="">
            <label className="block font-filson font-normal w-1/2" id={props.id}>
                {props.textLabel}
            </label>
            <input className="rounded shadow-md my-4" required>
            </input>
        </div>
    )
}