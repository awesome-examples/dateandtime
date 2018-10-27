import datetime
mylist = []
today = datetime.date.today()
print(today)

print(today.strftime('We are the %d, %b %Y'))
print(today.strftime('%a  %d, %b %Y'))
print(today.strftime('%A  %d, %b %Y'))
print(today.strftime('%a  %d, %B %Y at %I %p '))
