import { AnimatePresence, motion } from "motion/react";

export function HamOption({ opt, links }) {
  let index = 0;
  return (
    <div className="absolute w-full">
      <AnimatePresence>
        {opt && (
          <motion.div
            initial={{ y: -3 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: -3 }}
            className="flex flex-col mt-2 px-5 py-2 border lg:hidden border-neutral-300 rounded-xl"
          >
            {links.map((ele) => (
              <a
                className="hover:text-neutral-600 text-[0.8rem] transition duration-300"
                href={ele.link}
                key={index++}
              >
                {ele.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
