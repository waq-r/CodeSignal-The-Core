<h1>Arithmetic Expression</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div><p>Consider an arithmetic expression of the form <code>a#b=c</code>. Check whether it is possible to replace <code>#</code> with one of the four signs: <code>+</code>, <code>-</code>, <code>*</code> or <code>/</code> to obtain a correct expression.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Example</span></p>
<ul>
<li>
<p>For <code>a = 2</code>, <code>b = 3</code>, and <code>c = 5</code>, the output should be<br>
<code>arithmeticExpression(a, b, c) = true</code>.</p>
<p>We can replace <code>#</code> with a <code>+</code> to obtain <code>2 + 3 = 5</code>, so the answer is <code>true</code>.</p>
</li>
<li>
<p>For <code>a = 8</code>, <code>b = 2</code>, and <code>c = 4</code>, the output should be<br>
<code>arithmeticExpression(a, b, c) = true</code>.</p>
<p>We can replace <code>#</code> with a <code>/</code> to obtain <code>8 / 2 = 4</code>, so the answer is <code>true</code>.</p>
</li>
<li>
<p>For <code>a = 8</code>, <code>b = 3</code>, and <code>c = 2</code>, the output should be<br>
<code>arithmeticExpression(a, b, c) = false</code>.</p>
<ul>
<li><code>8 + 3 = 11 ≠ 2</code>;</li>
<li><code>8 - 3 = 5 ≠ 2</code>;</li>
<li><code>8 * 3 = 24 ≠ 2</code>;</li>
<li><code>8 / 3 = 2.(6) ≠ 2</code>.</li>
</ul>
<p>So the answer is <code>false</code>.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer a</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ a ≤ 20</code>.</p>
</li>
<li>
<p><strong>[input] integer b</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ b ≤ 20</code>.</p>
</li>
<li>
<p><strong>[input] integer c</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ c ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<ul>
<li><code>true</code> if the desired replacement is possible, <code>false</code> otherwise.</li>
</ul>
</li>
</ul>
</div>