import React, { useState, useEffect } from "react";
import search from "../utils/API";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/css/bundle';
import '../assets/styles/swiperStyles.css';

export default function Home() {

    return (
        <>
            <Swiper
                className="mySwiper w-[100vw] h-[100vh] "
            >
                <SwiperSlide>
                    <div
                        className="bg-gray-500 justify-center items-center flex flex-col h-[100vh] w-[100vw]"
                    >
                        <h1
                            className="text-center font-bold text-gray-900"
                        >Welcome to DnD Manager</h1>
                        <p
                            className="text-center font-bold text-gray-900"
                        >Log In to start managing your character or swipe to the right to search our database</p>
                        <Link to="/login">
                            <button
                                className="bg-gray-900 text-white p-4 rounded-md"
                            >Log In</button>
                        </Link>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    Slide 2
                </SwiperSlide>

            </Swiper>

        </>
    );





}