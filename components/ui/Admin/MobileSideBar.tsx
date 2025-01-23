"use client";
import React, { useEffect, useState, useRef } from "react";
import CustomButton from "@/components/module/CustomButton";
import Logout from "./Logout";
import Navbar from "./navbar";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";

const MobileSideBar = () => {
    const [menu, showMenu] = useState<boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        // اگر کلیک خارج از منو بود، منو بسته شود
        if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
            showMenu(false);
        }
    };

    useEffect(() => {
        if (menu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menu]);

    return (
        <>
            <aside
                ref={sidebarRef}
                className={`flex p-3 pb-4 fixed lg:hidden ${menu ? "right-0" : "-right-full"} 
                transition-all bg-[#fff] z-20 items-center flex-col gap-3 shadow-custom 
                rounded-lg w-2/3 lg:w-full border-gray-800`}
            >
                <div className="my-b w-full border-b pb-3 flex items-center justify-between">
                    <h3 className="text-20 xl:text-24 font-semibold">پنل ادمین</h3>
                    <Logout />
                </div>
                <Link href={'/admin/dashboard/add-project'} className="w-full p-2 rounded-md text-center bg-purple-300 text-purple-800 font-bold">
                    اضافه کردن پروژه
                </Link>
                <Navbar />
            </aside>
            <CustomButton
                onClick={() => showMenu(true)}
                className="absolute z-10 lg:hidden top-1 right-1 !p-0 min-w-0 min-h-0 w-10 h-10 bg-black !text-white text-24 !rounded-full"
            >
                <CgMenuRightAlt size={20} />
            </CustomButton>
        </>
    );
};

export default MobileSideBar;
