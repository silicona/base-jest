import { Hemingway } from "../src/hemingway"

/**
 * @group hemingway
 */
describe("Suite de Hemingway", () => {

  let nums: number[],
    hemingway: Hemingway

  beforeAll(() => {
    nums = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
    hemingway = new Hemingway()
  })

  it("GetFibonnaci", () => {
    const res = hemingway.getFibonnaci(15)
    expect(res).toEqual(nums)
  })
  
  it("GetSeriesDeFibonnaci", () => {
    const res = hemingway.getSeriesDeFibonacci(15)
    expect(res).toEqual(nums)

  })
})