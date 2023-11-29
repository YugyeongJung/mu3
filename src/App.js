import { Route, Navigate, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './component/Home';
import ModelCheck from './component/ModelCheck'
import TrainingResult from './component/TrainingResult'
import UnlearningProgress from './component/UnlearningProgress'
import UnlearningResult from './component/UnlearningResult'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Navigate to="/Home" />} />
					<Route path="/Home" element={<Home />} />
          <Route path="/ModelCheck" element={<ModelCheck />} />
          <Route path="/TrainingResult" element={<TrainingResult/>} />
          <Route path="/UnlearningProgress" element={<UnlearningProgress/>}/>
          <Route path="/UnlearningResult" element={<UnlearningResult/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
