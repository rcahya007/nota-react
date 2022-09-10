import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const ModalFormTambahNota = ({ closeModal, setDataBarang }) => {
  const [hasilAmbilData, setHasilAmbilData] = useState([]);
  const [dataDipilih, setDataDipilih] = useState([]);
  const [maxPesan, setMaxPesan] = useState(1);
  const [deskripsi, setDeskripsi] = useState("");
  const [banyak, setBanyak] = useState(1);
  const [total, setTotal] = useState(0);
  const [stock, setStock] = useState(0);
  const namaBarang = useRef();
  const hargaBarang = useRef();

  const TambahBarang = () => {
    setDataBarang((oldState) => [
      ...oldState,
      {
        id: dataDipilih[0].id,
        nama_barang: dataDipilih[0].nama_barang,
        deskripsi: deskripsi,
        banyak_barang: banyak,
        harga_barang: dataDipilih[0].harga_barang,
        total_harga: total,
        stok_barang: dataDipilih[0].stok_barang,
      },
    ]);
    closeModal(false);
  };

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    const hasil = hargaBarang.current.value * banyak;
    setTotal(hasil);
  }, [banyak]);

  const minus = () => {
    setBanyak(banyak - 1);
  };

  const plus = () => {
    setBanyak(banyak + 1);
  };

  const getId = async (id) => {
    const getDataById = await axios.post(
      `http://benotareact.rendycahyae.my.id/barang/selectId/` + id
    );
    setDataDipilih([getDataById.data.getOne]);
    namaBarang.current.value = getDataById.data.getOne.nama_barang;
    hargaBarang.current.value = getDataById.data.getOne.harga_barang;
    if (getDataById.data.getOne.stok_barang === 0) {
      setMaxPesan(1);
      setBanyak(1);
      setStock(getDataById.data.getOne.stok_barang);
    } else {
      setMaxPesan(getDataById.data.getOne.stok_barang);
      setBanyak(1);
      setStock(getDataById.data.getOne.stok_barang);
    }
    const hasil = hargaBarang.current.value * banyak;
    setTotal(hasil);
  };

  const getClick = async (e) => {
    const id = e.target.value;
    getId(id);
    setHasilAmbilData([]);
  };

  const getBarang = async (e) => {
    const nama_barang = e.target.value;
    if (nama_barang === "") {
      setHasilAmbilData([]);
    } else {
      const fetch = await axios.post(
        "http://benotareact.rendycahyae.my.id/getBarangFormTambah",
        { nama_barang: nama_barang }
      );
      if (fetch.data.result.length > 0) {
        setHasilAmbilData(fetch.data.result);
      } else {
        setHasilAmbilData([]);
      }
    }
  };

  return (
    <div className="bg-black bg-opacity-50 inset-0 overflow-y-scroll fixed transition-opacity duration-300">
      <div className="bg-white w-2/3 rounded-xl mx-auto my-4 xl:w-1/2 ">
        <div className="border-b border-slate-400 ">
          <div className="flex justify-between items-center p-3">
            <p className="text-2xl font-bold">Tambah Barang</p>
            <button
              onClick={() => {
                closeModal(false);
              }}
            >
              <XCircleIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
        <div className="mt-3 mx-4">
          <div className="mx-5 mt-2 mb-4">
            <label htmlFor="nama" className="">
              Nama Barang / Jasa :{" "}
            </label>
            <input
              id="nama_barang"
              type="text"
              className="mt-2 block border-2 border-slate-400 w-full rounded p-2 placeholder-shown:italic"
              placeholder="Masukkan Nama Barang"
              onChange={getBarang}
              ref={namaBarang}
              required
            />
            {dataDipilih.length > 0 ? (
              <div>
                <p className="text-sm mt-1" id="span_stock">
                  Stock barang sekarang : <b>{dataDipilih[0].stok_barang}</b>
                </p>
              </div>
            ) : (
              <div></div>
            )}
            {hasilAmbilData.length > 0 ? (
              <div>
                <select
                  name="category"
                  id="category"
                  onChange={getClick}
                  className=" block border-2 border-slate-400 w-full rounded p-2 bg-white"
                  size={4}
                >
                  {hasilAmbilData.map((hasil) => (
                    <option key={hasil.id} value={hasil.id}>
                      {hasil.nama_barang}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-3 mx-4">
          <div className="mx-5 mt-2 mb-4">
            <label htmlFor="deskripsi" className="">
              Deskripsi :{" "}
            </label>
            <textarea
              id="deskripsi"
              type="text"
              className="mt-2 block border-2 border-slate-400 w-full rounded p-2 placeholder-shown:italic"
              placeholder="Masukkan Deskripsi Barang"
              onChange={(e) => setDeskripsi(e.target.value)}
              value={deskripsi}
            />
            <p className="text-sm mt-1">
              Tulis deskripsi barang tanpa menggunakan emoticon.
            </p>
          </div>
        </div>
        <div className="mt-3 mx-4">
          <div className="mx-5 mt-2 mb-4">
            <label htmlFor="harga" className="">
              Harga :{" "}
            </label>
            <input
              id="harga"
              disabled
              type="number"
              ref={hargaBarang}
              className="mt-2 block border-2 border-slate-400 w-full rounded p-2 bg-slate-300"
            />
          </div>
        </div>
        <div className="mt-3 mx-4">
          <div className="mx-5 mt-2 mb-4">
            <label htmlFor="banyak" className="">
              Banyak :{" "}
            </label>

            <div className="flex">
              {banyak <= 1 ? (
                <button
                  type="button"
                  className="w-10 h-10 text-black border-2 text-xl bg-slate-400"
                  disabled
                >
                  -
                </button>
              ) : (
                <button
                  type="button"
                  className="w-10 h-10 text-green-400 border-2 hover:bg-slate-400 duration-300 text-xl"
                  onClick={minus}
                >
                  -
                </button>
              )}
              <p className="items-center flex px-7">{banyak}</p>
              {banyak === maxPesan ? (
                <button
                  type="button"
                  className="w-10 h-10 text-black border-2 text-xl bg-slate-400"
                  disabled
                >
                  +
                </button>
              ) : (
                <button
                  type="button"
                  className="w-10 h-10 text-green-400 border-2 hover:bg-slate-400 duration-300 text-xl"
                  onClick={plus}
                >
                  +
                </button>
              )}
            </div>
            <p className="text-sm mt-1">
              Masukkan banyak barang {`<`} stok barang yang dipilih
            </p>
          </div>
        </div>
        <div className="mt-3 mx-4">
          <div className="mx-5 mt-2 mb-4">
            <label htmlFor="total" className="">
              Total :{" "}
            </label>
            <input
              id="total"
              disabled
              type="number"
              className="mt-2 block border-2 border-slate-400 w-full rounded p-2 bg-slate-300"
              value={total}
            />
          </div>
        </div>
        <div className="border-t border-slate-400 flex justify-end pb-4">
          <div className="mt-4 align-bottom mr-5">
            {stock === 0 ? (
              <button
                className="rounded px-3 py-2 border text-black bg-slate-400"
                disabled
                onClick={TambahBarang}
              >
                Tambah Barang
              </button>
            ) : (
              <button
                className="rounded px-3 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black hover:duration-300"
                onClick={TambahBarang}
              >
                Tambah Barang
              </button>
            )}

            <button
              className="ml-4 rounded px-3 py-2 border border-black text-black hover:bg-slate-600 hover:text-white hover:duration-300"
              onClick={() => closeModal(false)}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFormTambahNota;
