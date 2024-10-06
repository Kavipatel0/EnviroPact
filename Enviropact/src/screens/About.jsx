import React from 'react'
import { Button } from "antd";
import { Card } from "antd";
import { Divider } from "antd";
import { motion, useScroll, useTransform} from "framer-motion"; 

function About() {
  const SLAK = "Team SLAK".split("");
  const { scrollYProgress } = useScroll()
  const fade = useTransform(scrollYProgress, [0, .5, 1], [0, 1, 0]);

  return (
    <div className="">
      <nav className="bg-transparent flex-row content-center px-20 py-5 z-10">
        <ul>
        <li>
          <img
          src="../../assets/images/tree-icon.svg"
          className="float-left px-2"
          ></img>
        </li>
        <li className="flex-row justify-center py-2 float-left text-lg text-black geist-reg">
          Enviro-Pact
        </li>
        <li>
          <Button
          type="primary"
          className="py-2 px-4 float-right text-md text-black geist-reg"
          style={{ background: "rgb(132 204 22)" }}
          >
          Sign In
          </Button>
        </li>
        </ul>
      </nav>

      <section className="p-10 bg-lime-50">
        <div className="p-12 py-4 max-w-full">
        <Divider style={{ fontFamily: "geist-reg" }}>
          <div className="flex justify-center">
            <h1 className="font-bold text-center text-black text-6xl geist-reg">Meet&nbsp;</h1>
              {SLAK.map((el, i) => (
                <motion.h1
                  className="font-bold text-center text-black text-6xl geist-reg"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    color: "#3f6212"
                  }}
                  transition={{ 
                    duration: 0.75,
                    delay: i / 15
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
            </div>
          </Divider>
          <motion.div 
            className="p-10 flex flex-row items-center justify-center space-x-32"
            variants={{
              hidden: { opacity: 0 }, 
              show: { 
                opacity: 1,
                transition: {
                  duration: 1
                },
               }, 
              }}
            initial="hidden"
            animate="show"  
            >
              <motion.div
                initial={{ y:0 }}
                whileHover={{ y:-20 }}
              >
                <Card 
                  className="bg-lime-200"
                  style={{ 
                    width: 425, 
                    borderStyle: "solid"}}>
                  <img src="../../assets/images/stanley.jpg" className="object-cover w-full"></img>
                  <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Stanley Ke</h2>
                  {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                  <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Frontend</p>
                  <Divider />
                  <div className="flex justify-center space-x-2">
                      <motion.a 
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ bounceDamping: 50, stiffness: 700 }}
                        href="https://www.linkedin.com/in/stanley-ke/" 
                        className="flex items-center justify-center w-16">
                          <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                      </motion.a>
                      <motion.a 
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ bounceDamping: 50, stiffness: 700 }}
                        href="https://github.com/SobaSkee" 
                        className="flex items-center justify-center w-12">
                          <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                      </motion.a>
                  </div>
                </Card>
              </motion.div>

            <motion.div
              initial={{ y:0 }}
              whileHover={{ y:-20 }}>
              <Card 
                  className="bg-lime-100"
                  style={{ 
                    width: 425, 
                    borderStyle: "solid"}}>
                <img src="../../assets/images/logan.jpg" className="object-cover w-full"></img>
                <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Logan Bjork</h2>
                {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Frontend</p>
                <Divider />
                <div className="flex justify-center space-x-2">
                  <motion.a 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ bounceDamping: 50, stiffness: 700 }}
                    href="https://www.linkedin.com/in/loganbjork/" 
                    className="flex items-center justify-center w-16">
                    <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                  </motion.a>
                  <motion.a 
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ bounceDamping: 50, stiffness: 700 }}
                    href="https://github.com/loganjaymes" 
                    className="flex items-center justify-center w-12">
                    <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="p-10 flex flex-row items-center justify-center space-x-32"
            variants={{
              hidden: { opacity: 0 }, 
              show: { 
                opacity: 1,
                transition: {
                  duration: 1
                },
               }, 
              }}
            initial="hidden"
            animate="show"  
            >
            <div className="p-10 flex flex-row items-center justify-center space-x-32">
            <motion.div
                initial={{ y:0 }}
                whileHover={{ y:-20 }}
              >
                <Card 
                  className="bg-lime-100"
                  style={{ 
                    width: 425, 
                    borderStyle: "solid"}}>
                  <img src="../../assets/images/adrian.jpg" className="object-cover w-full"></img>
                  <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Adrian Moreno</h2>
                  {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                  <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Backend</p>
                  <Divider />
                  <div className="flex justify-center items-center">
                    <motion.a 
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ bounceDamping: 50, stiffness: 700 }}
                      href="https://www.linkedin.com/in/adrian-moreno25/" 
                      className="flex items-center justify-center w-16">
                      <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                    </motion.a>
                    <motion.a 
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ bounceDamping: 50, stiffness: 700 }}
                      href="https://github.com/adriantoby" 
                      className="flex items-center justify-center w-12">
                      <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                    </motion.a>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ y:0 }}
                whileHover={{ y:-20 }}
              >
                <Card 
                  className="bg-lime-200"
                  style={{ 
                    width: 425, 
                    borderStyle: "solid"}}>
                  <img src="../../assets/images/kavi.jpg" className="object-cover w-full"></img>
                  <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Kavi Patel</h2>
                  {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                  <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Backend</p>
                  <Divider />
                  <div className="flex justify-center space-x-2">
                    <motion.a 
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ bounceDamping: 50, stiffness: 700 }}
                      href="https://www.linkedin.com/in/kavip05/" 
                      className="flex items-center justify-center w-16">
                      <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                    </motion.a>
                    <motion.a 
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ bounceDamping: 50, stiffness: 700 }}
                      href="https://github.com/Kavipatel0" 
                      className="flex items-center justify-center w-12">
                      <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                    </motion.a>
                  </div>
                </Card>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="p-10 bg-lime-50">
        <div className="p-12 py-4 max-w-full">
          <Divider style={{ fontFamily: "geist-reg" }}>
            <h1 className="p-4 font-bold text-center text-black text-6xl geist-reg">Q&A</h1>
          </Divider>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">Inspiration</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">How It's Made</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn"}}>
            For our front end, we built Enviro-pact using React.js, Tailwind CSS, and the AntDesign and Framer Motion libraries.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">Challenges</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn"}}>
            One of our main challenges was using Git. 
            What should have been a relatively simple process led to a lot of merge conflicts, resulting in a handful of branch resets. 
            WRITE MORE
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">What We Learned</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn"}}>
            This having been our first hackathon, we all learned a lot individually. 
            Depending on the member, it was a new language, library, or database.
            WRITE MORE
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>
        </div>
      </section>
    </div>

  )
}

export default About