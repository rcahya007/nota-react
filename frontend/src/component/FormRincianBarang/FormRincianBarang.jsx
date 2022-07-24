import React, { useEffect, useState } from 'react'

const FormRincianBarang = ({barang}) => {
    const [total_harga, setTotalHarga] = useState(0);
    const [metod_pembayaran, setMetodPembayaran] = useState('')
    const [jenis_transaksi, setJenisTransaksi] = useState('')
    const [pembeli, setPembeli] = useState('')
    const [dibayar, setDibayar] = useState(0)
    const [kembali, setKembali] = useState(0)
    
    const handleMetode = (e) => {
        
    }

    useEffect(()=>{
        if(barang.length>0){
            const total_harga = barang.map(harga => harga.total_harga).reduce((hargaSebelum,hargaSesudah) => hargaSebelum+hargaSesudah);
            setTotalHarga(total_harga);
        }        
    },[barang])    

    return (
        <div className='clear-both mt-2'>
            {/* table Kosong */}
                <div className="grid grid-cols-7  bg-slate-200 w-full border-y-2 border-slate-400 space-b">
                    <div className="col-span-2 text-left py-2 px-2 font-bold">Barang/Jasa</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Deskripsi</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Banyak</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Harga</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Sub Total</div>
                    <div className="col-span-1 text-left py-2 px-2 font-bold">Action</div>
                </div>
                {
                    barang.length > 0 ? 
                    <div>
                        {
                            barang.map((data) => (
                                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b" key={data.id}>
                                    <div className="col-span-2 text-left py-2 px-2">{data.nama_barang}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{data.deskripsi}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{data.banyak_barang}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.harga_barang)}</div>
                                    <div className="col-span-1 text-left py-2 px-2">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(data.total_harga)}</div>
                                    <div className="col-span-1 text-left py-2 px-2">EDIT | HAPUS</div>
                                </div>
                            ))
                        }
                    </div>
                    : 
                        <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                            <div className="col-span-2 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                            <div className="col-span-1 text-left py-2 px-2">..............</div>
                        </div>   
                }
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">TOTAL :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">{new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(total_harga)}</div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">Metode Pembayaran :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input type="radio" name="metode_pembayaran" id="Cash" value='Cash' onChange={handleMetode} />
                        <label htmlFor="Cash"> Cash</label><br></br>
                        <input type="radio" name="metode_pembayaran" id="Transfer" value='Transfer' onChange={handleMetode}/>
                        <label htmlFor="Transfer"> Transfer</label><br></br>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">Jenis Transaksi :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input type="radio" name="jenis_transaksi" id="Pemasukkan" value='Pemasukkan' />
                        <label htmlFor="Pemasukkan"> Pemasukkan</label><br></br>
                        <input type="radio" name="jenis_transaksi" id="Pengeluaran" value='Pengeluaran' />
                        <label htmlFor="Pengeluaran"> Pengeluaran</label><br></br>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">
                        <label htmlFor="Pembeli">Pembeli :</label>
                    </div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input className='w-full border-2 rounded-md' type="text" id="Pembeli" name="Pembeli"/>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">
                        <label htmlFor="dibayar">Dibayar :</label>
                    </div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <input className='w-full border-2 rounded-md' type="number" id="dibayar" name="dibayar"/>
                    </div>
                </div>
                <div className="grid grid-cols-7 w-full border-b-2 border-slate-400 space-b">
                    <div className="col-span-5 text-right py-2 px-2 font-bold">Kembali :</div>
                    <div className="col-span-2 text-left py-2 px-2 font-bold">
                        <p>...</p>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-5'>
                    <button className='bg-amber-400 py-2 px-6 rounded-md hover:bg-amber-500 border-2 border-white duration-300 hover:border-2 hover:border-black'>
                        Simpan {`&`} Print
                    </button>
                </div>
                
                
        </div>
    )
}

export default FormRincianBarang