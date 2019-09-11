<?php
function arithmeticExpression($a, $b, $c) {
    
    return in_array($c, [$a+$b, $a-$b, $a*$b, $a/$b,]);

}
