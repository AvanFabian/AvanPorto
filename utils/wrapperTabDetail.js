const wrapper = "rounded-xl w-full mt-12 lg:p-2 lg:mt-0 flex flex-col" 

export default function WrapperTabDetail({children}) {
    return (
        <div className={wrapper}>
            {children}
        </div>
    )
}

