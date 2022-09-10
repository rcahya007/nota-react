import { SearchIcon } from "@heroicons/react/solid";
import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Home/Home";
import ModalFilter from "../../component/ModalFilter/ModalFilter";
import Navigation from "../../component/Navigation/Navigation";
import axios from "axios";

export const dashboardContext = createContext();

const Dashboard = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [dataPemasukan, setDataPemasukan] = useState("");
  const [tglAwal, setTglAwal] = useState("");
  const [tglAkhir, setTglAkhir] = useState("");

  useEffect(() => {
    if (state.user == null) {
      navigate("/");
    }
  }, [state, navigate]);

  useEffect(() => {
    const getData = async () => {
      const respon = await axios.get(
        "http://benotareact.rendycahyae.my.id/dataPemasukan"
      );
      setDataPemasukan(respon.data);
    };
    getData();
  }, []);

  return (
    <div>
      <Navigation />
      <title>DASHBOARD | Kodehack</title>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-7 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">
            All Transaksi Kodehack
          </h1>
          <div className="float-right flex">
            <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2 font-bold text-lg">
              Tanggal Awal : {tglAwal === "" ? "-" : tglAwal}
            </button>
            <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2 font-bold text-lg">
              Tanggal Awal : {tglAkhir === "" ? "-" : tglAkhir}
            </button>
            <button
              className="bg-black text-white px-3 py-2 rounded-xl flex align-middle font-bold text-lg"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <SearchIcon className="w-6 h-6 mr-2 " />
              Cari
            </button>
          </div>

          {dataPemasukan === "" ? (
            <div className="flex flex-row -m-4 clear-right">
              <div className="basis-1/2 m-6">
                <div className="h-full bg-gray-100 p-6 rounded flex">
                  <div>
                    <p className="text-4xl">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(0)}
                    </p>
                    <h3 className="pt-3">Dari 0 Transaksi Pemasukan</h3>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 m-6">
                <div className="h-full bg-gray-100 p-6 rounded flex">
                  <div>
                    <p className="text-4xl">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(0)}
                    </p>
                    <h3 className="pt-3">Dari 0 Transaksi Pemasukan</h3>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row -m-4 clear-right">
              <div className="basis-1/2 m-6">
                <div className="h-full bg-gray-100 p-6 rounded flex">
                  <div>
                    <p className="text-4xl">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(dataPemasukan.hasilJumlahIn)}
                    </p>
                    <h3 className="pt-3">
                      Dari <b>{dataPemasukan.hasilBanyakIn}</b> Transaksi
                      Pemasukan
                    </h3>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 m-6">
                <div className="h-full bg-gray-100 p-6 rounded flex">
                  <div>
                    <p className="text-4xl">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(dataPemasukan.hasilJumlahOut)}
                    </p>
                    <h3 className="pt-3">
                      Dari <b>{dataPemasukan.hasilBanyakOut}</b> Transaksi
                      Pengeluaran
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <dashboardContext.Provider
        value={{
          setOpenModal,
          setDataPemasukan,
          dataPemasukan,
          tglAwal,
          tglAkhir,
          setTglAwal,
          setTglAkhir,
        }}
      >
        {openModal && <ModalFilter />}
      </dashboardContext.Provider>
    </div>
  );
};

export default Dashboard;
