import { InfectionSim } from '../src/infection-sim'

describe('InfectionSim Tests', () => {
    it('Should be instance of InfectionSim', () => {
        const sim = new InfectionSim({height: 200, width: 300 })
        expect(sim).toBeInstanceOf(InfectionSim)
    })
})