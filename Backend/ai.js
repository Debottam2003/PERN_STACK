const api_key = "AIzaSyCLferB1sy4g9fC-6UiXJjbaKzEhKDA5ZI";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(api_key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "welcome";

async function generateContentCustom(prompt) {
    try{
    const result = await model.generateContent(prompt);
    //console.log(result.response.text());
    return result.response.text();
    } catch (error) {   
        console.log(error);
    }
}


let express = require('express');
let path = require('path');
let cors = require('cors');

let app = express();
let port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => {
    res.render("ai");
}); 

app.post('/ai', async (req, res) => {
    let ai_data = await generateContentCustom(req.body.prompt);
    let clean_data = ai_data.split('\n').filter((line) => {return line.length > 0});
    res.render("ai", {ai_data : clean_data});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


