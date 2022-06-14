import axios from "axios";

const LOAD_MISSIONS = "LOAD_MISSIONS";

const _loadMissions = (missions) => {
  return { type: LOAD_MISSIONS, missions };
};

export const loadMissions = () => {
  return async (dispatch) => {
    const missions = (await axios.get("/api/missions")).data;
    dispatch(_loadMissions(missions));
  };
};

export const updateMission = (mission, history) => {
  return async (dispatch) => {
    mission = (await axios.put(`/api/missions/${mission.id}`, mission)).data;
    history.push("/home");
  };
};

export const missions = (state = [], action) => {
  switch (action.type) {
    case LOAD_MISSIONS:
      return action.missions;
    default:
      return state;
  }
};
