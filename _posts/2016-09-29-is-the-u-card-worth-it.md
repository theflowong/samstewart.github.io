---
layout: post
date: 2016-09-29 17:35
categories: fun analysis tangle
---

<script type="text/javascript">
		$(document).ready(function() {
			var element = document.getElementById("upass_cost");

			var tangle = new Tangle(element, {
				initialize: function() {
					this.semesterCostOfCard = 100;
					this.daysPerWeekNonRush = 5;
					this.timesPerDayNonRush = 2;
					this.nonRushCost = 1.75;

				},
				update: function() {
					// there are 15 weeks in the semester
					this.totalPrice = 15*this.daysPerWeekNonRush * this.timesPerDayNonRush * this.nonRushCost;	
					this.totalSavings = this.totalPrice - this.semesterCostOfCard;
				}
			});
		})
</script>

<p id="upass_cost">
	The University of Minnesota offers subsidized transit cards that they call U-Passes.  <br>
	
	The card costs <span data-var="semesterCostOfCard" class="TKAdjustableNumber" data-min="0" data-max="150" data-format="$.0f"> </span> per semester, which lasts five months. The card expires after a semester. <br><br>

	If you take the bus <span class="TKAdjustableNumber" data-var="daysPerWeekNonRush" data-min="0" data-max="7"> days</span> per week (on average), and you take the bus <span data-var="timesPerDayNonRush" class="TKAdjustableNumber"> times</span> per each of these days (on average). <br><br>

	Then at the end of five months you will have spent &#36;<span data-var="totalPrice" data-format="$.2f"> </span> instead of &#36; <span data-var="semesterCostOfCard" data-format="$.0f"></span> so your total savings will be &#36; <span data-var="totalSavings" data-format="$$.2f"> </span>.
</p>

