window.addEventListener("load", () =>
{

});

function validateForm()
{
	if (document.validTeszt.fNev.value === "")
    {
    	alert("A mező kitöltése kötelező!");
    	return false;
	}
    else
    {
        return true;
    }
}