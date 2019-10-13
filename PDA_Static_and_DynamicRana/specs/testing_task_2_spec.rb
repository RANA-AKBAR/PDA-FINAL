require('minitest/autorun')
require('minitest/rg')
require_relative('../testing_task_2')

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("Ace", 1)
    @card2 = Card.new("King", 13)
    @card3 = Card.new("Queen", 12)
    @card4 = Card.new("Jack", 11)
    @card5 = Card.new("Ten", 10)
    @card6 = Card.new("Nine", 9)
    @card7 = Card.new("Eight", 8)

    @cards = [@card1, @card2, @card3, @card4, @card5, @card6, @card7]
  end

  def test_card_has_suit()
    assert_equal("Ace", @card1.suit)
  end

  def test_card_has_value()
    assert_equal(8, @card7.value)
  end
  #
  def test_card_check_for_ace__true()
    result = CardGame.checkforAce(@card1)
    assert_equal(true, result)
  end
  #
  def test_card_check_for_ace__false()
    result = CardGame.checkforAce(@card2)
    assert_equal(false, result)
  end
  #
  def test_highest_card__firstcard()
    result = CardGame.highest_card(@card4, @card6)
    assert_equal(@card4, result)
  end
  #
  def test_highest_card__secondcard()
    result = CardGame.highest_card(@card7, @card6)
    assert_equal(@card6, result)
  end
  #
  def test_cards_total()
    result = CardGame.cards_total(@cards)
    assert_equal("You have a total of 64", result)
  end

end
