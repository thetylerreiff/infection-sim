<script>
  import { onMount, afterUpdate } from "svelte";
  import { InfectionSim } from "./infection-sim.ts";
  import Tailwind from "./Tailwind.svelte";

  let sim;
  let nNodes = 25;
  let vaccine = false;

  onMount(() => {
    const canvas = document.getElementById("simDisplay");
    const ctx = canvas.getContext("2d");

    sim = new InfectionSim({
      height: canvas.height,
      width: canvas.width,
      ctx: ctx
    });
    setInterval(() => {
      sim.step();
    }, 16);
  });

  afterUpdate(() => {
    sim.nNodes = nNodes;
    sim.vaccine = vaccine;
  });
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>

<main>
  <div class="text-center">
    <h1 class="text-red-400 uppercase text-5xl font-hairline">
      Infection simulation
    </h1>
    <h3 class="font-bold">How Infections can spread</h3>
  </div>
  <div class="flex justify-center items-center">
    <label class="p-8">
      <input type="range" bind:value={nNodes} max={500} min={1} step={1} />
      {nNodes} {nNodes > 1 ? 'people' : 'person'}.
    </label>
  </div>
  <div class="flex justify-center">
    <canvas
      id="simDisplay"
      class="bg-orange-100 h-auto w-screen md:w-2/3" />
  </div>
</main>
