<h1>Increase Number Roundness</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div class="markdown -serif"><p>Define an integer's <em>roundness</em> as the number of trailing zeroes in it.</p>
<p>Given an integer <code>n</code>, check if it's possible to increase <code>n</code>'s roundness by swapping some pair of its digits.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>n = 902200100</code>, the output should be<br>
<code>increaseNumberRoundness(n) = true</code>.</p>
<p>One of the possible ways to increase <em>roundness</em> of <code>n</code> is to swap digit <code>1</code> with digit <code>0</code> preceding it: <em>roundness</em> of <code>902201000</code> is <code>3</code>, and <em>roundness</em> of <code>n</code> is <code>2</code>.</p>
<p>For instance, one may swap the leftmost <code>0</code> with <code>1</code>.</p>
</li>
<li>
<p>For <code>n = 11000</code>, the output should be<br>
<code>increaseNumberRoundness(n) = false</code>.</p>
<p><em>Roundness</em> of <code>n</code> is <code>3</code>, and there is no way to increase it.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>A positive integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>100 ≤ n ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<ul>
<li><code>true</code> if it's possible to increase <code>n</code>'s roundness, <code>false</code> otherwise.</li>
</ul>
</li>
</ul>
</div>
