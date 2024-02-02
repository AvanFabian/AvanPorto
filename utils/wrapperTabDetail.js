const wrapper = "rounded-xl w-full lg:p-2 mt-12 lg:mt-0 flex flex-col" 

export default function WrapperTabDetail({children}) {
    return (
        <div className={wrapper}>
            {children}
        </div>
    )
}

