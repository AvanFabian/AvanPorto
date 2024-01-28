const cardbgborder = "bg-[#ebe5dd] rounded-2xl p-2 border border-neutral-400"

export default function CardBg({children}) {
    return (
        <div className={cardbgborder}>
            {children}
        </div>
    )
}