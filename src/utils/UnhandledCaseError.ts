export class UnhandledCaseError extends Error {
  constructor(value: never) {
    super(`unhandled case: ${value}`);
    this.name = 'UnhandledCaseError';
  }
}
