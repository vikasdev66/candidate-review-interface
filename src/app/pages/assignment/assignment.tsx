"use client";
import { useState } from "react";
import {
  Assignment as AssignmentData,
  CandidatesProps,
} from "@/app/mockApi/assignment";
import AssignmentDetails from "@/app/components/assignmentDetails/assignmentDetails";
import CandidateDetails from "@/app/components/candidateDetails/candidateDetails";
import Header from "@/app/components/header/header";
import SideBar from "@/app/components/sideBar/sideBar";
import Footer from "@/app/components/footer/footer";

const Assignment = () => {
  const [candidateData, setCandidateData] = useState<CandidatesProps>(
    AssignmentData.candidates[0]
  );
  return (
    <div className="flex">
      <SideBar />
      <div style={{ width: "88vw" }} className="right-container pl-10 pr-10">
        <Header />
        <div className="flex gap-5">
          <AssignmentDetails
            setCandidateData={setCandidateData}
            candidateData={candidateData}
          />
          <CandidateDetails candidateData={candidateData} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Assignment;
