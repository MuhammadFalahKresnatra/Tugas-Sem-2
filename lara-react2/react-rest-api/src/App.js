import { Routes, Route, Link} from 'react-router-dom';
import { SkillProvider } from './Context/SkillContext';

import {Home} from './components/Home';
import {SkillIndex} from './components/skills/SkillIndex';
import {SkillCreate} from './components/skills/SkillCreate';
import {SkillEdit} from './components/skills/SkillEdit';
import { PelangganIndex } from './components/pelanggans/PelangganIndex';
import { PelangganCreate } from './components/pelanggans/PelangganCreate';
import { PelangganEdit } from './components/pelanggans/PelangganEdit';
import { ProductIndex } from './components/products/ProductIndex';
import { ProductCreate } from './components/products/ProductCreate';
import { ProductEdit } from './components/products/ProductEdit';
import { OrderDetailIndex } from './components/orderdetails/OrderDetailIndex';

function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
        <div className="max-w-7xl mx-auto min-h-screen">
          <header className="bg-slate-50">
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global'>
              <ul className='flex'>
                <img className='h-11 w-auto mr-5' src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                <li className='text-sm font-semibold m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                  <Link to="/">Home</Link>
                </li>
                <li className='text-sm font-semibold m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                  <Link to="/skills">Skills</Link>
                </li>
                <li className='text-sm font-semibold m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                  <Link to="/products">Product</Link>
                </li>
                <li className='text-sm font-semibold m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                  <Link to="/pelanggans">Pelanggan</Link>
                </li>
                <li className='text-sm font-semibold m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                  <Link to="/orders">Cart</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/skills' element={<SkillIndex />} />
            <Route path='/skills/create' element={<SkillCreate />} />
            <Route path='/skills/:id/edit' element={<SkillEdit />} />
            <Route path='/pelanggans' element={<PelangganIndex />} />
            <Route path='/pelanggans/create' element={<PelangganCreate />} />
            <Route path='/pelanggans/:id/edit' element={<PelangganEdit />} />
            <Route path='/products' element={<ProductIndex />} />
            <Route path='/products/create' element={<ProductCreate />} />
            <Route path='/products/:id/edit' element={<ProductEdit />} />
            <Route path='/orders' element={<OrderDetailIndex />} />
          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
