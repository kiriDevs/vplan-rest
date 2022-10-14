import SubstitutionPlan from "./types/SubstitutionPlan";
import type APIDateString from "./types/api/APIDateString";

interface IVPlanREST {
  setToken: (newValue: string) => void;
  setUrl: (newValue: string) => void;
  setUseragent: (newValue: string) => void;

  fetchPlan: (forDate: Date|APIDateString) => Promise<SubstitutionPlan>;
}

export default IVPlanREST;
