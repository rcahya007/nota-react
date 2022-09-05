import { PlusIcon } from "@heroicons/react/solid";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalDetailNota from "../../component/ModalDetailNota/ModalDetailNota";
import Navigation from "../../component/Navigation/Navigation";
import { AuthContext } from "../Home/Home";

const Nota = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const [allTransactions, setAllTransactions] = useState([]);
  const [detailNota, setdetailNota] = useState([]);
  const [modalDetail, setModalDetail] = useState(false);

  useEffect(() => {
    if (state.user == null) {
      navigate("/");
    }
  }, [state, navigate]);

  useEffect(() => {
    getAllTransactions();
  }, []);

  const getAllTransactions = async () => {
    const fetch = await axios.get("http://localhost:8080/transactions");
    setAllTransactions(fetch.data.DataBarang);
  };

  const getDetail = async (id) => {
    const getDetailNota = await axios.get(
      "http://localhost:8080/transactions/" + id
    );
    setdetailNota(getDetailNota.data);
    setModalDetail(true);
  };

  const getDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8080/transactions/" + id);
      getAllTransactions();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navigation />
      <title>NOTA TRANSAKSI | Kodehack</title>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-7 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">
            NOTA TRANSAKSI
          </h1>
          <div className="float-right mb-5">
            <Link to={"/transaction/tambah"}>
              <button className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2 font-bold text-lg items-center">
                <PlusIcon className="w-6 h-6 mr-2" /> Tambah Transaksi
              </button>
            </Link>
          </div>
          <table className="w-full">
            <thead className="text-left bg-slate-200">
              <tr>
                <th className="p-4 xl:w-1/2 md:w-1/6 sm:w-1/12 ">Pembeli</th>
                <th className="text-left">Total</th>
                <th className="text-center">Waktu Pembelian</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allTransactions.map((hasil, index) => (
                <tr key={index}>
                  <td className="p-4 border-b-2 w-1/3 sm:py-1">
                    {hasil.nama_pembeli}
                  </td>
                  <td className="border-b-2 text-left">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      minimumFractionDigits: 0,
                    }).format(hasil.total_semua)}
                  </td>
                  <td className="border-b-2 text-center">
                    {new Date(hasil.updatedAt)
                      .toLocaleString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "2-digit",
                        year: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                      .replace(".", ":")}
                  </td>
                  <td className="border-b-2 text-center">
                    <button
                      className="p-2 text-black border border-black rounded hover:bg-slate-600 hover:text-white hover:duration-300 my-2 mr-1"
                      onClick={() => getDetail(hasil.id)}
                    >
                      Detail
                    </button>{" "}
                    |
                    <button
                      className="p-2 ml-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white hover:duration-300"
                      onClick={() => getDelete(hasil.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {modalDetail && (
        <ModalDetailNota closeModal={setModalDetail} dataNota={detailNota} />
      )}
    </div>
  );
};

export default Nota;
