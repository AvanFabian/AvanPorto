{/* <div className="rounded-xl w-full p-2">
{projectsDataPreview.map((project, idx) => (
  <div className="bg-[#e1e4e6] rounded-2xl mb-3 text-[#1E2022] w-full border-[1px] hover:bg-[#b2b5b7] duration-200 transition-all ease-in  border-neutral-400">
    <Link href={`/dashboard/${project.id}`} key={project.title}>
      <motion.div 
        className="p-2 "
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.7,
            type: "Tween",
            // ease: "easeInOut",
            stiffness: 200,
          },
        }}
      >
        <div className="flex gap-x-2">
          <Image
            width={1000}
            height={1000}
            className="w-[400px] h-[250px] bg-cover rounded-lg select-none"
            src={project.image}
            alt={project.title}
          />
          <div className="w-full flex flex-col align-top">
              <div className="flex flex-row">
                <span className="text-2xl text-[#1E2022] font-bold selection:bg-[#c3c8ce]">
                  {project.title}
                </span>
              </div>
              <span className="text-[16px] antialiased font-RubikRegular my-1 mr-2 text-justify capitalize selection:bg-[#c3c8ce]">
                {project.shortdesc}
              </span>
              <div className="flex items-end w-full h-full text-sm text-[#1E2022] align-bottom font-light selection:bg-[#c3c8ce]">{project.createdAt}</div>
            </div>
          </div>
      </motion.div>
    </Link>
  </div>
))}
</div> */}