<h1>Addition Without Carrying</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div><p>A little boy is studying arithmetics. He has just learned how to add two integers, written one below another, column by column. But he always forgets about the important part - carrying.</p>
<p>Given two integers, your task is to find the result which the little boy will get.</p>
<p><em>Note: The boy had learned from <a href="https://www.mathsisfun.com/numbers/addition-column.html" target="_blank">this</a> site, so feel free to check it out too if you are not familiar with column addition</em>.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Example</span></p>
<p>For <code>param1 = 456</code> and <code>param2 = 1734</code>, the output should be<br>
<code>additionWithoutCarrying(param1, param2) = 1180</code>.</p>
<pre><code>   456
  1734
+ ____
  1180
</code></pre>
<p>The boy performs the following operations from right to left:</p>
<ul>
<li><code>6 + 4 = 10</code> but he forgets about carrying the <code>1</code> and just writes down the <code>0</code> in the last column</li>
<li><code>5 + 3 = 8</code></li>
<li><code>4 + 7 = 11</code> but he forgets about the leading <code>1</code> and just writes down <code>1</code> under <code>4</code> and <code>7</code>.</li>
<li>There is no digit in the first number corresponding to the leading digit of the second one, so the boy imagines that <code>0</code> is written before <code>456</code>. Thus, he gets <code>0 + 1 = 1</code>.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer param1</strong></p>
<p>A non-negative integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ param1 &lt; 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer param2</strong></p>
<p>A non-negative integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ param2 &lt; 6 · 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The result that the little boy will get by using column addition without carrying.</li>
</ul>
</li>
</ul>
</div>
