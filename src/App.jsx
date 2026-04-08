import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import WhyHearthstone from './pages/WhyHearthstone.jsx'
import MemoryCare from './pages/MemoryCare.jsx'
import AssistedLiving from './pages/AssistedLiving.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Gallery from './pages/Gallery.jsx'
import Activities from './pages/Activities.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/why-hearthstone" element={<WhyHearthstone />} />
        <Route path="/memory-care" element={<MemoryCare />} />
        <Route path="/assisted-living" element={<AssistedLiving />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
