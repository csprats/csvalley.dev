let data = {
			"title": "A title",
			"texts": [
				"A normal text",
				"A other normal text",
			],
			"style": {
				"color": "black",
				"backgroundColor": "white",
				"font": "sans-serif",
				"align": "center"
			}
		};

		const preview = document.getElementById('preview')

		document.getElementById("text").value = JSON.stringify(data, null, 3);
		
		function print (n)
		{
			try
			{
				preview.srcdoc = "";
				if (document.getElementById("reload"))
				{
					document.getElementById("reload").remove();
				}
				
				data = JSON.parse(document.getElementById("text").value);
				const currenttext = JSON.parse(document.getElementById("text").value);
				
				preview.srcdoc += `<h1>${currenttext.title}</h1>`

				currenttext.texts.forEach(text => {
					preview.srcdoc += 
					`<p>${text}</p>`
				});
				preview.srcdoc += 
				"<style> html { color: " + data.style.color + 
				"; background-color: " + data.style.backgroundColor + 
				"; font-family: " + data.style.font + 
				"; text-align: " + data.style.align +"} </style>";
			}
			catch (error)
			{
				document.getElementById("preview").srcdoc = 
				"<p>" + error +"</p> <style> html { color: red;} </style>";
			}
			
		} 

		document.addEventListener("keyup", () => {
			print(Object.keys(data).length);
		});

		print(Object.keys(data).length);