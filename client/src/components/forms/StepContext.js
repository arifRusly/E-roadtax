import React, { useState } from "react";
import RenewRoadtax from "../pages/Renewroadtax";

export const multiStepContext = React.createContext();

const StepContext= () => {

    const [activeStep, setActiveStep] = useState(0);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

    const steps= ['Vehicle Details[U]', 'Quotation Details[A]', 'Payment Details[U]', 'Delivery Status[A]', 'Successfull Status[A]']
    const [completed, setCompleted] = useState([]);
    return (
        <div>
            <multiStepContext.Provider value={{
                activeStep,
                setActiveStep,
                userData,
                setUserData,
                finalData,
                setFinalData,
                steps,
                completed,
                setCompleted}}>
                <RenewRoadtax />
            </multiStepContext.Provider>
        </div>

    )
}

export default StepContext;