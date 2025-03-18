"use client";

import fetchCompanyData from "../hooks/use-company";
import { useState, useEffect } from "react";
import MissionCard from "./mission-card";
import TeamCard from "./team-card";
interface CompanyMissionProps {
  title: string;
  description: string;
}

interface CompanyTeamProps {
  name: string;
  position: string;
  imageUrl: string;
}

interface CompanyProps {
  name: string;
  mission: CompanyMissionProps[];
  team: CompanyTeamProps[];
}

const CompanyDataList = () => {


  const [company, setCompany] = useState<CompanyProps | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCompanyData();
      setCompany(data);
    }
    getData()
  }, [])
  return (
    <div className="flex flex-col gap-20 w-full items-center justify-center mt-20">
      <div className="flex flex-col gap-10 md:flex-row items-start w-full">
        <div className="flex w-full md:w-1/4 text-center items-center justify-center md:justify-start">
          <p className="text-2xl">
            Our Missions
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-6">
          {company?.mission.map((mission, index) => (
            <div key={mission.title}>
              <MissionCard title={mission.title} description={mission.description} index={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-10 md:flex-row items-start w-full">
        <div className="flex w-full md:w-1/4 text-center items-center justify-center md:justify-start">
          <p className="text-2xl">
            Our Core Team
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-6 items-center md:justify-between">
          {company?.team.map((team) => (
            <div key={team.name} className="w-fit">
              <TeamCard name={team.name} position={team.position} imageUrl={team.imageUrl} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default CompanyDataList;