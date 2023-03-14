import { createContext, useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import swal from 'sweetalert';
axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialForm = {
    name: "",
    slug: "",
    alamat: "",
    telp: ""
};

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues] = useState(initialForm);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const [pelanggans, setPelanggans] = useState([]);
    const [pelanggan, setPelanggan] = useState([]);

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState([]);

    const [pesanan, setPesanan] = useState([]);
    const [pesan, setPesan] = useState([]);

    const onChange = (e) => {
        const { name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        const apiSkills = response.data.data
        setSkill(apiSkills);
        setFormValues({
            name: apiSkills.name,
            slug: apiSkills.slug
        })
    };

    const storeSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.post("skills", formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const updateSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.put("skills/" + skill.id, formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const deleteSkill = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("skills/" + id);
        getSkills();
    }

    // ------------------------------------------------- PELANGGAN --------------------------------------------------- //

    const getPelanggans = async () => {
        const apiPelanggans = await axios.get("pelanggans");
        setPelanggans(apiPelanggans.data.data);
    };

    const storePelanggan = async (e) => {
        e.preventDefault();
        try{
            await axios.post("pelanggans", formValues);
            setFormValues(initialForm);
            navigate("/pelanggans");
            swal("Data Berhasil Ditambah!", "SUKSES", "success");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const getPelanggan = async (id) => {
        const response = await axios.get("pelanggans/" + id);
        const apiPelanggans = response.data.data
        setPelanggan(apiPelanggans);
        setFormValues({
            name: apiPelanggans.name,
            alamat: apiPelanggans.alamat,
            telp: apiPelanggans.telp,
        })
    };

    const updatePelanggan = async (e) => {
        e.preventDefault();
        try{
            await axios.put("pelanggans/" + pelanggan.id, formValues);
            setFormValues(initialForm);
            navigate("/pelanggans");
            swal("Data Berhasil Diubah!", "SUKSES", "success");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const deletePelanggan = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("pelanggans/" + id);
        getPelanggans();
        swal("Data Berhasil Dihapus!", "SUKSES", "success");
    }

    // ------------------------------------------------- PRODUCT --------------------------------------------------- //
    const getProducts = async () => {
        const apiProducts = await axios.get("products");
        setProducts(apiProducts.data.data);
    };

    const storeProduct = async (e) => {
        e.preventDefault();
        try{
            await axios.post("products", formValues);
            setFormValues(initialForm);
            navigate("/products");
            swal("Data Berhasil Ditambah!", "SUKSES", "success");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const getProduct = async (id) => {
        const response = await axios.get("products/" + id);
        const apiProducts = response.data.data
        setProduct(apiProducts);
        setFormValues({
            name: apiProducts.name,
            deskripsi: apiProducts.deskripsi,
            kategori: apiProducts.kategori,
            harga: apiProducts.harga,
        })
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        try{
            await axios.put("products/" + product.id, formValues);
            setFormValues(initialForm);
            navigate("/products");
            swal("Data Berhasil Diubah!", "SUKSES", "success");
        } catch (e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    };

    const deleteProduct = async (id) => {
        if (!window.confirm("Are you sure?")) {
            return;
        }
        await axios.delete("products/" + id);
        getProducts();
        swal("Data Berhasil Dihapus!", "SUKSES", "success");
    }

    // ------------------------------------------------- CART --------------------------------------------------- //
    const getCart = async (id) => {
        const response = await axios.get("products/" + id);
        const apiProduk = response.data.data;
        setPesanan(apiProduk);
        swal(response.data.data.name+ " dimasukkan ke dalam Cart");
    };

    const getPesanan = async (id) => {
        const response = await axios.get("pelanggans/" + id);
        const apiPelanggan = response.data.data;
        setPesan(apiPelanggan);
        swal(response.data.data.name+ " sebagai Pembeli");
    };


    return <SkillContext.Provider value={{skill, skills, getSkill, getSkills, onChange, formValues, storeSkill, errors, setErrors,updateSkill, deleteSkill, getPelanggans ,pelanggans, setPelanggans, pelanggan, setPelanggan, storePelanggan, getPelanggan, updatePelanggan, deletePelanggan, products, setProducts ,getProducts, product, setProduct, storeProduct, getProduct, updateProduct, deleteProduct, getCart, getPesanan, pesanan, setPesan, pesan}}>{children}</SkillContext.Provider>
}

export default SkillContext;