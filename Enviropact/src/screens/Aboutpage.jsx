import React from 'react'
import { Button } from "antd";
import { Card } from "antd";
import { Divider } from "antd";
import { motion, useScroll, useTransform} from "framer-motion"; 
import { useNavigate } from "react-router-dom";

function Aboutpage() {
  const SLAK = "Team SLAK".split("");
  const { scrollYProgress } = useScroll()
  const fade = useTransform(scrollYProgress, [0, .5, 1], [0, 1, 0]);

    const navigate = useNavigate();


  return (
    <div className="relative">
      <div id="navigation-bar" className="flex align-middle justify-center absolute left-0 top-0 w-full">
      <motion.nav
    style={{ backgroundColor: "rgba(63, 98, 18, 0.5)" }}
    className="w-3/8 px-4 py-4 backdrop-blur-md rounded-md sticky top-5 flex justify-center items-center z-10 m-5"
          initial={{ opacity: 0, y: -50 }} // Starting state (invisible and moved up)
          animate={{ opacity: 1, y: 0 }} // End state (fully visible and back to position)
          transition={{ duration: 0.3, ease: "easeOut" }} // Animation duration and easing
        >
          <ul className="flex items-center justify-center gap-5">
            <li
              className="flex items-center justify-center text-lg text-black geist-reg hover:cursor-pointer mr-20"
            >
              <img
                src="../../assets/images/tree-icon.svg"
                className="px-2 w-10"
              />
              <p className="text-green-950" onClick={() => navigate("/")} style={{cursor: "pointer"}}>EnviroPact</p>
            </li>
            <li>
              
            </li>
            <li className="hover:text-white">
              <a onClick={() => navigate("/about")} style={{cursor: "pointer"}}>Contact</a>
            </li>
            <li className="hover:text-white">
              <a onClick={() => navigate("/events")} style={{cursor: "pointer"}}>Events</a>
            </li>
            <li>
            
            </li>
          </ul>
        </motion.nav>
        </div>

      {/* Beginning of page  */}
      <section className="p-10 bg-lime-50 pt-20">
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

          {/* Cards */}
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
      {/* End of card section/meet the team */}

      {/* Beginning of QNA section */}
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
            transition={{ duration: 1, ease: "easeIn"}}>
            Upon encountering the theme "Stages of Life," we were reminded of a fragile, helpless sapling—one that possesses the potential to flourish into something truly beautiful but lacks the opportunity to do so. This vision inspired us to champion the preservation of our shared home: the Earth. Together, with the collective efforts of our local communities, we can create a meaningful and lasting impact.          </motion.p>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">How It's Made</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn"}}>
            For our frontend, we built EnviroPact using React.js, Tailwind CSS, and the AntDesign and Framer Motion libraries. For the backend, we utilized JavaScript, Firestore as a database, and Firebase as a BaaS and authenticator.

          </motion.p>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">Challenges</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn"}}>
            One of our main challenges was using Git, as this was our first time using multiple branches in a project. What should have been a relatively simple process led to a lot of merge conflicts, resulting in several branch resets. Our very limited knowledge on building projects and hackathons also slowed us down, with a lot of the first day being spent on just figuring out a roadmap, and a chunk of the second day being used up on learning brand new tools.

          </motion.p>

          <h2 className="p-4 text-center text-black text-4xl font-bold geist-reg">What We Learned</h2>
          <motion.p 
            className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeIn"}}>
            With this being the first hackathon for all four of us, we learned so much about what goes into designing and implementing a project and the tools needed to do so. We expanded our toolset as courses do not give you this real-world experience, and we now have a better understanding going into future projects.

          </motion.p>
        </div>
      </section>
      {/* End QNA */}
    </div>
  )
}

export default Aboutpage;