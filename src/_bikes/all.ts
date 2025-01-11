import Bikes from "@/app/(site)/(pages)/bikes/[slug]/page";
import { all } from "./bikes";

export const bikes = filter(all);

function filter(bikes: any[]) {
  return bikes;
}
