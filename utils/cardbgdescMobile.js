const cardbgborder = "relative w-full flex justify-between bg-[#ebe5dd] px-2 pt-5 pb-3 border border-neutral-400 z-10" 

export default function CardBgDescMobile({children}) {
    return (
        <div className={cardbgborder}>
            {children}
        </div>
    )
}