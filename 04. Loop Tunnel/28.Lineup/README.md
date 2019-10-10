<h1>Lineup</h1>
<p>source: <a href="https://www.codesignal.com/">codesignal.com</a>
<div><p>To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says <code>'L'</code>, he instructs the students to turn to the left. Alternatively, when he says <code>'R'</code>, they should turn to the right. Finally, when the coach says <code>'A'</code>, the students should turn around.</p>
<p>Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear <code>'L'</code> and left when they hear <code>'R'</code>. The coach wants to know how many times the students end up facing the same direction.</p>
<p>Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.</p>
<p><span style="color:#44BFA3;font-size:1.4em">Example</span></p>
<p>For <code>commands = "LLARL"</code>, the output should be<br>
<code>lineUp(commands) = 3</code>.</p>
<p>Let's say that there are <code>4</code> students, and the second one can't tell left from right. In this case, only after the second, third and fifth commands will the students face the same direction.</p>
<p><img src="https://codesignal.s3.amazonaws.com/tasks/lineUp/img/example.png?_tm=1551538320507" alt=""></p>
<p><span style="color:#44BFA3;font-size:1.4em">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string commands</strong></p>
<p>String consisting of characters <code>'L'</code>, <code>'R'</code> and <code>'A'</code> only.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ commands.length ≤ 35</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The number of commands after which students face the same direction.</li>
</ul>
</li>
</ul>
</div>
