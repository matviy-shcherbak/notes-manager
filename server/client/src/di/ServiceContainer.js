export class ServiceContainer {
  constructor() {
    this.services = new Map();
  }

  register(name, instance) {
    this.services.set(name, instance);
  }

  get(name) {
    const service = this.services.get(name);
    if (!service) throw new Error(`Service ${name} not found`);
    return service;
  }
}

export const defaultContainer = new ServiceContainer();
