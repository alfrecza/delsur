import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo-color.webp'

function App() {
  const [dni, setDni] = useState('')

  return (
    <div className='bg'>
      <main className='main'>
          <img src={logo} alt="logo" />
          <form className='form mt-10' >
            <div className='flexFormUno '>
              <select name="" id="" className='selectUno border border-gray-400'>
                <option value="01">V</option>
                <option value="08">E</option>
                <option value="04">J</option>
                <option value="02">P</option>
                <option value="10">G</option>
                <option value="11">C</option>
              </select>
              <div className='flex items-center'>
                  <input type="password" placeholder='Documento de identidad' className='inputText border border-gray-400' value={dni} onChange={e => setDni(e.target.value)}/>
                  <i className='border p-[0.5rem] border-gray-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                  </i>
              </div>
            </div>

            <select className={`inputText w-full border border-gray-400 inputText bg-white mt-3 ${dni.length >= 9 ? 'block' : 'hidden'}`}>
              <option value="">Seleccione un Perfil</option>
              <option value="Master Único">Master Único</option>
              <option value="Master">Master</option>
              <option value="Operador">Operador</option>
              <option value="Aprobador">Aprobador</option>
              <option value="Master Usuario">Master Usuario</option>
            </select>
            <div className={`flex items-center mt-3 ${dni.length >= 9 ? 'flex' : 'hidden'}`}>
                <input type="password" placeholder='Nombre de Usuario Jurídico' className=' w-full inputText border border-gray-400' />
                <i className='border p-[0.5rem] border-gray-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </i>
            </div>
            <div className={`mt-3 ${dni.length >= 9 ? 'flex' : 'hidden'}`}>
              <input type="password" placeholder='Ingrese su contraseña' className=' w-full inputText border border-gray-400'/>
                <i className='border p-[0.5rem] border-gray-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                </i>
            </div>

            <button type='submit' className='bg-amber-500 text-center block w-32 mx-auto mt-6 py-2 text-white font-semibold border border-green-700'>Ingresar</button>
          </form>

        <div className='flex gap-x-2 mt-12 w-full mx-auto justify-center items-center flex-col md:flex-row gap-y-3'>
          <a href='#' className='text-red-600 border-y border-red-600 py-3 w-1/5 text-center h-12'>REGISTRO</a>
          <div className='flex'>
            <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
              </svg>
            </i>
            <a href='#'>Olvidé la contraseña </a>
          </div>
          <div className='flex'>
            <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75M3.75 21.75h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            </i>
            <a href='#'>  Desbloqueo de usuario</a>
          </div>
          <div className='flex'>
            <i><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            </i>
            <a href='#' className=''>Olvido Usuario Master</a>
          </div>
          
          

        </div>
      </main>
      <div className='text-sm text-gray-500 mt-16 font-semibold'>
          <p>Para mayor informacion escribenos a</p>
          <p>contactodelsur@delsur.com.ve</p>
          <p>RIF: J-00079723-4</p>
        </div>
    </div>
  )
}

export default App
