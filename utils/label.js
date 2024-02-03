const CreatedTime = ({ project }) => {
    return (
      <div className="absolute w-22 flex items-center text-[#E1E4E6] justify-center top-0 right-0 bg-[#282828] rounded-none px-2 py-2">
        <span className={`text-[16px] font-bold  h-full block select-none`}>{project.createdAt}</span>
      </div>
    )
  }
  
  const DevelopmentStatus = ({ project }) => {
    return (
      <div className="absolute w-22 flex items-center text-[#E1E4E6] justify-center top-0 left-0 bg-[#282828] rounded-none px-2 py-2">
        <span className={`text-[16px] font-bold  h-full block select-none`}>{project.Status}</span>
      </div>
    )
  }
  
  const HostingStatus = ({ project }) => {
    return (
      <div className="absolute w-22 flex items-center text-[#E1E4E6] justify-center top-0 left-0 bg-[#282828] rounded-none px-2 py-1">
        <span className={`text-[16px] font-bold  h-full block select-none`}>{project.Hosting}</span>
      </div>
    )
  }

export { CreatedTime, DevelopmentStatus, HostingStatus }