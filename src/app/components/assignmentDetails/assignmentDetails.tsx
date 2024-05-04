"use client";
import React, { SetStateAction, Dispatch } from "react";
import { Edit2, Box, FileText } from "react-feather";
import { Assignment, CandidatesProps } from "@/app/mockApi/assignment";
import "./assignmentDetails.css";

interface AssignmentDetailsProps {
  candidateData: CandidatesProps;
  setCandidateData: Dispatch<SetStateAction<CandidatesProps>>;
}
const AssignmentDetails = ({
  candidateData,
  setCandidateData,
}: AssignmentDetailsProps) => {
  return (
    <div className="assignmentDetails-container">
      <div className="assignmentDetails">
        <div className="flex justify-between mb-5 assignmentDetails-status-container">
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            {Assignment.branch}
          </span>
          <div className="flex items-center justify-center gap-2">
            <span
              style={{ fontSize: "16px", fontWeight: "600" }}
              className="status-active"
            >
              {Assignment.status}
            </span>
            <div className="flex items-center justify-center edit-icon">
              <Edit2 fill="black" width={15} height={15} />
            </div>
          </div>
        </div>
        <div className="assignmentDetails-content">
          <div className="flex justify-between">
            <span className="">Assignment Link</span>
            <a href={Assignment.assignmentLink}>{Assignment.assignmentLink}</a>
          </div>
          <div className="flex justify-between">
            <span>Assignment Hour</span>
            <span>{Assignment.assignmentHour}</span>
          </div>
          <div className="flex justify-between">
            <span>Assignment Ends at</span>
            <span>{Assignment.assignmentEndsAt}</span>
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          <button className="flex items-center justify-center btn-common btn-shadow">
            <Box size={20} />
            To REVIEW
          </button>
          <button className="flex items-center justify-center btn-common">
            <FileText size={20} />
            SHORTLISTED
          </button>
        </div>
      </div>
      <div className="candidates-table">
        <table>
          <thead>
            <tr>
              <th>CANDIDATE</th>
              <th>SCORE</th>
            </tr>
          </thead>
          <tbody>
            {Assignment.candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className={candidate.id === candidateData.id ? "rowIsGray" : ""}
                onClick={() => {
                  setCandidateData(candidate);
                }}
              >
                <td className="flex items-center">
                  <img src={candidate.candidateImage} alt="" />
                  <div>
                    <p style={{ fontSize: "15px", fontWeight: "600" }}>
                      {candidate.name}
                    </p>
                    <p className="mailId">{candidate.mailId}</p>
                  </div>
                </td>
                <td style={{ fontSize: "15px", fontWeight: "600" }}>
                  {candidate.score}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignmentDetails;
