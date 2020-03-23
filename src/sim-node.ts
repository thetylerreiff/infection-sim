type NodeStatus = "healthy" | "sick" | "recovered" | "vaccinated" | "dead";

interface NodeOptions {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  status: NodeStatus;
  infectedAt: number;
}

export class SimNode {
  id: number;
  infectedAt: number | null;
  status: NodeStatus;
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;

  constructor(options?: Partial<NodeOptions>) {
    this.id = Date.now();
    this.infectedAt = null;
    this.x = options?.x || 0;
    this.y = options?.y || 0;
    this.status = options?.status || "healthy";
    this.dx = options?.dx || Math.random();
    this.dy = options?.dy || Math.random();
    this.radius = options?.radius || 1;
  }
  interact(contact: SimNode) {
    if (this.status === "sick" && contact.status === "healthy") {
      contact.infect();
    } else if (contact.status === "sick" && this.status === "healthy") {
      this.infect();
    }
  }
  infect() {
    this.status = "sick";
    this.infectedAt = Date.now();
  }
  recover() {
    this.status = "recovered";
  }
  die() {
    this.status = "dead";
    this.dx = 0;
    this.dy = 0;
  }
}