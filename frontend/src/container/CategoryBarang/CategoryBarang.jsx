import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../component/Navigation/Navigation";
import { AuthContext } from "../Home/Home";
import { PlusIcon } from "@heroicons/react/solid";
import ModalCreateCateBarang from "../../component/ModalCreateCateBarang/ModalCreateCateBarang";

const CategoryBarang = () => {
  const { state } = useContext(AuthContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (state.user == null) {
      navigate("/");
    }
  }, [state, navigate]);

  useEffect(() => {
    getDataCategory();
  }, []);

  useEffect(() => {
    getDataCategory();
  }, [category]);

  const getDataCategory = async () => {
    const respon = await axios.get("http://localhost:8080/categoryBarang");
    setCategory(respon.data.category);
  };

  const handleDelete = (id) => async () => {
    try {
      await axios.delete("http://localhost:8080/categoryBarang/" + id);
      getDataCategory();
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(category);

  return (
    <div>
      <Navigation />
      <title>Category Barang | Kodehack</title>
      <section className="text-gray-600 body-font">
        <div className="container px-5 pt-7 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-5 text-center">
            SEMUA CATEGORY BARANG
          </h1>
          <div className="float-right mb-5 flex">
            <button
              className="bg-black text-white px-3 py-2 rounded-xl flex align-middle mr-2 font-bold text-lg items-center"
              onClick={() => setOpenModal(true)}
            >
              <PlusIcon className="w-6 h-6 mr-2" />
              Tambah Category Barang
            </button>
          </div>
          <table className="w-full min-w-min">
            <thead className="text-left bg-slate-200">
              <tr>
                <th className="p-4 xl:w-1/2 md:w-1/2 sm:w-1/2 ">
                  Category Barang
                </th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {category.map((hasil) => (
                <tr key={hasil.id_category}>
                  <td className="px-4 py-6 border-b-2 w-1/2">
                    {hasil.category}
                  </td>
                  <td className="border-b-2 text-center">
                    <button
                      className="p-2 ml-2 text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white hover:duration-300"
                      onClick={handleDelete(hasil.id_category)}
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
      {openModal && <ModalCreateCateBarang closeModal={setOpenModal} />}
    </div>
  );
};

export default CategoryBarang;
