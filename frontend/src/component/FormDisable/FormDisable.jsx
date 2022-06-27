import React from 'react'

const FormDisable = () => {
    return (
        <div className='clear-both'>
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
                        <div className="table-cell ">
                            <input type="text" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-4 rounded-lg w-11/12'/>
                        </div>
                        <div className="table-cell ...">
                            <input type="text" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-11/12'/>
                        </div>
                        <div className="table-cell ...">
                            <input type="number" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-11/12'/>
                        </div>
                        <div className="table-cell ...">
                            <input type="number" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-11/12'/>
                        </div>
                        <div className="table-cell ...">
                            <input type="text" disabled className='border-2 border-slate-400 p-1 bg-slate-300 mt-2 rounded-lg w-full mb-5'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormDisable