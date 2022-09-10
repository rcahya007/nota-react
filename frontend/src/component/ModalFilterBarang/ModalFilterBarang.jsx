import React, { useContext, useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import axios from "axios";
import { barangContext } from "../../container/Barang/Barang";

const ModalFilterBarang = () => {
  const { setCariBarang, allBarang, setAllBarang, setDataQuery } =
    useContext(barangContext);
  const [cateBarang, setCateBarang] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [namaBarang, setNamaBarang] = useState("");

  const getData = async () => {
    const respon = await axios.get("http://localhost:8080/categoryBarang");
    setCateBarang(respon.data.category);
    // console.log(respon);
  };
  useEffect(() => {
    getData();

    return () => {};
  }, []);

  const handleCari = async () => {
    const getData = await axios.post("http://localhost:8080/queryCariBarang", {
      nama_barang: namaBarang,
      id_category_barang: selectedOption,
    });
    setAllBarang(getData.data.dataBarang);
    setCariBarang(false);
    setDataQuery(true);
  };

  // console.log(selectedOption);
  // console.log(namaBarang);

  // const handleCari = async (e) => {
  //   e.preventDefault();
  //   const fetch = await axios.post("http://localhost:8080/filterDashboard", {
  //     tglAwal: tglAwal,
  //     tglAkhir: tglAkhir,
  //   });
  //   if (tglAkhir && tglAwal !== "") {
  //     setDataPemasukan({
  //       ...dataPemasukan,
  //       hasilJumlahIn: fetch.data.hasilJumlahIn,
  //       hasilBanyakIn: fetch.data.hasilBanyakIn,
  //       hasilJumlahOut: fetch.data.hasilJumlahOut,
  //       hasilBanyakOut: fetch.data.hasilBanyakOut,
  //     });
  //   } else {
  //     const respon = await axios.get("http://localhost:8080/dataPemasukan");
  //     setDataPemasukan(respon.data);
  //   }
  //   setOpenModal(false);
  // };

  return (
    <div
      className="bg-black bg-opacity-40 absolute inset-0 flex justify-center items-baseline "
      id="modalFilterBarang"
    >
      <div className="bg-white max-w-3xl rounded-xl mt-10 w-screen h-fit">
        <div className="border-b border-gray-400 ">
          <div className="flex justify-between items-center p-3">
            <p className="text-3xl">Pencarian Barang</p>
            <button
              onClick={() => {
                setCariBarang(false);
              }}
            >
              <XCircleIcon className="h-10 w-10" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 my-3">
          <div className="p-3 ">
            <div>
              <label htmlFor="namaBarang">
                <b>Nama Barang</b>
              </label>
            </div>
            <div className=" mt-2 flex border-2 border-blue-400 rounded-lg ">
              <input
                className="focus:outline-none rounded-l-lg pb-1 px-2 "
                id="namaBarang"
                type="text"
                onChange={(e) => setNamaBarang(e.target.value)}
              />
            </div>
          </div>
          <div className="p-3 ">
            <div>
              <label htmlFor="category">
                <b>Category Barang </b>
              </label>
            </div>
            <div>
              <select
                name="category"
                id="category"
                className="mt-2 block border-2 border-blue-400 rounded-lg w-full py-1 bg-white px-2 "
                value={selectedOption || ""}
                onChange={(e) => setSelectedOption(e.target.value || "")}
              >
                <option key="-" value="">
                  -
                </option>
                {cateBarang.map((hasil) => (
                  <option key={hasil.id_category} value={hasil.id_category}>
                    {hasil.category}
                  </option>
                ))}
              </select>
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
                setCariBarang(false);
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

export default ModalFilterBarang;
