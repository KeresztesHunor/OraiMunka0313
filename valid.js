function validateForm()
{
    const HELYES = document.validTeszt.fNev.value === "";
	if (!HELYES)
    {
    	alert("A mező kitöltése kötelező!");
	}
    return HELYES;
}