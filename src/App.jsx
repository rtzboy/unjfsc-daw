import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EqualInsumoPage from './pages/EqualInsumoPage';
import HomePage from './pages/HomePage';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/equivalencia' element={<EqualInsumoPage />} />
		</Routes>
	</BrowserRouter>
);

export default App;
