# Get today's date
today = Date.today
puts today

# Get tomorrow's date
puts Date.tomorrow

# Get yesterday's date
puts Date.yesterday

# Get current time
puts Time.now

# Get current month number
puts today.month

# Get current month name
puts today.strftime('%B')

# Get current year
puts today.year

# Get latest date and time
puts DateTime.now
