import Image from 'next/image'
import Menuzinho from '@/components/menu'
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function Home() {
  return (
    <main className='w-screen h-full overflow-x-hidden bg-brickwall bg-stylish'>
      {/* cabeçalho */}
      <div className='flex justify-center items-center translate-[50%] text-[4rem] h-[330px] w-[100%] bg-[rgba(0,0,0,0.666)] bg-fundoPastel bg-cover bg-center bg-no-repeat bg-blend-multiply'>
        <div className='relative left-[50dvw] text-white'>
          <Menuzinho />
        </div>
        <h1 className='text-white text-5rem'>Cárdapio</h1>
      </div>
      {/* conteudo principal */}
      <div className='w-screen flex flex-wrap justify-center bg-brickwall bg-stylish pt-5'>
        <div className='w-[90vw] h-[80px] bg-white shadow-2xl rounded-xl flex items-center justify-around overflow-hidden text-slate-700 text-[2rem]'>
          <div className='h-full w-full flex justify-center items-center border-r-4 transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
            <a href='#pasteis' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Pasteis</a>
          </div>
          <div className='h-full w-full flex justify-center items-center border-r-4 transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
            <a href='#doce' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Doce</a>
          </div>
          <div className='h-full w-full flex justify-center items-center border-r-4 transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
            <a href='#refri' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Refri</a>
          </div>
          <div className='h-full w-full flex justify-center items-center transition-all duration-150 hover:bg-slate-100 hover:cursor-pointer hover:text-[2.3rem]'>
            <a href='#aguas' className='w-full h-full flex justify-center items-center align-middle text-center hover:text-slate-900'>Àguas</a>
          </div>
        </div>

        <div className='p-0 mb-1 flex flex-col basis-full items-center justify-center'>
          <div id="pasteis" className='h-full bg-center flex flex-col text-center pt-[20px] pb-[50px]'>
            <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Pasteis</h1>
            <div className='p-0 mb-[50px] m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
              {[
                ['/pastelDeCarne.jpg', 'Pastel de carne', 'um pastel feito de carne moida', "16,00"],
                ['/pastel de queijo.webp', 'Pastel de queijo', 'massa fina e crocante, é recheado com uma combinação deliciosa de  queijo derretido.', "15,00"],
                ['/pastel de frango.jpg', 'Pastel de frango', 'pastel feito com frango desfiado.', "14,00"],
                ['/presunto e queijo.jpg', 'Pastel de presunto e queijo', 'massa fina e crocante, é recheado com uma combinação deliciosa de presunto e queijo derretido.', "13,00"],
              ].map(([img, titulo, texto, valor], index) => (
                <Popover>
                  <PopoverTrigger className='p-0 basis-0 grow-0 relative bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                    <img src={img} className='aspect-square h-full max-h-[200px] p-2 rounded-xl float-right' />
                    <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                    <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                      <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px] h-520px">
                    <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                      <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                      <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                      <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    </div>
                    <div className='flex flex-col scale-90'>
                      <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                      <div className='pl-[10px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Adicionais</h2>
                        <h3 className=''>Quer algum adicional?</h3>
                      </div>
                      <div className='mt-[25px] ml-[10px] text-[20px]'>
                        blah <br />
                        blah <br />
                        blah <br />
                        blah <br />
                      </div>
                      <div className='pl-[10px] mt-[25px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Observação</h2>
                        <h3>Utilize somente para observações.</h3>
                      </div>
                      <Textarea placeholder="Observação para produto" className="m-[5px] my-[10px]" />
                      <button className='botao ml-[10px] mt-[10px]'>Adicionar ao carrinho</button>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>

          <div id="doce" className='h-full bg-center flex flex-col text-center pb-[50px]'>
            <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Doce</h1>
            <div className='p-0 m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
              {[
                ['/pastel de chocolate.jpg', 'Pastel doce', 'recheio chocolate creme de avelã.', "12,00"],
              ].map(([img, titulo, texto, valor], index) => (
                <Popover>
                  <PopoverTrigger className='p-0 basis-0 grow-0 relative bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                    <img src={img} className='aspect-square h-full max-h-[200px] p-2 rounded-xl float-right' />
                    <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                    <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                      <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px]">
                    <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                      <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                      <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                      <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    </div>
                    <div className='flex flex-col scale-90'>
                      <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                      <div className='pl-[10px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Adicionais</h2>
                        <h3 className=''>Quer algum adicional?</h3>
                      </div>
                      <div className='mt-[25px] ml-[10px] text-[20px]'>
                        blah <br />
                        blah <br />
                        blah <br />
                        blah <br />
                      </div>
                      <div className='pl-[10px] mt-[25px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Observação</h2>
                        <h3>Utilize somente para observações.</h3>
                      </div>
                      <Textarea placeholder="Observação para produto" className="m-[5px] my-[10px]" />
                      <button className='botao ml-[10px]'>Adicionar ao carrinho</button>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>

          <div id="refri" className='h-full bg-center flex flex-col text-center pb-[50px]'>
            <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Refris</h1>
            <div className='p-0 m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
              {[
                ['/coca cola 1l.png', 'refrigerante 1l', '', '10,00'],
              ].map(([img, titulo, texto, valor], index) => (
                <Popover>
                  <PopoverTrigger className='p-0 basis-0 grow-0 relative bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                    <img src={img} className='aspect-square h-full max-h-[200px] p-2 rounded-xl float-right' />
                    <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                    <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                      <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px]">
                    <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                      <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                      <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                      <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    </div>
                    <div className='flex flex-col scale-90'>
                      <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                      <div className='pl-[10px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Adicionais</h2>
                        <h3 className=''>Quer algum adicional?</h3>
                      </div>
                      <div className='mt-[25px] ml-[10px] text-[20px]'>
                        blah <br />
                        blah <br />
                        blah <br />
                        blah <br />
                      </div>
                      <div className='pl-[10px] mt-[25px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Observação</h2>
                        <h3>Utilize somente para observações.</h3>
                      </div>
                      <Textarea placeholder="Observação para produto" className="m-[5px] my-[10px]" />
                      <button className='botao ml-[10px]'>Adicionar ao carrinho</button>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>

          <div id="aguas" className='h-full bg-center flex flex-col text-center pb-[50px]'>
            <h1 className='text-black text-[3rem] pb-2 font-black tracking-wide select-none'>Águas</h1>
            <div className='p-0 m-0 h-full w-[90dvw] grid grid-cols-2 gap-[30px] justify-center text-start'>
              {[
                ['/agua mineral.png', 'agua mineral', '', '2,00'],
                ['/Aquarius fresh limão 500ml.png', 'Aquarius fresh limão 500ml', '', '6,00'],
                ['/agua com gás.png', 'agua com gás', '', '3,50'],
              ].map(([img, titulo, texto, valor], index) => (
                <Popover>
                  <PopoverTrigger className='p-0 basis-0 grow-0 relative bg-white rounded-xl shadow-md hover:shadow-2xl cursor-pointer select-none'>
                    <img src={img} className='aspect-square h-full max-h-[200px] p-2 rounded-xl float-right' />
                    <h2 className='text-[2rem] font-black mb-[5px] px-[0.625rem] pt-[8px] text-2'>{titulo}</h2>
                    <p className='pl-[10px] pb-[15px] mb-[2.5rem] text-[1.5rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    <span className='absolute bottom-0 left-0 text-[1.5rem] font-[700] pb-[10px] px-[10px] text-[#909090] self-start'>POR:
                      <small className='pl-4 pb-[10px] px-[10px] text-[1.5rem] text-black'>R$: {valor}</small>
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="bg-white rounded-xl shadow-md grid grid-cols-2 w-[720px]">
                    <div className='flex flex-col justify-center items-center border-r-2 border-slate-300'>
                      <h2 className='text-[1.5rem] font-black mb-[5px] px-[0.625rem] pt-[8px]'>{titulo}</h2>
                      <img src={img} className='max-h-[250px] aspect-auto p-2 rounded-xl float-right' />
                      <p className='pl-[10px] pb-[15px] text-[1.3rem] text-slate-600 whitespace-pre-line break-words'>{texto}</p>
                    </div>
                    <div className='flex flex-col scale-90'>
                      <h2 className='text-[1.5rem] font-black mb-[15px] px-[0.625rem] pt-[8px] self-center'>FAÇA SEU PEDIDO</h2>
                      <div className='pl-[10px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Adicionais</h2>
                        <h3 className=''>Quer algum adicional?</h3>
                      </div>
                      <div className='mt-[25px] ml-[10px] text-[20px]'>
                        blah <br />
                        blah <br />
                        blah <br />
                        blah <br />
                      </div>
                      <div className='pl-[10px] mt-[25px] ml-[10px] bg-slate-200'>
                        <h2 className='text-[1.5rem] font-black'>Observação</h2>
                        <h3>Utilize somente para observações.</h3>
                      </div>
                      <Textarea placeholder="Observação para produto" className="m-[5px] my-[10px]" />
                      <button className='botao ml-[10px]'>Adicionar ao carrinho</button>
                    </div>
                  </PopoverContent>
                </Popover>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


