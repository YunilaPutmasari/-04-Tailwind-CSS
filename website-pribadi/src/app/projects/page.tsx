import type { Metadata } from 'next';
import Image,{StaticImageData} from 'next/image';
import Image1 from '../../../public/images/project1.png';
import Image2 from '../../../public/images/project2.png';


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'employee',
    description: 'Kumpulan employee saya.',
    openGraph: {
      title: 'employee',
      description: 'Kumpulan employee saya.',
    },
  };
}

export default function Employee() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h2 className="font-bold text-4xl text-zinc-800">Proyek Saya</h2>
        <p className='text-base mt-6 text-zinc-600'>Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
      </header>
      <div className='mt-10'>
        <h2 className='text-2xl'>Aplikasi</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8'>
            <ProjectItem name='Aplikasi 1' url ='https://example.com/aplikasi1' urlDisplay="App Store"imageSrc={Image1}/>
            <ProjectItem name='Aplikasi 2' url ='https://example.com/aplikasi2' urlDisplay="App Store"imageSrc={Image2}/>
        </ul>
      </div>
    </div>
  );
}

type ProjectItemProps = { 
    name: string; 
    url: string; 
    urlDisplay: string; 
    imageSrc: StaticImageData; 
  };
  
  function ProjectItem({ name, url, urlDisplay, imageSrc }: ProjectItemProps) { 
    return ( 
      <li> 
        <a href={url} target="_blank" rel="noopener noreferrer"> 
          <div className="max-w-sm rounded overflow-hidden shadow-lg"> 
          <Image className="w-40 h-40 object-cover" src={imageSrc} alt={name} />

            <div className="px-6 py-4"> 
              <div className="font-bold text-xl mb-2">{name}</div> 
            </div> 
            <div className="px-6 pb-4"> 
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> 
                {urlDisplay}
              </span> 
            </div> 
          </div> 
        </a> 
      </li> 
    ); 
  }
  
