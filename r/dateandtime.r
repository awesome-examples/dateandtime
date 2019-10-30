## simple method to extract time (and date)
Sys.time()

## print with possibly greater accuracy:
op <- options(digits.secs = 6)
Sys.time()
options(op)

## locale-specific version of date()
format(Sys.time(), "%a %b %d %X %Y")

## simple method to extract date
Sys.Date()
