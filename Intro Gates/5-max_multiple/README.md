<h1>Max Multiple</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div><p>Given a <code>divisor</code> and a <code>bound</code>, find the largest integer <code>N</code> such that:</p>
<ul>
<li><code>N</code> is divisible by <code>divisor</code>.</li>
<li><code>N</code> is less than or equal to <code>bound</code>.</li>
<li><code>N</code> is greater than <code>0</code>.</li>
</ul>
<p>It is guaranteed that such a number exists.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Example</span></p>
<p>For <code>divisor = 3</code> and <code>bound = 10</code>, the output should be<br>
<code>maxMultiple(divisor, bound) = 9</code>.</p>
<p>The largest integer divisible by <code>3</code> and not larger than <code>10</code> is <code>9</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer divisor</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ divisor ≤ 10</code>.</p>
</li>
<li>
<p><strong>[input] integer bound</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>5 ≤ bound ≤ 100</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The largest integer not greater than <code>bound</code> that is divisible by <code>divisor</code>.</li>
</ul>
</li>
</ul>
</div>