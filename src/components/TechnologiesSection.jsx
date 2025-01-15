import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';


const TechnologiesSection = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
                <SiMongodb className='px-4 w-28 h-28 text-7xl text-green-400' />
                <FaReact className='px-4 w-28 h-28 text-cyan-400 text-7xl' />
                <TbBrandNextjs className='px-4 w-28 h-28 text-white text-7xl' />
                <BiLogoPostgresql className='px-4 w-28 h-28 text-7xl text-sky-700' />
                <FaNodeJs className='px-4 w-28 h-28 text-7xl text-green-500 ' />
                <RiTailwindCssFill className='px-4 w-28 h-28 text-7xl text-sky-500 ' />
        </div>
    </div>
  )
}

export default TechnologiesSection