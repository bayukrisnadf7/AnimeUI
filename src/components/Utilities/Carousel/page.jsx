"use client";
import { Carousel } from "flowbite-react";
// import { CustomFlowbiteTheme } from "flowbite-react";
export function CarouselView() {
  // const customTheme = CustomFlowbiteTheme = {
  //   "indicator": {
      
  //   }
  // }
  return (
    <div className="h-72 w-full">
      <Carousel>
        <img src="thumb-1920-1078843.jpg" alt="..." />
        {/* <img src="beautiful-sad-anime-2304-x-864-6xewsjewfugmmy7h.jpg" alt="..." /> */}
        <img src="anime-fanart-3840-x-1440-u226bwwsa30cleuy.jpg" alt="..." />
      </Carousel>
    </div>
  );
}
