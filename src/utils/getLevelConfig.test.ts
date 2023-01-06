import { getLevelConfig, levels } from "./getLevelConfig";

describe('getLevelConfig', () => {

  it('should return the right level config', () => {
    const {easy} = levels
    const levelEasy = getLevelConfig('easy')
    expect(easy).toStrictEqual(levelEasy)
  });

})