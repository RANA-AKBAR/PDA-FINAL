### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

require_relative('card.rb')
class CardGame


  def checkforAce(card) # this should be a class method, so self.checkforAce(card)
    if card.value = 1 #this sets card.value to 1, should be card.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #should be def, not dif AND this should be a class method, so self.highest_card(card1,card2)

  if card1.value > card2.value #if should be indented to make reading code easier
    return card.name #card is not a parameter and better to pass back instance, card1 (as opposed to name only)
  else
    card2
  end
end
end #this end has no corresponding method

def self.cards_total(cards)
  total #this should have a default value of zero
  for card in cards
    total += card.value
    return "You have a total of" + total #total needs to be converted to a string, total.to_str
  end
end
# there is a missing end for the class CardGame

```
