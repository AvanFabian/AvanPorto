export const Heading = ({ title, desc }) => {
  return (
    <>
      <div className="flex flex-col mb-1 text-center">
        {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
        <h1 className="text-2xl SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#34373b]">
          {title}
        </h1>
        <h1 className=" text-sm my-3 SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]">
          {desc}
        </h1>
      </div>
    </>
  )
}
