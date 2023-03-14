const ASCII_INTERVALLUMOK = [
    [33, 47],
    [58, 64],
    [91, 96],
    [123, 126]
];

function validateForm()
{
    const HELYES = document.validTeszt.fNev.value === "";
    if (!HELYES)
    {
        alert("A mező kitöltése kötelező!");
    }
    return HELYES;
}

function validatePassword()
{
    const JELSZO = document.validTeszt.jSzo1.value;
    if (JELSZO.length < 8)
    {
        alert("A jelszónak minimum 8 karakteresnek kell lennie!");
        return false;
    }
    else if (!karakterKereses(JELSZO, c => c === c.toUpperCase()))
    {
        alert("A jelszónak tartalmaznia kell legalább 1 nagybetűs karaktert!");
        return false;
    }
    else if (!karakterKereses(JELSZO, c => c === c.toLowerCase()))
    {
        alert("A jelszónak tartalmaznia kell legalább 1 kisbetűs karaktert!");
        return false;
    }
    else if (!karakterKereses(JELSZO, c => !isNaN(parseInt(c))))
    {
        alert("A jelszónak tartalmaznia kell legalább 1 számot!");
        return false;
    }
    else if (!karakterKereses(JELSZO, c =>
    {
        const ASCII_CODE = c.charCodeAt(0);
        ASCII_INTERVALLUMOK.forEach(asciiIntervallum =>
        {
            if ((ASCII_CODE >= asciiIntervallum[0] && ASCII_CODE <= asciiIntervallum[1]))
            {
                return true;
            }
        });
        return false;
    }))
    {
        alert(`A jelszónak tartalmaznia kell legalább 1 speciális karaktert (${(() =>
        {
            let txt = "";
            ASCII_INTERVALLUMOK.forEach(asciiIntervallum =>
            {
                for (let i = asciiIntervallum[0]; i <= asciiIntervallum[1]; i++)
                {
                    txt += String.fromCharCode(i);
                }
            });
            return txt;
        })()})!`);
        return false;
    }
    return true;
}

function karakterKereses(szoveg, keresesiFeltetel)
{
    for (let i = 0; i < szoveg.length; i++)
    {
        if (keresesiFeltetel(szoveg[i]))
        {
            return true;
        }
    }
    return false;
}
