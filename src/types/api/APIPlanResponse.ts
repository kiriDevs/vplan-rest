import APISubstitution from "./APISubstitution";

type APIPlanResponse = {
  date: string;
  entries: APISubstitution[];
  code: number;
  message: string;
};

export default APIPlanResponse;
