// if we need more time to execute, default is 5 000 ms
// jest.setTimeout(10000)

it('should pass with callback', (done) => {
    expect.assertions(1)

    setTimeout(
        () => {
            expect(true).toBe(true)
            done()
        },
        0
    )
})