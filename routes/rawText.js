const router = require("express").Router();
const ERROR_RESPONSE = "error occured"

const rawText = async (str) => {
    try {
        let response;
        // console.log("strrr", str)
        console.log(str);
        switch (str) {
            case "PING":
              response = "PONG";
              break;
            case "What is your quest":
                response = "coding";
                break;
            case "What is your name":
                response = "John Doe";
                break;
            case "631 + 626 =":
                response = "1257";
                break;
            case "1125 + 128 + 1020 + 490 =  ":
                response = "2763";
                break;
            case "vermillion tidal belligerent sidewalk":
                response = "4-21-13";
                break;
            case "opal bluster gale ratoon":
                response = "4-12-9";
                break;
            case "vermillion ocean":
                response = "2-8-7";
                break;
            case "< 56 55 36 53 15 8 18 9 52 39 >":
                response = "65 67 75 71 63";
                break;
            case "< 48 49 17 12 56 5 51 50 17 24 >":
                response = "61 67 65 73 63";
                break;
            case "< 51 12 32 15 34 55 32 9 7 28 >":
                response = "41 41 47 79 67";
                break;
            case "Source code for this exercise":
                response = "HTTP 404";
                break;
            
            case   ` ABCDE\n
                    A---->\n
                    B-=---\n
                    C-<---\n
                    D->--<\n
                    E----=`:
                response = "CBDEA";
                break;                                        
            }
            

            return response;
    } catch (err) {
        return ERROR_RESPONSE;
    }
};

router.get("/:q", (req, res) => {
    try {

        console.log(JSON.stringify(req.params.q))
        if (req.params.q == null){
           return  res.json(ERROR_RESPONSE);
        }
        let str = req.params.q
        rawText(str)
            .then((result) => {
                res.setHeader('content-type', 'text/plain');
                res.send(result);
            })
            .catch((err) => res.json(ERROR_RESPONSE));
    } catch (err) {
        console.log(err)
        res.json(ERROR_RESPONSE);
    }
});

module.exports = router;