import { useState, useEffect } from 'react';
import Formular from './components/Formular.jsx';
import Header from './components/Header.jsx';
import PatientList from './components/PatientList.jsx';

function App() {

  const initialState = JSON.parse(localStorage.getItem("patients")) ?? []
  const [patientList, setPatientList] = useState(initialState);
  const [patient, setPatient] = useState({});

  useEffect( () => {
    localStorage.setItem( "patients", JSON.stringify(patientList));
  }, [patientList]);

  const deletePatient = patientId => {
    setPatientList(patientList.filter(patient => patient.id != patientId));
  };

  return (
    <div className="container mx-auto mt-20 bg-blue-100 rounded-md" >
      <Header />
      <div className='md:flex mt-12'>
        <Formular 
          patientList = {patientList}
          setPatientList = {setPatientList}
          patient = {patient}
          setPatient = {setPatient}
          />
        <PatientList 
          patientList = {patientList}
          setPatient = {setPatient}
          deletePatient = {deletePatient}
        />
      </div>
    </div>
  )
}

export default App
