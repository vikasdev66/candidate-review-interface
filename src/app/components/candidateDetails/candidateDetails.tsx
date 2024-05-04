"use client";
import React from "react";
import ReactPlayer from "react-player";
// import techVideo from "@/assets/tech.mp4";
import "./candidateDetails.css";
import { CandidatesProps } from "@/app/mockApi/assignment";

interface CandidateDetailsProps {
  candidateData: CandidatesProps;
}

const CandidateDetails = ({ candidateData }: CandidateDetailsProps) => {
  console.log("candidateData", candidateData);
  return (
    <div className="flex gap-10 candidateDetails-container">
      <div className="candidateDetails">
        <div className="flex items-center justify-between">
          <div className="flex">
            <img
              src={candidateData.candidateImage}
              alt="candidate"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            />
            <div>
              <label
                style={{ fontSize: "15px", fontWeight: "600" }}
                htmlFor="candidate"
              >
                {candidateData.name}
              </label>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#aab2c0",
                }}
              >
                {candidateData.mailId}
              </p>
            </div>
          </div>
          <span style={{ fontSize: "20px", fontWeight: "600" }}>
            {candidateData.score}%
          </span>
        </div>
        <div className="flex flex-col gap-3 mt-10 mb-10 personality">
          <div>
            <label htmlFor="behavioral">Behavioral</label>
            <progress value={candidateData.behavior} max={10} id="behavioral">
              9/10
            </progress>
          </div>
          <div>
            <label htmlFor="communication">Communication</label>
            <progress
              value={candidateData.communication}
              max={10}
              id="communication"
            >
              9/10
            </progress>
          </div>
          <div>
            <label htmlFor="situationHandling">Situation handling</label>
            <progress
              value={candidateData.situationHandling}
              max={10}
              id="situationHandling"
            >
              6/10
            </progress>
          </div>
        </div>
        <div className="candidate-intro">
          <div>
            <h3>About</h3>
            <p>{candidateData.About}</p>
          </div>
          <div>
            <h3>Experience</h3>
            <p>{candidateData.Experience}</p>
          </div>
          <div>
            <h3>Hobbies</h3>
            <p>{candidateData.Hobbies}</p>
          </div>
          <div>
            <h3>introduction</h3>
            <p>{candidateData.introduction}</p>
          </div>
        </div>
        <div className="flex justify-center items-center shortlist-container bottom-4">
          <button>SHORTLIST</button>
        </div>
      </div>
      <ReactPlayer
        url={candidateData.videoUrl}
        className="candidateDetails-video"
        controls
      ></ReactPlayer>
    </div>
  );
};

export default CandidateDetails;
