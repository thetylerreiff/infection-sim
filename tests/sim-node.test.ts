import { SimNode } from "../src/sim-node";

describe("SimNode Tests", () => {
  it("Should be instance of SimNode", () => {
    const node = new SimNode();
    expect(node).toBeInstanceOf(SimNode);
  });
  it("should become infected when method is called", () => {
    const node = new SimNode();
    node.infect();
    expect(node.status).toBe("sick");
    expect(node.infectedAt).toBeCloseTo(Date.now(), -2);
  });
  it("should infect node when it contects a sick node", () => {
    const node = new SimNode();
    const sickNode = new SimNode({ status: "sick" });
    node.interact(sickNode);
    expect(node.status).toBe("sick");
  });
  it("should be infected when interacting with sick node", () => {
    const sickNode = new SimNode({ status: "sick" });
    const node = new SimNode();
    sickNode.interact(node);
    expect(node.status).toBe("sick");
  });
  it("should recover when method is called", () => {
    const node = new SimNode({ status: "sick" });
    node.recover();
    expect(node.status).toBe("recovered");
  });

  it("should die when method is called", () => {
    const node = new SimNode({ status: "sick" });
    node.die();
    expect(node.status).toBe("dead");
  });
});
