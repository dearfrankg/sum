import sum from '../src'

describe('#sum', () => {
  it('should sum 1 and 2 and get 3', () => {
    const actual = sum(1, 2)
    const expected = 3
    expect(actual).toBe(expected)
  })
})
