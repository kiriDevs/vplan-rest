import APISubstitution from "./api/APISubstitution";

type Substitution = {
  absent: string;
  class: string;
  note: string;
  period: number;
  room: string;
  subject: string;
  substitute: string;
};

const makeSubstitution = (api: APISubstitution) => ({
  ...api,
  period: parseInt(api.period)
});

export default Substitution;
export { makeSubstitution };
