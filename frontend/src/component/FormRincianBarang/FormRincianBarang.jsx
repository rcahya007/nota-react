import React from 'react'

const FormRincianBarang = () => {
    return (
        <div className='clear-both mt-2'>
            {/* table Kosong */}
                <div className="grid grid-cols-5 gap-5 bg-slate-200 w-full border-t-2 border-slate-400 space-b">
                    <div className="cols-span-1 text-left py-2 px-2">Barang/Jasa</div>
                    <div className="cols-span-1 text-left py-2 px-2">Deskripsi</div>
                    <div className="cols-span-1 text-left py-2 px-2">Harga</div>
                    <div className="cols-span-1 text-left py-2 px-2">Banyak</div>
                    <div className="cols-span-1 text-left py-2 px-2">Total</div>
                </div>
                <div className="grid grid-cols-5 gap-5 w-full border-y-2 border-slate-400 space-b">
                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                    <div className="cols-span-1 text-left py-2 px-2">..............</div>
                </div>
        </div>
    )
}

export default FormRincianBarang