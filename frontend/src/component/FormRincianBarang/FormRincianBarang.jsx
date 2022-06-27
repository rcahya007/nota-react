import React from 'react'

const FormRincianBarang = () => {
    return (
        <div className='clear-both mt-2'>
            {/* table Kosong */}
            <div className="table w-full border-b-2 border-slate-400">
                <div className="table-header-group ...">
                    <div className="table-row bg-slate-200 font-bold ">
                        <div className="table-cell text-left py-2 px-2 border-y-2 border-slate-400 ">Barang/Jasa</div>
                        <div className="table-cell text-left border-y-2 border-slate-400">Deskripsi</div>
                        <div className="table-cell text-left border-y-2 border-slate-400">Harga</div>
                        <div className="table-cell text-left border-y-2 border-slate-400">Banyak</div>
                        <div className="table-cell text-left border-y-2 border-slate-400">Total</div>
                    </div>
                </div>
                <div className="table-row-group">
                    <div className="table-row">
                        <div className="table-cell pb-2 ">
                            ..................
                        </div>
                        <div className="table-cell ...">
                            .............
                        </div>
                        <div className="table-cell ...">
                            .............
                        </div>
                        <div className="table-cell ...">
                            .............
                        </div>
                        <div className="table-cell ...">
                            .............
                        </div>
                    </div>
                    <div className='table-row'>
                        <div className='table-cell text-right font-bold'>
                            Total : 
                        </div>
                        <div className='table-cell'>
                            ...........
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormRincianBarang