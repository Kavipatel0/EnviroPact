import React from 'react'
import { Button } from "antd";
import { Card } from "antd";
import { Divider } from "antd";
import { Collapse } from "antd";

function About() {
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

        <section className="p-10 bg-white-100">
          <div className="p-12 py-4 max-w-full">
            <h1 className="font-bold text-center text-black text-6xl geist-reg">Meet Team SLAK</h1>
            <Divider />
            <div className="p-10 flex flex-row items-center justify-center space-x-32">
              <Card style={{ width: 500 }}>
                <img src="../../assets/images/stanley.jpg" className="object-cover w-full"></img>
                <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Stanley Ke</h2>
                {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Frontend</p>
                <Divider />
                <div className="flex justify-center space-x-2">
                    <a href="https://www.linkedin.com/in/stanley-ke/" className="flex items-center justify-center w-16">
                        <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                    </a>
                    <a href="https://github.com/SobaSkee" className="flex items-center justify-center w-12">
                        <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                    </a>
                </div>
                </Card>

              <Card style={{ width: 500 }}>
                <img src="../../assets/images/placeholder.png" className="object-cover w-full"></img>
                <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Logan Bjork</h2>
                {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Frontend</p>
                <Divider />
                <div className="flex justify-center space-x-2">
                  <a href="https://www.linkedin.com/in/loganbjork/" className="flex items-center justify-center w-16">
                    <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                  </a>
                  <a href="https://github.com/loganjaymes" className="flex items-center justify-center w-12">
                    <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                  </a>
                </div>
              </Card>
            </div>

            <div className="p-10 flex flex-row items-center justify-center space-x-32">
              <Card style={{ width: 500 }}>
                <img src="../../assets/images/adrian.jpg" className="object-cover w-full"></img>
                <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Adrian Moreno</h2>
                {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Backend</p>
                <Divider />
                <div className="flex justify-center items-center">
                  <a href="https://www.linkedin.com/in/adrian-moreno25/" className="flex items-center justify-center w-16">
                    <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                  </a>
                  <a href="https://github.com/adriantoby" className="flex items-center justify-center w-12">
                    <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                  </a>
                </div>
              </Card>

              <Card style={{ width: 500 }}>
                <img src="../../assets/images/kavi.jpg" className="object-cover w-full"></img>
                <h2 className="pt-6 flex justify-center text-4xl text-lime-800 font-bold geist-reg">Kavi Patel</h2>
                {/* <p className="p-2 flex justify-center text-lg geist-reg">Placeholder</p> */}
                <p className="pt-2 text-zinc-600 flex justify-center text-2xl geist-reg">Backend</p>
                <Divider />
                <div className="flex justify-center space-x-2">
                  <a href="https://www.linkedin.com/in/kavip05/" className="flex items-center justify-center w-16">
                    <img src="../../assets/images/LI-In-Bug.png" className="flex w-12"></img>
                  </a>
                  <a href="https://github.com/Kavipatel0" className="flex items-center justify-center w-12">
                    <img src="../../assets/images/github-mark.svg" className="flex w-12"></img>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section className="p-10 bg-white-100">
          <div className="p-12 py-4 max-w-full">
            <h1 className="p-4 font-bold text-center text-black text-6xl geist-reg">Q&A</h1>
            <Divider />
            
            <h2 className="p-4 text-center text-black text-4xl geist-reg">Inspiration</h2>
            <p className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg">
              Placeholder Paragraph Text
            </p>

            <h2 className="p-4 text-center text-black text-4xl geist-reg">How It's Made</h2>
            <p className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg">
              We built Enviro-pact using the React.js framework, Tailwind CSS, and the AntDesign library. WRITE MORE
            </p>

            <h2 className="p-4 text-center text-black text-4xl geist-reg">Challenges</h2>
            <p className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg">
              One of our main challenges was using Git. What should have been a relatively simple process led to a lot of merge conflicts, resulting in a handful of branch resets. WRITE MORE
            </p>

            <h2 className="p-4 text-center text-black text-4xl geist-reg">What We Learned</h2>
            <p className="pt-1 p-8 text-2xl text-zinc-600 flex justify-center geist-reg">
              Placeholder Paragraph Text
            </p>
          </div>
        </section>
    </div>

  )
}

export default About