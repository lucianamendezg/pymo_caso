interface Props {
    textLabel: string,
    id: string
}

export const TextBox = (props:Props) => {
    return (
        <div className="">
            <label className="block font-filson font-normal text-white" id={props.id}>
                {props.textLabel}
            </label>
            <input className="rounded shadow-md my-4 md:w-96" required>
            </input>
        </div>
    )
}