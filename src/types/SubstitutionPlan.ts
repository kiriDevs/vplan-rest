import Substitution, { makeSubstitution } from "./Substitution";
import APIPlanResponse from "./api/APIPlanResponse";

type SubstitutionPlan = {
  date: string;
  entries: Substitution[];
};

const makePlan = (api: APIPlanResponse) => ({
  date: api.date,
  entries: api.entries.map((e) => makeSubstitution(e))
});

export default SubstitutionPlan;
export { makePlan };
