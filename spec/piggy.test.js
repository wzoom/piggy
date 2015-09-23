(function (pigLatin) {
  'use strict';

  describe('pig-latin', function() {

    it("a. Words that start with a consonant have their first letter moved to the end of the word and the letters “ay” added to the end.", function() {
      expect(pigLatin("Hello")).to.equal("Ellohay");
    });

    it("b. Words that start with a vowel have the letters “way” added to the end.", function() {
      expect(pigLatin("apple")).to.equal("appleway");
    });

    it("c. Words that end in “way” are not modified.", function() {
      expect(pigLatin("stairway")).to.equal("stairway");
    });

    it("d. Punctuation must remain in the same relative place from the end of the word.", function() {
      expect(pigLatin("can’t")).to.equal("antca’y");
      expect(pigLatin("end.")).to.equal("endway.");
    });

    it("e. Hyphens are treated as two words", function() {
      expect(pigLatin("this-thing")).to.equal("histay-hingtay");
    });

    it("f. Capitalization must remain in the same place.", function() {
      expect(pigLatin("Beach")).to.equal("Eachbay");
      expect(pigLatin("McCloud")).to.equal("CcLoudmay");
    });

    it("Sentence 1", function() {
      expect(pigLatin("Where do you come from appleway?")).to.equal("Hereway oday ouyay omecay romfay appleway?");
    });

    it("Sentence 2", function() {
      expect(pigLatin("One LaNgUaG)e isn't enough!")).to.equal("Oneway AnGuAgEla)y isntwa'y enoughway!");
    });

    it("Paragraph 1", function() {
      expect(pigLatin("One LaNgUaG)e isn't enough!\n\nWhere do you come from appleway?")).to.equal("Oneway AnGuAgEla)y isntwa'y enoughway!\n\nHereway oday ouyay omecay romfay appleway?");
    });
  });

})(piggy);
