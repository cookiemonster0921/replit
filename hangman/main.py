#hangman
import random
print('Hangman')
print('To play, type in your guess')
print('All letters are in lowercase')
text = open('file.txt')
list = []
for i in text:
  list.append(i.strip())
try:
  while True:
    word = random.choice(list)
    guess = ''
    for i in word:
      guess = guess + '_ '
    guess1 = guess.strip()
    guess2 = guess1.split()
    kill = 7
    wrong = []
    print(guess1)
    while True:
      print()
      if kill == 0:
        print('You lose')
        print(f'The correct word was {word}')
        print()
        print('New game -')
        break
      i = input('Letter guess? ')
      if len(i) != 1:
        print('Invalid guess')
        continue
      if i not in word:
        print('Wrong letter')
        wrong.append(i)
        kill -= 1
        print(f'{kill} wrong letter guess left')
        asf = ''
        print('Wrong guesses: ', end=' ')
        for i in wrong:
          asf += f'{i}, '
        print(asf.strip())
        print()
        for a in guess2:
          print(a, end='')
        print()
        continue
      num = []
      count = 0
      print('Correct')
      for a in word:
        if a == i:
          num.append(count)
        count += 1
      for a in num:
        guess2[a] = i  
      for a in guess2:
        print(a, end='')
      print()
      if '_' not in guess2:
        print('You win')
        print()
        print('New game -')
        break
except KeyboardInterrupt:
  print()
  print('Thanks for playing!')
  exit()