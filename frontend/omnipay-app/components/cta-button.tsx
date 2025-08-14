import { CTAButtonProps } from "@/types/types";
import { Button } from "@/components/button";

export function CTAButton({ activeTab }: CTAButtonProps) {
  return (
    <div className="flex flex-row justify-center items-center p-[10px] gap-[10px] w-[300px] h-[100px] flex-none order-4 flex-grow-0">
      <Button
        size="lg"
        className="border-0 hover:bg-emerald-500 transition-colors duration-300 flex-none flex flex-row items-center w-[400px] h-[60px] bg-[#49E199] rounded-xl py-[10px] px-0 gap-[5px] flex-none order-0 flex-grow-0"
      >
        <span className="font-share font-normal text-xl leading-[23px] text-center  justify-center tracking-[0.12em] uppercase text-[#1A1A2E] flex-none order-0 flex-grow-0">
          GET STARTED AS A {activeTab.toUpperCase()}
        </span>
      </Button>
    </div>
  )
}