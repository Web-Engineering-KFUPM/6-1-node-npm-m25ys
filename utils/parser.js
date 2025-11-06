import _ from "lodash";

export function parseNumbers(input) {
  return _.filter(_.map(input, (value) => Number(value)), (num) => !Number.isNaN(num))
}

export function isValidOperation(operation) {
  return _.includes(["add", "subtract", "multiply", "divide"], operation);
}

