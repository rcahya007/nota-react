import React from 'react'

const FormRincianBarang = ({barang}) => {
    return (
        <div className='clear-both mt-2'>
            {/* table Kosong */}
                <div className="grid grid-cols-5 gap-5 bg-slate-200 w-full border-y-2 border-slate-400 space-b">
                    <div className="cols-span-1 text-left py-2 px-2">Barang/Jasa</div>
                    <div className="cols-span-1 text-left py-2 px-2">Deskripsi</div>
                    <div className="cols-span-1 text-left py-2 px-2">Harga</div>
                    <div className="cols-span-1 text-left py-2 px-2">Banyak</div>
                    <div className="cols-span-1 text-left py-2 px-2">Total</div>
                </div>
                {
                    barang.length > 0 ? 
                    <div>
                        {
                            barang.map((data) => (
                                <div className="grid grid-cols-5 gap-5 w-full border-b-2 border-slate-400 space-b" key={data.id}>
                                    <div className="cols-span-1 text-left py-2 px-2">{data.nama_barang}</div>
                                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                                </div>
                            ))
                        }
                    </div>
                    : 
                        <div className="grid grid-cols-5 gap-5 w-full border-y-2 border-slate-400 space-b">
                            <div className="cols-span-1 text-left py-2 px-2">..............</div>
                            <div className="cols-span-1 text-left py-2 px-2">..............</div>
                            <div className="cols-span-1 text-left py-2 px-2">..............</div>
                            <div className="cols-span-1 text-left py-2 px-2">..............</div>
                            <div className="cols-span-1 text-left py-2 px-2">..............</div>
                        </div>   
                }
                
        </div>
    )
}

export default FormRincianBarang