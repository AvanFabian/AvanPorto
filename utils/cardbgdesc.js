const cardbgborder = "relative w-full flex justify-between bg-[#ebe5dd] px-2 py-5 border border-neutral-400 z-10" 

export default function CardBgDesc({children}) {
    return (
        <div className={cardbgborder}>
            {children}
        </div>
    )
}