import {useContext, useEffect} from 'react';
import SkillContext from '../../Context/SkillContext';

export const ProductCreate = () => {
    const { formValues, onChange, storeProduct, errors, setErrors} = useContext(SkillContext);
    useEffect(() => {
        setErrors({})
    }, []);
    return (
        <div className='mt-12'>
            <form onSubmit={storeProduct} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
                <div className="space-y-6">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                            Name
                        </label>
                        <input name="name" value={formValues["name"]} onChange={onChange} className="border border-gray-300 text-gray-600 text-sm rounded-md block w-full p-2" />
                        {errors.name && <span className="text-sm text-red-400">{errors.name[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium">
                            Description
                        </label>
                        <input name="deskripsi" value={formValues["deskripsi"]} onChange={onChange} className="border border-gray-300 text-gray-600 text-sm rounded-md block w-full p-2" />
                        {errors.deskripsi && <span className="text-sm text-red-400">{errors.deskripsi[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="kategori" className="block mb-2 text-sm font-medium">
                            Category
                        </label>
                        <select name="kategori" id="kategori" value={formValues["kategori"]} onChange={onChange} className="border border-gray-300 text-gray-600 text-sm rounded-md block w-full p-2">
                            <option value="" selected disabled>Select Category</option>
                            <option value={"smartphones"}>Smartphones</option>
                            <option value={"laptops"}>Laptops</option>
                            <option value={"fragrances"}>Fragrances</option>
                            <option value={"skincare"}>Skincare</option>
                        </select>
                        {/* <input name="kategori" value={formValues["kategori"]} onChange={onChange} className="border border-gray-300 text-gray-600 text-sm rounded-md block w-full p-2" /> */}
                        {errors.kategori && <span className="text-sm text-red-400">{errors.kategori[0]}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="harga" className="block mb-2 text-sm font-medium">
                            Price
                        </label>
                        <input name="harga" value={formValues["harga"]} onChange={onChange} className="border border-gray-300 text-gray-600 text-sm rounded-md block w-full p-2" />
                        {errors.harga && <span className="text-sm text-red-400">{errors.harga[0]}</span>}
                    </div>
                </div>
                <div className="my-4">
                    <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                        Store
                    </button>
                </div>
            </form>
        </div>
    )
}