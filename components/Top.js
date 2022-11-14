import Image from "next/image";

const Top = () => {

    const laptop = "/black-friday.png";

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex md:flex-row flex-col-reverse md:gap-16 gap-8 text-[#f8f8ff]">
                <div className="md:w-1/2 w-full md:mt-20">
                    <h1 className="text-4xl md:w-[28rem]"><strong>Mshirika anayesaidia biashara yako kushindana kwenye chaneli za kidijitali</strong></h1> 
                    <p className="mt-4 mb-4 md:w-[28rem] text-3xl font-light italic">
                       Nyumba nzuri inafikiriwa vizuri! <span className="font-bold">Furahia ofa zetu za kipekee za Tovuti!</span>
                    </p>
                    <p className="mt-4 mb-4 md:w-[28rem] text-justify font-medium">
                        Ili kuendelea na watazamaji, makampuni mengi zaidi yanaweka kamari kuhusu uundaji wa njia za kidijitali za uhusiano na wateja.
                    </p>
                    <p className="mb-4 md:w-[28rem] text-justify font-medium" >
                        Uwepo wa mtandaoni ni zaidi ya kuwa na tovuti kwenye mtandao: ni muhimu kujenga mamlaka na uaminifu wa kampuni, kuwa kumbukumbu katika eneo lako.
                    </p>
                    <p className="mb-4 md:w-[28rem] text-justify font-medium" >
                        Yellow Pages itakusaidia kuunda Tovuti yako kupitia vifurushi vinavyokidhi mahitaji yako.
                    </p>
                </div>
                
                <Image src={laptop} width={1090} height={1000} alt="Black Friday" className="object-contain md:w-1/2 w-full" />
            </div>
        </div>
    )

}

export default Top;