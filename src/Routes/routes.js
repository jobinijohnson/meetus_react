import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavLeft from '../components/NavLeft.js';

const RouteComponent = () => {
  const location = useLocation();

  return (
    <>
        <div>
          <div>
            <NavLeft />
          </div>
          <div>
            <Routes>
              <Route path="/homepage" element={<Slider />} />
            </Routes>
          </div>
        </div>

    </>
  );
}

export default RouteComponent;
