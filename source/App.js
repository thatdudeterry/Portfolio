import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoGallery from "./pages/PhotoGallery";
import About from "./pages/About";
import CodeExamples from "./pages/CodeExamples";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/photogallery" element={<PhotoGallery />}></Route>
			<Route path="/about" element={<About />}></Route>
			<Route path="/code_examples" element={<CodeExamples />}></Route>
		</Routes>
	);
}

export default App;
