use v5.10;
use warnings;

use Time::Piece;

my $t = localtime;
say $t->ymd . ' ' . $t->hms
