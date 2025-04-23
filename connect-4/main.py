#connect 4
import random
from collections import defaultdict 
grid = []
m = 0
check = 0 #this variable is to check if the how big the below inputs are valid
check2 = 0 #this variable to check if the inputs are integers, if they are not they do not change
while check < 1: #loop to use the variables
  try: # an exeption might occur here, if the input is not a number an exeption might come up
    size = int(input('How big do you want the grid? (length) Put as 1 integer: ')) # to ask for input
    if size < 3: #to check if the input is too small, and thus unplayable
      print('Too small')
      continue
    while check2 < 1: #this is a while loop 
      number_in_row = int(input('How much counters in a row is a win? ')) #more input
      if number_in_row < 3: #to check if number is too small 
        print('Too small') 
        continue
      if number_in_row > size: #to check if the numbers are possible
        print('winning number must be smaller than grid size')
        continue
      check2 += 1 #to break out of the loop
    check += 1 #to break out of the loop
  except KeyboardInterrupt: #this is a exeption response in case if the player presses the stop button
    print() #prints empty line
    print('Thanks for playing!')
    exit() #stops the program
  except: #this is the response to what happens if someone does not type an integer
    print('Type integer')
    continue # goes back to top of loop so they can type integer again 
#size = int(input('Size of grid: '))
#number_in_row = int(input('How many counters in a row is a win? '))
for i in range(size):
  row = []
  for i in range(size):
    row.append(f'[ ]')
    m += 1
  grid.append(row)
def computer(grid): #this is code for the computer to verse the player
  places = -1
  a = random.randint(0, size-1) #random module using random integers. the variable is named a because it is one of the numbers of coordinate computer generates
  while True:
    a = random.randint(0, size-1) #makes random integer every time loop is run
    for i in range(size):
      if grid[0][place] != '[ ]':
        break
      if grid[places][a] == '[ ]': #to check if the square put by the numbers is full
        grid[places][a] = '[o]' #puts 'o' in square
        return f'Computer (o) picked {a}' #returns what the computer picked as a coordinate
        break
      elif grid[places][a] != '[ ]': #if square computer picked is full it tries again
        places -= 1
        continue
def print_grid(grid): 
  num = 0 #this is a variable
  top_line = ' ' #this is code for printing out the top line
  #top_line += '  '
  for i in range(size): #for printing out the top line numbers. if size variable is going to be length and width of grid, the length of top line == size
    if i < 9: #extra code to make the top line even 
      top_line += f'{i}  ' #to make the top line
    elif i >= 9: # extra code to make the top line even 
      top_line += f'{i} '
  print(top_line.rstrip()) # this removes punctuation at the end of the top line, so no extra spaces
  for i in grid: # for printing out the grid in correct way 
    print(''.join(i)) #to print out the grid 
    num += 1 #coordinates increase by 1 so it prints 0, 1, 2, 3 etc
print_grid(grid)
def win_in_a_row_x(grid): #this is code to check if 3 x's are in a row
  win_condition = 0
  for i in grid:
    win_condition = 0
    for a in i:
      if a == '[x]':
        win_condition += 1
        #continue
      elif a != '[x]':
        win_condition = 0
        #continue
      if win_condition == number_in_row:
        return True
def win_in_a_row_o(grid): #this is code to check that 3 o's are in a row
  win_condition = 0
  for i in grid:
    win_condition = 0
    for a in i:
      if a == '[o]':
        win_condition += 1
        #continue
      elif a != '[o]':
        win_condition = 0
        #continue
      if win_condition == number_in_row:
        return True
def win_in_a_column_x(grid): #to check if someone won in a column
  x = 0
  num = 0
  count = 0
  while num < size: #to check all columns
    count = 0
    for i in grid: #to check in the columns
      if i[x] == '[x]':
        count += 1
      elif i[x] != '[x]':
        count = 0
      if count == number_in_row:
        return True
    num += 1
    x += 1
def win_in_a_column_o(grid): #to check if player 'o' won in a column
  x = 0 #x axis of grid, that is why variable called x
  num = 0 #counter variable
  count = 0 #number of counters in a row
  while num < size:
    count = 0
    for i in grid:
      if i[x] == '[o]':
        count += 1
      elif i[x] != '[o]':
        count = 0
      if count == number_in_row:
        return True
    num += 1
    x += 1
#upper all correct
def diagonal_x(grid): #to check if player x won in a diagonal
  row = size
  column = size
  count = 0
  d1 = defaultdict(list) #this is diagonals from top left to bottom right
  d2 = defaultdict(list) #this is all diagonals from top right to bottom left
  dd1 = [] #to store the diagonals that are bigger or equal to the number of counters required for a win
  dd2 = []
  for i in range(row):
    for a in range(column):
      d1[i-a].append(grid[i][a]) #puts diagonal into list
      d2[a+i].append(grid[i][a])
  for i in d1: #in the elegible diagonals
    if len(d1[i]) >= number_in_row: 
      dd1.append(d1[i]) #to put elegible for winning diagonals into list 
  for i in d2:
    if len(d2[i]) >= number_in_row:
      dd1.append(d2[i])
  for i in dd1: #to check if the diagonals are in a row
    for a in i:
      if count == number_in_row:
        return True
      if a == '[x]':
        count += 1
      elif a != '[x]':
        count = 0
  for i in dd2:
    for a in i:
      if count == number_in_row:
        return True
      if a == '[x]':
        count += 1
      elif a != '[x]':
        count = 0
def diagonal_o(grid): #see if the diagonals are in a row, similar to diagonal_x function
  row = size
  column = size
  count = 0
  d1 = defaultdict(list) #variable name means diagonal 1
  d2 = defaultdict(list) #variable name means diagonal 2
  dd1 = [] #variable name means diagonal diagonal 1
  dd2 = []
  for i in range(row):
    for a in range(column):
      d1[i-a].append(grid[i][a])
      d2[a+i].append(grid[i][a])
  for i in d1:
    if len(d1[i]) >= number_in_row:
      dd1.append(d1[i])
  for i in d2:
    if len(d2[i]) >= number_in_row:
      dd1.append(d2[i])
  for i in dd1:
    for a in i:
      if count == number_in_row:
        return True
      if a == '[o]':
        count += 1
      elif a != '[o]': #elif statement
        count = 0
  for i in dd2:
    for a in i:
      if count == number_in_row:
        return True
      if a == '[o]':
        count += 1
      elif a != '[o]':
        count = 0               
def is_it_full(grid): #checking if the grid is full
  num = 0 #number
  for i in grid:
    for a in i:
      if a != '[ ]':
        num += 1
  if num == size**2:
    return True
num = 1 #variable for counter
comp = input('computer or 1v1: ')
if comp == '1v1':
  try:
    while True:
      count = -1
      while True:
        try:
          place = int(input('Where player 1: '))
          true = 0
          for i in grid:
            column = grid[count][place]
            if column != '[ ]':
              count -= 1
            elif column == '[ ]':
              grid[count][place] = '[x]'
              true += 1
              break
            if grid[0][place] != '[ ]':
              print('invalid input')
              break
          if true == 1:
            break
        except KeyboardInterrupt: 
          print('Thanks for playing!')
          exit()
        except:
          print('invalid input')
          continue
      count = -1
      print_grid(grid)
      if win_in_a_row_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      if win_in_a_column_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      if is_it_full(grid) == True:
        print('Draw!')
        break
      if diagonal_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      while True:
        try:
          place = int(input('Where player 2: '))
          true = 0
          for i in grid:
            column = grid[count][place]
            if column != '[ ]':
              count -= 1
            elif column == '[ ]':
              grid[count][place] = '[o]'
              true += 1
              break
            if grid[0][place] != '[ ]':
              print('invalid input')
              break
          if true == 1:
            break
        except KeyboardInterrupt: 
          print('Thanks for playing!')
          exit()
        except:
          print('invalid input')
          continue
      print_grid(grid)
      if win_in_a_row_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if win_in_a_column_o(grid) == True: #an if statement
        print('Player 2 (o) wins!')
        break
      if is_it_full(grid) == True:
        print('Draw!')
        break
      if diagonal_o(grid) == True:
        print('Player 2 (o) wins!')
        break
  except KeyboardInterrupt: 
    print('Thanks for playing!')
    exit()
elif comp == 'computer':
  try:
    while True:
      count = -1
      while True:
        try:
          place = int(input('Where player 1: '))
          true = 0
          for i in grid:
            column = grid[count][place]
            if column != '[ ]':
              count -= 1
            elif column == '[ ]':
              grid[count][place] = '[x]'
              true += 1
              break
            if grid[0][place] != '[ ]':
              print('invalid input')
              break
          if true == 1:
            break
        except KeyboardInterrupt: 
          print('Thanks for playing!')
          exit()
        except:
          print('invalid input')
          continue
      count = -1
      print_grid(grid)
      if win_in_a_row_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      if win_in_a_column_x(grid) == True:
        print('Player 1 (x) wins!')
        break 
      if diagonal_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      if win_in_a_row_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if win_in_a_column_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if diagonal_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if is_it_full(grid) == True:
        print('Draw!')
        break
      print(computer(grid))
      print_grid(grid)
      if win_in_a_row_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if win_in_a_column_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if diagonal_o(grid) == True:
        print('Player 2 (o) wins!')
        break
      if win_in_a_row_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      if win_in_a_column_x(grid) == True:
        print('Player 1 (x) wins!')
        break 
      if diagonal_x(grid) == True:
        print('Player 1 (x) wins!')
        break
      if is_it_full(grid) == True:
        print('Draw!')
        break   
  except KeyboardInterrupt: 
    print('Thanks for playing!')
    exit()
else:
  print('press run again to play again, you did not get basic spelling right')