import { forEach } from "lodash";

export default function(errors) {
  const result = {};

  forEach(errors, (val, key) => {
    result[key] = val.message;
  });

  return result;
}
