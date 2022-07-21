import React, { useEffect, useState } from 'react'

const FormRincianBarang = ({barang}) => {
    {
        
    }
    // const [total_harga, setTotalHarga] = useState(0);
    // console.log(barang);
    // useEffect(()=>{
    //     const total_harga = barang.map(harga => harga.harga_barang).reduce((hargaSebelum,hargaSesudah) => hargaSebelum+hargaSesudah);
    //     console.log(total_harga)
    // },[barang]);

    return (
        <div className='clear-both mt-2'>
            {/* table Kosong */}
                <div className="grid grid-cols-6  bg-slate-200 w-full border-y-2 border-slate-400 space-b">
                    <div className="col-span-2 text-left py-2 px-2 font-bold">Barang/Jasa</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Deskripsi</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Banyak</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Harga</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Total</div>
                </div>
                {
                    barang.length > 0 ? 
                    <div>
                        {
                            barang.map((data) => (
                                <div className="grid grid-cols-6 w-full border-b-2 border-slate-400 space-b" key={data.id}>
                                    <div className="col-span-2 text-left py-2 px-2">{data.nama_barang}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{data.deskripsi}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{data.banyak_barang}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.harga_barang)}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.total_harga)}</div>
                                </div>
                            ))
                        }
                    </div>
                    : 
                        <div className="grid grid-cols-6 w-full border-b-2 border-slate-400 space-b">
                            <div className="col-span-2 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                        </div>   
                }
                <div className="grid grid-cols-6 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-4 text-right py-2 px-2 font-bold">Total :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">1234</div>
                </div>
                
                
        </div>
    )
}

export default FormRincianBarang