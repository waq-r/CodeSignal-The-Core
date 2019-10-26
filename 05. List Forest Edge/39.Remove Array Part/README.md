<h1>Remove Array Part</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div><p>Remove a part of a given array between given 0-based indexes <code>l</code> and <code>r</code> (inclusive).</p>
<p><span style="color:#44BFA3;font-size:1.4em">Example</span></p>
<p>For <code>inputArray = [2, 3, 2, 3, 4, 5]</code>, <code>l = 2</code>, and <code>r = 4</code>, the output should be<br>
<code>removeArrayPart(inputArray, l, r) = [2, 3, 5]</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer inputArray</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ inputArray.length ≤ 10<sup>4</sup></code>,<br>
<code>-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer l</strong></p>
<p>Left index of the part to be removed (<code>0</code>-based).</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ l ≤ r</code>.</p>
</li>
<li>
<p><strong>[input] integer r</strong></p>
<p>Right index of the part to be removed (<code>0</code>-based).</p>
<p><em>Guaranteed constraints:</em><br>
<code>l ≤ r &lt; inputArray.length</code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
</li>
</ul>
</div>