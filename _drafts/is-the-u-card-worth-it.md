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
					this.totalPrice = this.daysPerWeekNonRush * this.timesPerDayNonRush * this.nonRushCost;	
				}
			});
		})
</script>

<p id="upass_cost">
	The University of Minneosta offers subsidized transit cards that they call U-Passes. The card costs <span data-var="semesterCostOfCard" class="TKAdjustableNumber" data-min="0" data-ax="100" data-format="$.0f"> </span> per semester, which lasts five months. The card expires after a semester. How much do you save by buying this card? Do you even save anything at all?

	If you take the bus <span class="TKAdjustableNumber" data-var="daysPerWeekNonRush" data-min="0" data-max="7">days</span> per week (on average), and you take the bus <span data-var="timesPerDayNonRush"> times</span> per each of these days (on average)

	Then at the end of five months you will have payed <span data-var="totalPrice" data-format="$.2f"> </span> instead of <span data-var="semesterCostOfCard" data-format="$.0f"> so your total savings will be <span data-var="totalSavings" data-format="$.2f"> </span>

</p>

