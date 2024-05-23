describe('Find Spaceship', function() {
    it('should return [2, 7] for the given map', function() {
        const map = '........\n........\n.......X\n........\n........';
        expect(findSpaceship(map)).toEqual([2, 7]);
    });

    it('should return "Spaceship lost forever." if the spaceship is not found', function() {
        const map = '........\n........\n........\n........\n........';
        expect(findSpaceship(map)).toEqual("Spaceship lost forever.");
    });
});