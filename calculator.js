function display(txt)
		{
			document.getElementById("result").value+=txt
		}
		function calculate()
		{
			x=document.getElementById("result").value
			y=eval(x)
			document.getElementById("result").value=y
		}
		function refresh()
		{
				document.getElementById("result").value=""
		}