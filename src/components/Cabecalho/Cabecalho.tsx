import LogoGM from '../../assets/GM logo novo.png'
import LogoGM2 from '../../assets/icone global.png'
import { LuUserSquare2 } from "react-icons/lu";

const Cabecalho = () => {
    return (
        <>
            <header className=" flex w-screen bg-blkBlack-100 h-20 ">
                <div className=" flex justify-between px-10 items-center w-full">
                    <div className="flex items-center gap-8">
                        <div className="flex flex-col gap-1.5">
                            <div className="bg-white w-12 h-1.5 rounded" />
                            <div className="bg-blkBlack-400 w-8 h-1.5 rounded" />
                            <div className="bg-blkBlack-300 w-12 h-1.5 rounded" />
                        </div>

                        <img src={LogoGM} alt="Logo da GM" className="w-12" />
                    </div>
                    <div className="flex items-center gap-8">
                        <img src={LogoGM2} alt="Logo da GM 2" className="w-40 h-14" />
                        <LuUserSquare2 className="text-white size-14 " />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Cabecalho