#!/usr/bin/env perl
use v5.10;
use warnings;

use Time::Piece; # Core module since 5.10

my $t = localtime;
say $t->ymd . ' ' . $t->hms;
