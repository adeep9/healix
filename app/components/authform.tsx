/** This is the actual form component, I did NOT use a container - the whole form (the green container included) is this component
*As can be seen there are various DUMMY DATA which works with Selectauth.tsx 
* on submit of the form it sends to the HOME page (/dashboard)
*/


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SelectInput } from "./selectauth"; 

const Authform = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Define options for each step (this is currently dummy data)
  const facilityOptions = [
    {
      label: "Hospitals",
      items: [
        { value: "est", label: "Princess Alexandra" },
        { value: "cst", label: "The Wesley" },
      ],
    },
    {
      label: "Aged Care",
      items: [
        { value: "gmt", label: "Richlands Aged Care" },
        { value: "cet", label: "AVEO Springfield" },
      ],
    },
  ];

  const userOptions = [
    {
      label: "Clinical Nurse",
      items: [
        { value: "doc1", label: "Adeep Mitra" },
        { value: "doc2", label: "Corey Berther" },
      ],
    },
    {
      label: "Registered Nurse",
      items: [
        { value: "nurse1", label: "Sharon Saji" },
        { value: "nurse2", label: "Darcy Cooper" },
      ],
    },
  ];

  // Define the heading text based on the current step
  const headingText = step === 1 ? "Where are you working?" : "Who are you?";

  // Function to handle final submit
  const handleSubmit = () => {
    // Redirect to the /dashboard page
    router.push("/dashboard");
  };

  return (
    <main className="relative p-5 bg-emerald-50 rounded-lg border-2 border-emerald-700/40">
      {step > 1 && (
        <Button 
          onClick={prevStep} 
          className="absolute top-4 left-4 bg-transparent p-2"
        >
          <ArrowLeft className="w-5 h-5 text-emerald-700" />
        </Button>
      )}

      <h1 className="tracking-tight font-medium">{headingText}</h1>

      <div className="mt-6">
        {step === 1 && (
          <div>
            <SelectInput 
              placeholder="Select a facility" 
              groups={facilityOptions}
            />

            <Button 
              onClick={nextStep} 
              className="mt-4 px-4 py-2 w-full bg-emerald-700 text-white rounded"
            >
              Next
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <SelectInput 
              placeholder="Select a user" 
              groups={userOptions}
            />

            <div className="mt-4 flex space-x-2 justify-center">
              <Button 
                onClick={handleSubmit} 
                className="px-4 py-2 w-full bg-emerald-700 text-white rounded"
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Authform;





    