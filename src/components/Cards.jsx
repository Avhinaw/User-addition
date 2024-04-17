import React from "react";
import Card from "./Card";

const Cards = ({users})=>{
    return(
        <>
            <div className="w-full h-[34vh] bg-zinc-300 p-4 flex flex-wrap justify-center gap-7 overflow-auto ">
            {users.map((item, idx)=>{
                return <Card users={item} key={idx}/>
            })}
            </div>
        </>
    )
}

export default Cards;