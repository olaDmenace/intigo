import React from 'react'
import BG from './images/headerImage.png'
import Button from './components/Button'
import NavBar from './components/NavBar'
import MobileNavBar from './components/MobileNavBar'
import Head from './images/image.png'
import Cart from './images/cart.png'
import Chart from './images/Chart.png'
import Infinity from './images/Infinity.png'
import IconBox from './components/IconBox'
import Image from './images/Downloader.png'
import Image2 from './images/Image2.png'
import ImageBox from './components/ImageBox'
import Consume from './images/consumer.png'
import Consume1 from './images/Consumer1.png'
import Doodle from './images/Doodle.png'
import Web from './images/Web.png'
import Con from './images/conveyor.png'
import Dev from './images/devices.png'
import Carousel from './components/Carousel'
import Gallery from './components/Gallery'
import Model from './images/Model.png'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

function Homepage() {
    return (
        <div>
            <div className='h-screen w-full bg-[#1A002D] relative grid text-white'>
                <img className='h-screen w-full absolute mix-blend-multiply' src={BG} alt="" />
                <div>
                    <NavBar />
                    <MobileNavBar />
                </div>
                <div className='relative text-left grid md:grid-cols-2 md:grid-flow-col items-center px-10 md:px-14'>
                    <div className='space-y-5'>
                        <motion.h1
                            initial={{opacity: 0, y: '-4vw'}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.09, duration: 1}}
                            className='text-2xl md:text-4xl font-semibold'>Turn Your Digital Assets<br />Into Physical Products</motion.h1>
                        <motion.p
                            initial={{opacity: 0, y: '-4vw'}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 1, duration: 1}}>
                                At Intigo 3D we transform 3D assets into bespoke physical products and replicas. Our
                                Morph™ dashboard gives brands the ability to onboard, quote, design, and morph their
                                digital assets into physical 3D printed products.
                        </motion.p>
                        <Button text='Marketplace' />
                    </div>
                    <img className='hidden md:block h-96 space-y-5 justify-self-center' src={Head} alt="" />
                </div>
            </div>
            <div className='bg-[#FFF1FE] px-10 md:px-14'>
                <div className='gap-5 grid py-5 md:py-10 md:grid-flow-col'>
                    <IconBox img={Cart} header={'Monetize the Hype'} text={'Speed to market (weeks vs. months)'} />
                    <IconBox img={Chart} header={'No Overhead Risk'} text={'(exact short runs/on demand)'} />
                    <IconBox img={Infinity} header={'Breaking the Mould'} text={'(Unlimited Options & Variations)'} />
                </div>
                <div className='space-y-10 py-16'>
                    <div className='md:flex flex-row gap-5 items-center'>
                        <img className='md:h-2/4 md:w-2/4 basis-1' src={Image} alt="" />
                        <div className='text-left space-y-8'>
                            <h4 className='font-semibold text-2xl text-[#7700CF]'>Gaming , Collectibles, & web 3.0</h4>
                            <p className='text-[#161414]'>Intigo offers brands, creators, gaming companies, Web 3.0 and collectibles a bridge to create a physical product from a digital design
                                asset. Use our dashboard to Mint 3D files & offer NFT’s with a physical purpose. Attach a QR code
                                or RFID chip to authenticate it. We even offer custom packaging.
                            </p>
                            <Button text={'Get Started'} />
                        </div>
                    </div>
                    <div className='md:flex flex-row gap-5 items-center md:flex-row-reverse'>
                        <img className='md:h-2/4 md:w-2/4 basis-1' src={Image2} alt="" />
                        <div className='text-left space-y-6'>
                            <h4 className='font-semibold text-2xl text-[#7700CF]'>Commercial Products</h4>
                            <p className='text-lg text-[#7700CF]'>(Automotive, Medical, industrial parts)</p>
                            <p className='text-[#161414]'>We help our brands & Creators successfully commercialise
                                their digital products by creating 3D prototypes, or short-run, low volume 3D
                                manufactured parts to prove their product concept & sell.
                            </p>
                            <Button text={'Get Started'} />
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className='font-semibold text-2xl text-center text-[#7700CF]'>The Perfect Partner for All Industries</h4>
                    <div className='md:flex gap-5 py-16 space-y-5 md:space-y-0'>
                        <ImageBox img={Consume} heading={'Consumer Products'} />
                        <ImageBox img={Consume1} heading={'Commercial Products'} />
                        <ImageBox img={Doodle} heading={'Convertibles & Figures'} />
                        <ImageBox img={Web} heading={'Web 3 and Gaming'} />
                        <ImageBox img={Con} heading={'Industrial Products'} />
                        <ImageBox img={Dev} heading={'Electronic Products'} />
                    </div>
                </div>
            </div>
            <div className='bg-[#1A002D] py-10 px-10 md:px-14'>
                <div className='flex justify-between'>
                    <h4 className='text-white font-semibold text-2xl'>Collection</h4>
                    <Button text={'Get Started'} />
                </div>
                <div className='pt-16'>
                    <Carousel />
                </div>
                <div className='space-y-5 md:flex justify-between pt-5'>
                    <h4 className='text-white font-semibold text-2xl md:w-1/2'>
                        List your creations & physical products on our marketplace to sell to the world.
                    </h4>
                    <Button text={'Get Started'} />
                </div>
                <div>
                    <Gallery />
                </div>
            </div>
            <div className='bg-[#FFF1FE] px-10 py-10 md:px-14'>
                <div className='md:flex flex-row gap-5 items-center'>
                    <img className='md:w-1/2 md:h-1/3' src={Model} alt="" />
                    <div className='text-left space-y-8 basis-1/2'>
                        <h4 className='font-semibold text-2xl text-[#7700CF]'>
                            Work with the intigo team on Bespoke Projects
                        </h4>
                        <p className='text-[#161414]'>I
                            Work with the intigo team to bring something new to life with an all inclusive cost. The Intigo
                            Manufacturing Network has an array of machines & materials to choose from. Though
                            certain processes may not be streamlined for the Intigo Assembly Line, the Intigo team will
                            help create a process for your project to Design, Build, & streamline for your product needs.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#1A002D] py-12 px-10 md:px-14 space-y-10'>
                <p className='text-white md:w-4/6 w-5/5 text-center mx-auto'>
                    Intigo has received multiple patents based on security and trust to ensure 
                    that your creations and work is secure while ensuring parties are paid for their efforts
                    throughout the supply chain. Intigo 3D was awarded (3) 20 year, nonprovisional patent by the US Government
                    (US Patent #10,546,105) for an Inventory Control and Distribution System for 3D Designs & 3D Printers.
                </p>
                <hr className='text-[#AC9CB8] w-4/5 md:w-2/3 mx-auto' />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Homepage