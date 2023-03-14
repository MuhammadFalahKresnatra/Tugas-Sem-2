import axios from 'axios';
import {useEffect, useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import SkillContext from '../../Context/SkillContext';
import swal from 'sweetalert';

export const OrderDetailIndex = () => {
    const { pesanan, pesan } = useContext(SkillContext);
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const tambah = () => {
        setCounter(counter + 1);
    };
    const kurang = () => {
        setCounter(counter - 1);
        if (counter <= 0) {
            window.location.reload();
        }
    };
    const checkout = () => {
        let data = {
            idpelanggan: pesan.id,
            pelanggan: pesan.name,
            alamat: pesan.alamat,
            idbarang: pesanan.id,
            barang: pesanan.name,
            jumlah: counter,
            harga: pesanan.harga
        };

        axios.post("orderdetails", data);
        navigate("/");
        swal("Terimakasih Sudah Berbelanja", "SUCCES", "success");
        
    };

    useEffect(() => {}, []);
    

    return (
        <div className='mt-12'>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3">
                                Id Produk
                            </th>
                            <th scope="col" className="py-3">
                                Id Pelanggan
                            </th>
                            <th scope="col" className="py-3">
                                Pelanggan
                            </th>
                            <th scope="col" className="py-3">
                                Alamat
                            </th>
                            <th scope="col" className="py-3">
                                Barang
                            </th>
                            <th scope="col" className="py-3">
                                Jumlah
                            </th>
                            <th scope="col" className="py-3">
                                Harga
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="py-3">{pesanan.id}</td>
                            <td className="py-3">{pesan.id}</td>
                            <td className="py-3">{pesan.name}</td>
                            <td className="py-3">{pesan.alamat}</td>
                            <td className="py-3">{pesanan.name}</td>
                            <td>
                                <button onClick={kurang} className="px-2 py-2 mr-2 bg-slate-500 hover:bg-slate-700 text-white rounded-md">-</button>
                                {counter} 
                                <button onClick={tambah} className="px-2 py-2 ml-2 bg-slate-500 hover:bg-slate-700 text-white rounded-md">+</button>
                            </td>
                            <td className="py-3">${pesanan.harga*counter}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4 flex justify-center space-x-3">
                    <button onClick={checkout} className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md">CheckOut</button>
                </div>
            </div>
        </div>
    )
}