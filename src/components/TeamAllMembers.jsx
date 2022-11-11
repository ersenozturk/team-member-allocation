import React from "react";
import PlayerCard from "./PlayerCard";
import { useAllocationContext } from "../context/AllocationContext";

const TeamAllMembers = () => {
  const { footballers } = useAllocationContext();

  return (
    <div id="teamAllMembers" className="gap-3">
      {footballers.map((eachPlayer) => (
        <PlayerCard key={eachPlayer.id} eachPlayer={eachPlayer} />
      ))}
    </div>
  );
};

export default TeamAllMembers;
