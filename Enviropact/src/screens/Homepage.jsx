import React from "react";
import { Button } from "antd";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../auth/authService";
import { useState, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Homepage() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsSignedIn(true); // User is signed in
        console.log("User is signed in: ", user.displayName);
      } else {
        setIsSignedIn(false); // User is signed out
        console.log("No user is signed in");
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  const { ref: eventsRef, inView: eventsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <div
        className="mx-auto flex flex-col items-center"
        style={{ backgroundColor: "#003310" }}
      >
        <motion.nav
          className="md:w-2/5 lg:4/5 px-4 py-4 backdrop-blur-md bg-white/50 rounded-md sticky top-5 flex justify-center items-center z-10"
          initial={{ opacity: 0, y: -50 }} // Starting state (invisible and moved up)
          animate={{ opacity: 1, y: 0 }} // End state (fully visible and back to position)
          transition={{ duration: 0.3, ease: "easeOut" }} // Animation duration and easing
        >
          <ul className="flex items-center justify-center gap-4">
            <li
              onClick={() => navigate("/events")}
              className="flex items-center justify-center text-lg text-black geist-reg hover:cursor-pointer mr-40"
            >
              <img
                src="../../assets/images/tree-icon.svg"
                className="px-2 w-10"
              />
              <p className="text-green-950 geist-bold">EnviroPact</p>
            </li>
            <li>
              {!isSignedIn && (
                <Button
                  type="primary"
                  className="text-md text-black geist-reg"
                  style={{ background: "rgb(132 204 22)" }}
                  onClick={handleSignIn}
                >
                  Sign In
                </Button>
              )}
            </li>
            <li className="hover:text-white">
              <a onClick={() => navigate("/about")} style={{cursor: "pointer"}}>Contact</a>
            </li>
            <li className="hover:text-white">
              <a onClick={() => navigate("/events")} style={{cursor: "pointer"}}>Events</a>
            </li>
          </ul>
        </motion.nav>

        {/*Hero Page */}
        <section className="min-h-screen w-full bg-[url('../../assets/images/hero-home-background.svg')] bg-cover bg-no-repeat bg-right-bottom">
          <div className="flex flex-col px-20 py-20 max-w-full gap-4">
            <motion.h1
              className="font-bold text-6xl text-zinc-300 geist-reg leading-tight"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Preserve your pact
              <br />
              with the Earth.
            </motion.h1>
            <motion.div
              className="pb-5 text-lg max-w-full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lime-500 text-lg geist-reg">
                A new way to engage with your community and better
                <br /> the Earth together, one trash bag at a time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                type="primary"
                size="large"
                className="text-md text-green-950 geist-reg"
                style={{
                  background:
                    "linear-gradient(to right, rgb(132, 204, 22), rgb(211,211,211))",
                  border: "none",
                }}
                onClick={() => navigate("/events")}
              >
                Join an event near you
                <ArrowRight className="h-6 ml-1.5" />
              </Button>
            </motion.div>
          </div>
        </section>
        {/**slide 1 */}
        <section className="min-h-screen w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center pt-40 pr-48 pl-48 gap-20">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="font-bold text-6xl text-white geist-reg"
            >
              What you can do with EnviroPact
            </motion.h1>
            <div className="w-full flex justify-center items-center gap-20">
              <motion.img
                className="w-72"
                src="../../assets/images/iphone-background-1.svg"
                alt="iphone image"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
              <div className="w-1/2 flex flex-col items-start justify-center gap-8">
                {/**headline */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    className="w-10"
                    src="../../assets/images/count-1.svg"
                    alt="count-1"
                  />
                  <p className="text-4xl text-white">
                    “Plant the <span style={{ color: "#C7EF4E" }}>seed</span>”
                  </p>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-xl text-white geist-reg"
                >
                  With our streamlined event hosting app, you and your
                  organization can easily plan and manage sustainability events
                  that bring positive change to your community. <br />
                  <br />
                  Whether it's clean-up drives, eco-friendly workshops, or green
                  business meetups, our platform simplifies the process, helping
                  you organize events that matter with just a few clicks.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/**slide2 */}
        <section className="h-fit w-full flex flex-col items-center justify-center">
          <div className="h-full w-full flex flex-col items-start justify-start pr-48 pl-48">
            <div className="w-full flex justify-center items-center gap-20">
              <div className="w-1/2 flex flex-col items-start justify-center gap-8">
                {/**headline */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    className="w-10"
                    src="../../assets/images/count-2.svg"
                    alt="count-1"
                  />
                  <p className="text-4xl text-white">
                    “<span style={{ color: "#C7EF4E" }}>Grow</span> the
                    community's tree”
                  </p>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-xl text-white geist-reg"
                >
                  Joining local sustainability efforts to helps to build a
                  greener future for all. Every action counts—get involved, make
                  a lasting impact, and inspire others to do the same. Start
                  today with enviro-pact.
                </motion.p>
              </div>
              <motion.img
                className="w-72"
                src="../../assets/images/iphone-background-2.svg"
                alt="iphone image"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
            </div>
          </div>
        </section>
        {/**slide3 */}
        <section className="h-fit w-full flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center pr-48 pl-48">
            <div className="w-full flex justify-center items-center gap-20">
              <motion.img
                className="w-72"
                src="../../assets/images/iphone-background-3.svg"
                alt="iphone image"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
              />
              <div className="w-1/2 flex flex-col items-start justify-center gap-8">
                {/**headline */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    className="w-10"
                    src="../../assets/images/count-3.svg"
                    alt="count-3"
                  />
                  <p className="text-4xl text-white">
                    “<span style={{ color: "#C7EF4E" }}>Preserve</span> the
                    forest”
                  </p>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                  className="text-xl text-white geist-reg"
                >
                  Joining local sustainability efforts to helps to build a
                  greener future for all. Every action counts—get involved, make
                  a lasting impact, and inspire others to do the same. Start
                  today with enviro-pact.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        <footer className="text-center bg-white h-10 w-full">
          2024 EnviroPact
        </footer>
      </div>
    </>
  );
}

export default Homepage;