import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Plus } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import tag from "../assets/tag.png";
const Cards = (item) => {
const {url, name, id, subname, amount, special} = item;
console.log(amount, special, name, subname);
  return (
       <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm flex"
    >
      <CarouselContent>
          <CarouselItem key={id} className="w-full h-full">
              <Card className="w-[350px] h-[350px] bg-cover p-0 m-2 overflow-clip">

                <img src={tag} className='z-10 absolute w-20 h-30 right-5 -top-5'/>
                 <img src={url} className="w-[350px] h-full rounded-xl bg-cover scale-200" />
                 <span className='z-11 absolute right-6 text-yellow-700 font-bold'>
                  <h1>Domino's</h1>
                  <h1 className='text-center'>Top 10</h1>
                 </span>
                 <span className='absolute z-10 top-60'>
                    <h1 className='text-slate-500 font-bold pl-5'>{name}</h1>
                    <h1 className="text-[12px] pl-2 text-slate-400">{subname ? subname: "hello"}</h1>
                 </span>
                 <span className='absolute right-7 top-[175px] text-white/90 bg-black/35 rounded-l-md font-bold'>
                  Customize<ChevronRight className='-right-5 top-0 absolute bg-black/35'/>
                 </span>
                 <span className='w-[348px] h-[70px] border-t-2 bg-black/30 p-4.5 border-white/40 inset-x-0 bottom-2 left-6.5 blur-2xs absolute rounded-bl-xl rounded-br-xl'>
                  <h1 className='text-[25px] absolute top-1.5 lining-nums slashed-zero text-bold text-white/70'>{amount}</h1>
                  <h1 className={special ? 'text-[13px] absolute top-9.5 underline decoration-dotted underline-offset-7 text-bold text-white': 'pt-5'}>{special}</h1>
                 </span>
                 <span className="absolute right-4.5 bottom-4.5">
                  <button className='bg-red-500 text-white px-8 py-2.5 rounded-xl cursor-pointer hover:bg-red-600'>Add<Plus className='absolute top-2.5 right-1 text-[10px]'/></button>
                 </span>
              </Card>
          </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default Cards;