import React, { useContext, useEffect } from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { dashboardContext } from '../../container/Dashboard/Dashboard';

const ModalFilter = () => {
  const {
    setOpenModal,
    setDataPemasukan,
    dataPemasukan,
    tglAwal,
    tglAkhir,
    setTglAwal,
    setTglAkhir,
  } = useContext(dashboardContext);

  useEffect(() => {
    return () => {};
  }, []);

  const handleCari = async (e) => {
    e.preventDefault();
    const fetch = await axios.post(
      'https://be-notareact.opwarnet.my.id/filterDashboard',
      {
        tglAwal: tglAwal,
        tglAkhir: tglAkhir,
      }
    );
    if (tglAkhir && tglAwal !== '') {
      setDataPemasukan({
        ...dataPemasukan,
        hasilJumlahIn: fetch.data.hasilJumlahIn,
        hasilBanyakIn: fetch.data.hasilBanyakIn,
        hasilJumlahOut: fetch.data.hasilJumlahOut,
        hasilBanyakOut: fetch.data.hasilBanyakOut,
      });
    } else {
      const respon = await axios.get(
        'https://be-notareact.opwarnet.my.id/dataPemasukan'
      );
      setDataPemasukan(respon.data);
    }
    setOpenModal(false);
  };

  return (
    <div
      className="bg-black bg-opacity-40 absolute inset-0 flex justify-center items-baseline "
      id="modalFilter"
    >
      <div className="bg-white max-w-3xl rounded-xl mt-10 w-screen h-fit">
        <div className="border-b border-gray-400 ">
          <div className="flex justify-between items-center p-3">
            <p className="text-3xl">Pencarian Data Nota</p>
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <XCircleIcon className="h-10 w-10" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-3">
          <div className="p-3 ">
            <div>
              <label htmlFor="tanggalAwal">
                <b>Tanggal Awal</b>
              </label>
            </div>
            <div className=" mt-2 flex border-2 border-blue-400 rounded-lg w-1/2">
              <input
                className="focus:outline-none rounded-l-lg pb-1 px-2 "
                type="date"
                name="tanggalAwal"
                id="tanggalAwal"
                value={tglAwal}
                onChange={(e) => setTglAwal(e.target.value)}
              />
            </div>
          </div>
          <div className="p-3 ">
            <div>
              <label htmlFor="tanggalAkhir">
                <b>Tanggal Akhir</b>
              </label>
            </div>
            <div className=" mt-2 flex border-2 border-blue-400 rounded-lg w-1/2">
              <input
                className="focus:outline-none rounded-l-lg pb-1 px-2 "
                type="date"
                name="tanggalAkhir"
                id="tanggalAkhir"
                value={tglAkhir}
                onChange={(e) => setTglAkhir(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-400 clear-both ">
          <div className="float-right py-3 px-5">
            <button
              className="border border-yellow-300 py-2 px-3 mr-5 hover:bg-yellow-300 hover:duration-300 rounded-lg"
              onClick={handleCari}
            >
              Cari
            </button>
            <button
              className="border border-black py-2 px-3 hover:bg-gray-500 hover:duration-300 hover:text-white rounded-lg"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
