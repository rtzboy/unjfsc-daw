import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InsumoOpts from './components/InsumoOpts';
import InsumoOptsEdit from './components/InsumoOptsEdit';
import UpdateProduct from './components/UpdateProduct';
import EnvioOrdenes from './pages/EnvioOrdenes';
import EqualInsumoPage from './pages/EqualInsumoPage';
import HomePage from './pages/HomePage';
import RegistroOrdenes from './pages/RegistroOrdenes';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/equivalencia/' element={<EqualInsumoPage />}>
				<Route path='update/:id' element={<UpdateProduct />} />
				<Route path='insert' element={<UpdateProduct />} />
			</Route>
			<Route path='/registro' element={<RegistroOrdenes />} />
			<Route path='/envio' element={<EnvioOrdenes />} />
			<Route path='/equivalencia/insumo/:id' element={<InsumoOpts />} />
			<Route path='/equivalencia/insumoi/:id' element={<InsumoOptsEdit />} />
			{/* <Route path='/equivalencia/insumo' element={<InsumoOpts />} /> */}
			{/* <Route path='/equivalencia/update/:id' element={<UpdateProduct />} /> */}
			{/* <Route path='/equivalencia/insert' element={<UpdateProduct />} /> */}
		</Routes>
	</BrowserRouter>
);

export default App;
