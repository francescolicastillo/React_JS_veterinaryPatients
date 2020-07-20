import Patient from "./Patient";

function PatientList({patientList, setPatient, deletePatient}) {

    return (
        <div className="md:w-1/2 lg:3/5">
            <h2 className="text-3xl font-bold text-slate-800 text-center">Patient List</h2>
            <p className="text-xl text-center mt-4 mb-3 font-bold text-indigo-600">Patients and appointments</p>
            <div className="h-screen overflow-y-scroll">

                { patientList.map((patient) => (
                    <Patient 
                        key={patient.id}
                        patient={patient}
                        setPatient = {setPatient}
                        deletePatient = {deletePatient}
                    />
                ))}

            </div>
        </ div>
    )
}

export default PatientList;