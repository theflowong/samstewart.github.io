---
layout: post
date: 2016-12-06 21:47
categories: society life math programming
---

Ignoring Silicone Valley's incessant love of small government and the free market, mathematics and programming are organizational systems that mirror governmental bureaucracies. More precisely, the *goals* and *structure*, not necessarily the *outcomes*, of mathematics and software engineering are identical to the *goals* and *structures* of man-made bureaucracies. Mathematics and computer science, in some sense, are themselves formal systems that resemble bureaucracies. Their organizational structures, however, are distinct.

Here we define bureaucracy to be an institution with a set of formal processes designed to achieve a societal function. Examples include the U.S. Patent Office, the various departments of motor vehicles (our favorite), and the I.R.S.  Despite its negative connotations, bureaucracy is the hallmark of an efficient political system [cite?]. Without the Department of Education, we wouldn't have functioning schools. Without the Department of Motor Vehicles, you wouldn't be able to title and register your car. Modern democracy requires armies of "professionalized administrators," or, bureaucrats to continue running. In contrast, a hallmark of a failed state is a complete lack of functioning bureaucracy. Instead of an accessible, formalized, democratized process, the system relies on personal connections, ad hoc rules, and excessive redundancy. 

# Mathematics and Bureaucracy
Like large institutions, mathematics is designed to fight complexity by establishing a set of formal rules. Just as one must bring an I.D. and a fixed amount of money for a new license plate, so one must always apply the power rule $(x^n)' = n x^{n - 1}$ when taking derivatives of polynomials. These predictable rules can be *combined* to achieve goals using the tools of the system. For example, you might want to purchase a new car, title and register it, and then insure it. In this case, you must first interact with the capitalist market bureaucracy, with its intricate rules for establishing trust (though conveniently abstracted into the swipe of a credit card), then interact with the (admittedly slightly more painful) DMV bureaucracy to register ownership, and finally you interact with the (slightly more expensive) insurance bureaucracy. In the end, you have achieved your goal by using the formalism of the system.

Equivalently, you might (or might not) wish to differentiate the function $f(x) = 2 + 4x^2$. To do this, you must invoke several procedures from the *calculus bureaucracy*. First, you invoke the sum rule for differentiation to obtain
\\[
	f'(x) = (2)' + (4x^2)'.
\\]
Then, you apply the constant rule and exponential rule for differentiation to obtain
\\[
	f'(x) = 0 + 8x.
\\]

Like titling a car, we have achieved our goal of differentiating the function $f(x) = 2 + 4x^2$ by exploiting the mechanical rules of our formal system (i.e. mathematics).

In general, mathematics has been surprisingly successful in using sufficiently *general* and *flexible* organizational structures (e.g. groups, maps, vector spaces) to fight the inevitable creep of complexity and continue to solve problems. Math is a terribly well-organized bureaucracy. There is a strong culture of reducing complicated definitions and procedures to more fundamental (and simpler) ideas and general theories. Somehow, as the complexity grows, mathematics has found ways to *simplify* the theory. It gracefully accommodates special cases by subsuming them into a more general perspective.

However, like bureaucracies, disorganization is not the only potential problem. The risk of "feature bloat" or hyper-specialization lies at the gates. Any formal system can become too brittle (e.g. rules that handle only strange edge cases) or too abstract (e.g. the final goal is lost). 

The former problem is a greater risk for poorly written code, than for mathematics, where elegance and generality are prized. The latter problem is, however, a risk. From my perspective, much of modern math (e.g. algebraic topology, algebraic geometry, number theory) has lost the fundamental goal of *solving problems* in the pursuit of abstraction. This is akin to the sensationalized H.R. departments that code all complaints in professionally worded memos but fail to make any change.

# Computer Science and Bureaucracy
Computer programming structures its bureaucracy, or set of formal rules, to handle complexity differently. Instead of generating more fundamental principles and definitions, it builds (more similar to actual bureaucracies) *layers* of complexity by hiding the dirty details at the *low level* and exposing them only through carefully constructed *interfaces*. As an example, 3D computer graphics contains an *enormous* amount of complexity, but the OpenGL API enables developers to display graphics with only a few function calls. This library of function calls provides the *interface* to millions of lines of code that are necessary for placing graphics on screen.

Just as human bureaucracies have secretaries that filter and transfer information between the levels in a bureaucratic hierarchy, so have software developers arranged codebases so that code need only know enough to use the *interface* of the next level up.

# Insights from the Bureaucratic Structure of Math and Computer Science
The extraordinary success of mathematics and computer programming *as bureaucracies* suggests three **key insights* that might be applied to our political institutions:
1. Keep things simple. Reduce redundancy and think hard to produce the *right definitions* and the *right protocols*.
2. Make the system flexible. As different layers grow to depend on certain protocols, it becomes increasingly difficult to change them. The end-game is *ossification* where the bureaucracy becomes too brittle. Math and computer programming have avoided this by constantly re-evaluating fundamental concepts and rules.
3. Document the system carefully. Software engineering has been more successful than mathematics in this, but the importance is the same. Without a set of *explanations* for the formal system, the connection to the goals becomes lost and rules can appear arbitrary. The end-game is *disillusionment* with the system when agents no longer see how to achieve their goals from within the system.

Increased complexity requires more sophisticated organizational structures. Mathematics, programming, and bureaucracies are nothing but better ways for organizing information. When designed correctly and carefully, the efficiency gain can be tremendous. When built carelessly, the efficiency loss can be so bad that it might have better if the system never existed in the first place. 
