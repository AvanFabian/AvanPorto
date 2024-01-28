const cardbgborder = "w-full flex justify-between bg-[#ebe5dd] p-2 border border-neutral-400 z-10" 

export default function CardBgDesc({children}) {
    return (
        <div className={cardbgborder}>
            {children}
        </div>
    )
}