import { Routes, Route } from "react-router-dom";
import { createContext, useReducer } from "react";
import Dashboard from "../Dashboard/Dashboard";
import LoginForm from "../LoginForm/LoginForm";
import Barang from "../Barang/Barang";
import Nota from "../NotaTransaksi/Nota";
import FormNota from "../NotaTransaksi/FormNota";
import CategoryBarang from "../CategoryBarang/CategoryBarang";

export const AuthContext = createContext();
const dataLocal = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: dataLocal,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...initialState,
        user: action.payload.user,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...initialState,
        user: null,
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, fungsi] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <AuthContext.Provider value={{ state, fungsi }}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/barang" element={<Barang />} />
          <Route path="/categorybarang" element={<CategoryBarang />} />
          <Route path="/nota" element={<Nota />} />
          <Route path="/transaction/tambah" element={<FormNota />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
};

export default Home;
