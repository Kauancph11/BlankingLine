import { TbBadgeFilled } from "react-icons/tb";
import { RiLayoutMasonryFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { HiCalculator } from "react-icons/hi";
import { LuFingerprint } from "react-icons/lu";

const MenuLateral = () => {
    return (
        <>
            <aside className="bg-blkAside w-72 h-screen fixed">
                <section className="flex flex-col items-center h-full">
                    <ul className="justify-evenly flex flex-col h-3/5">
                        <li className="flex items-center gap-1.5">
                            <TbBadgeFilled className="size-10 text-black"/>
                            <span className="text-white text-lg">Qualidade do Produto (PQS)</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <RiLayoutMasonryFill className="size-9 text-black"/>
                            <span className="text-white text-lg">Layout das Mesas</span> 
                        </li>
                        <li className="flex items-center gap-1.5">
                            <FaChartPie className="size-9 text-black"/>
                            <span className="text-white text-lg">Programa de produção</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <HiCalculator className="size-9 text-black"/>
                            <span className="text-white text-lg">Calculadora de Blanks</span>
                        </li>
                        <li className="flex items-center gap-1.5">
                            <LuFingerprint className="size-9 text-black"/>
                            <span className="text-white text-lg">Cadastrar Novo Materíal</span>
                        </li>
                    </ul>
                </section>
            </aside>
        </>
    )
}
export default MenuLateral