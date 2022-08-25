import React, { useEffect, useState } from 'react'
import { XCircleIcon } from "@heroicons/react/solid";
import axios from 'axios';

const ModalCreateBarang = ({closeModal }) => {
    const [cateBarang, setCateBarang] = useState([])
    const [namaBarang, setNamaBarang] = useState("");
    const [hargaBarang, setHargaBarang] = useState("");
    const [stockBarang, setStockBarang] = useState("");
    const [deskripsiBarang, setDeskripsiBarang] = useState("");
    const [selectedOption, setSelectedOption] = useState(1);
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    const [NoImage, setNoImage] = useState("");

    console.log(file)

    useEffect(()=>{
        getData();

        return (
            ()=>{}
        )
    },[])

    const loadImage = (e) => {
        const image = e.target.files[0];
        setFile(image);
        setPreview(URL.createObjectURL(image));
    }
    
    const getData = async () =>{
        const respon = await axios.get('http://benotareact.rendycahyae.my.id/categoryBarang')
        setCateBarang(respon.data.Category)
    }

    const SimpanData = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama_barang", namaBarang);
        formData.append("harga_barang", hargaBarang);
        formData.append("id_category_barang", selectedOption);
        formData.append("stok_barang", stockBarang);
        formData.append("deskripsi_barang", deskripsiBarang);
        formData.append("file", file);
        try {
            await axios.post("http://benotareact.rendycahyae.my.id/barang", formData, {
                headers:{
                    "Content-type": "multipart/form-data"
                }
            });
            closeModal(false);
        } catch (error) {
            setNoImage(error.response.data.msg)
        }
    }



    return (
            <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed ">
                <div className="bg-white w-2/3 rounded-xl mx-auto my-4 xl:w-1/2 ">
                    <div className="border-b border-slate-400 ">
                        <div className="flex justify-between items-center p-3">
                            <p className="text-2xl font-bold">Tambah Barang</p>
                            <button onClick={()=> {closeModal(false)}}>
                                <XCircleIcon className="h-7 w-7" />
                            </button>
                        </div>
                    </div>
                    <form onSubmit={SimpanData} className='pb-4'>
                        <div className='mt-3 mx-4 border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="nama" className=''>Nama Barang : </label>
                                <input id='nama' type="text" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 ' onChange={(e) => setNamaBarang(e.target.value)} value={namaBarang}/>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="harga" className=''>Harga Barang : </label>
                                <input id='harga' type="number" className='mt-2 block border-2 border-slate-400 w-full rounded p-2'onChange={(e) => setHargaBarang(e.target.value)} value={hargaBarang} />
                            </div>
                        </div>
                        <div className='mt-3 mx-4 border-t border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="category" className=''>Category Barang : </label>
                                <select name="category" id="category" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 bg-white' value={selectedOption} onChange={e => setSelectedOption(e.target.value)} >
                                {
                                    cateBarang.map((hasil)=>(
                                        <option key={hasil.id_category} value={hasil.id_category}>{hasil.category}</option>
                                    ))
                                }
                                </select>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="stock" className=''>Stock Barang : </label>
                                <input id='stock' type="number" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 ' value={stockBarang} onChange={(e) => setStockBarang(e.target.value)} />
                            </div>
                        </div>
                        <div className='mt-3 mx-4 border-t border-slate-400 border-b'>
                            <div className='mx-5 mt-2 mb-2'>
                                <label htmlFor="deskripsi" className=''>Deskripsi Barang : </label>
                                <textarea id='deskripsi' type="text" className='mt-2 block border-2 border-slate-400 w-full rounded p-2 ' value={deskripsiBarang} onChange={(e) => setDeskripsiBarang(e.target.value)} ></textarea>
                                <small>Tulis deskripsi barang tanpa menggunakan emoticon.</small>
                            </div>
                        </div>
                        <div className='mt-3 mx-4'>
                            <div className='mx-5 mt-2 mb-4'>
                                <label htmlFor="foto" className=''>Foto Barang : </label>
                                <input id='foto' type="file" accept="image/*" name="file" className='mt-2 block border-2 border-slate-400 w-full rounded p-2' onChange={loadImage} />
                            </div>
                        </div>
                        {
                            NoImage != null ? (
                                <div className='mt-3 mx-4'>
                                    <div className='mx-5 mt-2 mb-4 text-red-500'>
                                        {NoImage}
                                    </div>
                                </div>
                            ) : ("")
                        }
                        {
                            preview ? (
                                <div className='mt-3 mx-4'>
                                    <div className='mx-5 mt-2 mb-4'>
                                        <img src={preview} className="w-1/3" alt="Preview IMG" />
                                    </div>
                                </div>
                            ) : ("")
                        }
                        
                        <div className="border-t border-slate-400 flex justify-end ">
                            <div className='mt-4 align-bottom mr-5'>
                                <button className='rounded px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:duration-300' type='submit'>SIMPAN</button>
                                <button className='ml-4 rounded px-3 py-2 border border-black text-black hover:bg-slate-600 hover:text-white hover:duration-300' onClick={()=>closeModal(false)} >CLOSE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default ModalCreateBarang