
type CheckboxProps = {
    label: string;
    className?: string;
}
export default function Checkbox({ label, className }: CheckboxProps) {
    return(
        <label className={`flex items-center gap-2 cursor-pointer ${className || ''}`}>
            <input type="checkbox" className="form-checkbox h-4 w-4" />
            <span className="texto-suave">{label}</span>
        </label>
    )
}