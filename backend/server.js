const express = require('express');
const mysql = require("mysql");
const cors = require("cors");
const otpGenerator = require("otp-generator");
const nodemailer = require('nodemailer');
require("dotenv").config();

const app = express();
app.use(cors({ origin: '*' }));

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "blogs",
});

app.get('/', (req, res) => {
    return res.json("From Backend");
});

app.get('/blogs', (req, res) => {
    const sql = "SELECT * FROM blogsdata";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
});

app.get('/getCourses', (req, res) => {
    const sql = "SELECT * FROM courses";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
});

const getFormattedDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

app.post('/addBlog', (req, res) => {
    const { heading, description, thumbnail, blog } = req.body;

    const sql = `INSERT INTO blogsdata (heading, description, time, thumbnail, blog) VALUES (?, ?, ?, ?, ?)`;

    let time = req.body.time || getFormattedDateTime();

    const values = [heading, description, time, thumbnail, blog];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Failed to insert data" });
        }
        console.log("Data inserted:", data);
        res.status(200).json({ message: "Blog added successfully" });
    });
});

app.post('/generateOtp', (req, res) => {
    const { email } = req.body;

    console.log(email);

    const checkUserSql = `SELECT * FROM users WHERE email = ?`;
    db.query(checkUserSql, [email], (err, results) => {
        if (err) return res.status(500).json({ error: "Database error during check" });

        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        const otpExpiry = Date.now() + 5 * 60 * 1000;

        if (results.length === 0) {
            const insertUserSql = `INSERT INTO users (email, otp, otpexpire) VALUES (?, ?, ?)`;
            db.query(insertUserSql, [email, otp, otpExpiry], (err, result) => {
                if (err) return res.status(500).json({ error: "Failed to create user" });
            });
        }

        const sql = `UPDATE users SET otp = ?, otpexpire = ? WHERE email = ?`;

        return db.query(sql, [otp, otpExpiry, email], (err) => {
            if (err) return res.status(500).json({ error: "Failed to generate OTP" });

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                auth: {
                    user: 'rvermajio78300@gmail.com',
                    pass: process.env.MAIL_PASS,
                }
            });

            const mailOptions = {
                from: 'rohit',
                to: email,
                subject: 'Your OTP Code',
                text: `Your OTP is ${otp}`,
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({ error: "Failed to send OTP" })
                };
                res.status(200).json({ message: "OTP sent successfully" });
            });
        });
    });
});

app.post('/verifyOtp', (req, res) => {
    const { otp, email, courseId } = req.body;

    console.log(email);
    console.log(otp);

    const checkUserSql = `SELECT * FROM users WHERE email = ?`;

    db.query(checkUserSql, [email], (err, data) => {
        if (err) return res.status(500).json({ error: "Database error during check" });

        const userData = data[0];

        console.log((userData.otpexpire))
        console.log(Date.now())

        if (Number(otp) === userData.otp && Date.now() < userData.otpexpire) {
            const sql = `INSERT INTO user_transactions (email, courseid) VALUES (?, ?)`;

            const values = [email, courseId];

            return db.query(sql, values, (err, data) => {
                if (err) {
                    console.error("Database error:", err);
                    return res.status(500).json({ error: "Failed to Purchase" });
                }
                console.log("Data inserted:", data);
                res.status(200).json({ message: "Purchase Successfull" });
            });
        }

        return res.status(500).json({ error: "Invalid OTP" });
    });
});

app.listen(4000, () => {
    console.log("App listening on port 4000");
});
