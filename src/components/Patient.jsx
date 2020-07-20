
const Patient = ({patient, setPatient, deletePatient}) => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-7 rounded-lg">
        <p className="font-bold uppercase text-black">Name: {" "}
            <span className="font-normal normal-case">{patient.name}</span> 
        </p>

        <p className="font-bold uppercase mt-3 text-black">Owner: {" "}
            <span className="font-normal normal-case">{patient.owner}</span> 
        </p>
        
        <p className="font-bold uppercase mt-3 text-black">E-mail: {" "}
            <span className="font-normal normal-case">{patient.email}</span> 
        </p>
        
        <p className="font-bold uppercase mt-3 text-black">Date: {" "}
            <span className="font-normal normal-case">{patient.date}</span> 
        </p>
        
        <p className="font-bold uppercase mt-3 text-black">symptoms: {" "}
            <span className="font-normal normal-case">{patient.symptoms}</span> 
        </p>
        <div className="justify-between flex">
            <button 
                type="button" 
                className="bg-indigo-200 hover:bg-indigo-400 border-0 font-bold uppercase mt-5 ml-5"
                onClick= {() => setPatient(patient)}
                >
                Edit
            </button>
            <button 
                type="button"
                className="bg-red-300 hover:bg-red-600 border-0 font-bold uppercase mt-5 mr-5"
                onClick= {() => deletePatient(patient.id)}
                >
                Delete
            </button>
        </div>
    </div>
  )
}

export default Patient