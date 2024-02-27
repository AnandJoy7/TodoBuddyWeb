const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
let sql;

// //connect to DB
// const db = new sqlite3.Database("./test.db", sqlite3.OPEN_READWRITE, (err) => {
//     if (err) return console.error(err.message);
//     });

//     // Create table
// sql = 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY,email,username,password)';
// db.run(sql);

const app = express()

// app.use(express.static(path.join(__dirname + '/public')));

const PORT = process.env.PORT || 5000;


app.get("/api", (req, res) => {
    res.json({ "users": ["user1", "user2"] })
})

app.use(cors());
app.use(bodyParser.json());

// Connect to SQLite database
const db = new sqlite3.Database('./test.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create users table if not exists
db.run(`CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE,
  username TEXT UNIQUE,
  password TEXT
)`);


//query the date
sql = 'SELECT * FROM users';
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {

        console.log(row);
    });
});

//Drop table
// db.run('DROP TABLE users');



// Insert date into table
// sql = 'INSERT INTO users (email,username,password) VALUES (?,?,?)';
// db.run(sql,
//     ["rvmdiva2511@gmail.com","diva","diva@123"],
//     (err) => {
//         if (err) return console.error(err.message);
//     }
// );




// Register endpoint
app.post('/signup', (req, res) => {
  const { email, username, password } = req.body;
  const sql = 'INSERT INTO users (email, username, password) VALUES (?, ?, ?)';
  db.run(sql, [email, username, password], (err) => {
    if (err) {
      console.error('Error registering user:', err.message);
      return res.status(500).json({ message: 'Failed to register user' });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.get(sql, [email, password], (err, user) => {
    if (err) {
      console.error('Error finding user:', err.message);
      return res.status(500).json({ message: 'Internal server error' });
    }
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'Login successful' });
  });
});


app.use(express.static("./todo_app/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "todo_app", "build", "index.html"))
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

