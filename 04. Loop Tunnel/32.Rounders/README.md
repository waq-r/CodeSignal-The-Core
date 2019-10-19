<h1>Rounders</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div><p>We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non <code>0</code> digit of the number and round it to <code>0</code> or to <code>10</code>. If it's less than <code>5</code> we round it to <code>0</code> if it's larger than or equal to <code>5</code> we round it to <code>10</code> (rounding to <code>10</code> means increasing the next significant digit by <code>1</code>). The process stops immediately once there is only one non-zero digit left.</p>
<p><span class="markdown--header" style="color:#44BFA3;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>n = 15</code>, the output should be<br>
<code>rounders(n) = 20</code>;</p>
</li>
<li>
<p>For <code>n = 1234</code>, the output should be<br>
<code>rounders(n) = 1000</code>.</p>
<p><code>1234 -&gt; 1230 -&gt; 1200 -&gt; 1000</code>.</p>
</li>
<li>
<p>For <code>n = 1445</code>, the output should be<br>
<code>rounders(n) = 2000</code>.</p>
<p><code>1445 -&gt; 1450 -&gt; 1500 -&gt; 2000</code>.</p>
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
<code>1 ≤ value ≤ 10<sup>8</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The rounded number.</li>
</ul>
</li>
</ul>
</div>
