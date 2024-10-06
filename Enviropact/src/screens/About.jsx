import React from 'react'
import { Button } from "antd";
import { Card } from "antd";

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

        <section className="bg-white-100">
            <div className="p-12 py-4 max-w-full">
                <h1 className="font-bold text-center text-black text-6xl geist-reg">Meet the Team</h1>
                <p className="p-8 text-2xl flex justify-center geist-reg">Team SLAK (this is placeholder text)</p>
                <div className="p-10 flex flex-row justify-between items-center">
                    <Card style={{ width: 500 }}>
                        <img src="../../assets/images/adrian.jpg" className="object-cover w-full"></img>
                        <h2 className="pt-6 flex justify-center text-3xl font-bold geist-reg">Adrian Moreno</h2>
                        <p className="p-2 flex justify-center text-lg geist-reg">Hello! My name is Adrian. Good one! Good one! Good one! Bad one.</p>
                        <p className="pb-4 text-zinc-600 flex justify-center text-lg geist-reg">Backend</p>
                        <div className="flex justify-center space-x-2">
                            <img src="../../assets/images/LI-In-Bug.png" className="flex flex-row object-scale-down h-1/12 w-1/12"></img>
                            <img src="../../assets/images/github-mark.svg" className="flex flex-row object-scale-down h-1/12 w-1/12" onClick={()=> handleClick}></img>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    </div>

  )
}

export default About