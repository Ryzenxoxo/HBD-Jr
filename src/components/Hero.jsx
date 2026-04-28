import React from "react";
import { motion } from "motion/react";
import Music from "./Music";
import { Carousel } from "@material-tailwind/react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
const images = [
  { src: img1, alt: "img1.jpg" },
  { src: img2, alt: "img2.jpg" },
  { src: img3, alt: "img3.jpg" },
  { src: img4, alt: "img4.jpg" },
  { src: img5, alt: "img5.jpg" },
  { src: img6, alt: "img6.jpg" },
]

function Hero() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div className="text-center p-2">
                <div className="text-center bg-white rounded-xl shadow-xl mt-5 mx-3 lg:mx-20">
                    <div className="rounded-full bg-pink-100 inline-flex items-center justify-center w-28 h-28 mt-5">
                        <p className="text-5xl">🎂</p>
                    </div>
                    <div className="p-10">
                        <h1 className="text-5xl md:text-5xl font-semibold text-blue-400">
                            Happy Birthday
                        </h1>
                        <button
                            variant="gradient"
                            onClick={handleOpen}
                            className="text-3xl md:text-4xl font-semibold text-pink-200 hover:underline hover:text-pink-400 duration-300 cursor-pointer"
                        >
                            คุณจิตรัตน์🎉
                        </button>
                    </div>
                    <Music />
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                            opacity: [1, 0.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut",
                        }}
                    >
                        <span style={{ fontSize: "50px" }}>📸</span> {/* Emoji */}
                    </motion.div>
                    <div className="flex items-center justify-center w-full p-10 h-[400px] md:h-[700px]">
                        <Carousel className="rounded-xl w-full max-w-4xl">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image.src}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                backdropProps={{
                    className: "fixed inset-0 z-50 backdrop-blur-md bg-black/30",
                }}
            >  <DialogHeader className="sriracha-regular text-lg text-blue-500">
                    Lorem ipsum dolor sit amet.
                </DialogHeader>
                <DialogBody className="sriracha-regular text-xl text-gray-700">
                    Lorem ipsum dolor sit. 🎉🎉
                </DialogBody>
                <DialogFooter>
                    <Button variant="gradient" color="pink" onClick={handleOpen}>
                        <span className="font-medium">Ok</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default Hero;
