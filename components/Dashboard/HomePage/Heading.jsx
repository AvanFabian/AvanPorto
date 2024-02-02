import { motion } from 'framer-motion'
export const Heading = ({ title, desc }) => {
  return (
    <>
      <div className="flex flex-col mb-1 text-center">
        {/* <PiCodeThin className="text-6xl text-neutral-50" /> */}
        <motion.h1
          className="text-2xl SpaceGroteskBold capitalize selection:bg-[#ccccc0] text-[#34373b]"
          initial={{ opacity: 0.5, scale: 0.2 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {title}
        </motion.h1>
        <motion.h1
          className=" text-sm my-3 SpaceGroteskRegular capitalize selection:bg-[#ccccc0] text-[#34373b]"
          initial={{ opacity: 0.5, scale: 0.2 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          {desc}
        </motion.h1>
      </div>
    </>
  )
}
