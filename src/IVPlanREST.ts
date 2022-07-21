import SubstitutionPlan from "./types/SubstitutionPlan";

interface IVPlanREST {
  setToken: (newValue: string) => void;
  setUrl: (newValue: string) => void;
  setUseragent: (newValue: string) => void;

  fetchPlan: (forDate: Date) => Promise<SubstitutionPlan>;
}

export default IVPlanREST;
