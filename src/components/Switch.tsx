export const Switch = (
    { isDark, onChange }:{ isDark: boolean, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}
    ) => {
    return (
        <div className="container-switch">
            <span>Change Theme </span>
            <label className="switch">
                <input type="checkbox" onChange={onChange} checked={isDark} />
                <span className="slider"></span>
            </label>
        </div>
    )
}