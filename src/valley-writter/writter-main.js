let data = {
	"text1": "This a text whit params",
	"text2": "This a other text whit params",
	"style": {
		"color": "black",
		"backgroundColor": "white",
		"font": "sans-serif",
		"align": "center"
     }
};


document.getElementById("text").value = JSON.stringify(data, null, 3);

function print (n)
{
	try
	{
		document.getElementById("preview").srcdoc = "";
		if (document.getElementById("reload"))
		{
			document.getElementById("reload").remove();
		}
		
		data = JSON.parse(document.getElementById("text").value);
		const currenttext = JSON.parse(document.getElementById("text").value);
		
		for (let i = 1; i < n; i++)
		{
			const text = currenttext["text" + i];
			document.getElementById("preview").srcdoc += 
			"<p>" + text + "</p>";
		}
		document.getElementById("preview").srcdoc += 
		"<style> html { color: " + data.style.color + 
		"; background-color: " + data.style.backgroundColor + 
		"; font-family: " + data.style.font + 
		"; text-align: " + data.style.align +"} </style>";
	}
	catch (error)
 	{
		if (!document.getElementById("reload"))
		{
			document.getElementById("preview").srcdoc = 
			"<p>" + error +"</p> <style> html { color: red;} </style>";
			const button = document.createElement("button");
			button.textContent = "Reload";
			button.id = "reload";
			document.body.appendChild(button);
			button.addEventListener("click", () => {
				location.reload();
			});
		}
	}
	
} 

document.addEventListener("keyup", () => {
	print(Object.keys(data).length);
});

print(Object.keys(data).length);