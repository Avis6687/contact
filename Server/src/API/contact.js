import express from "express";
import pool from "../db.js";
import uuid4 from "uuid4";

const contactRouter = express.Router();

//Get the contact-list

contactRouter.get("/contact", async (req, res) => {
  try {
    const contact = await pool.query("SELECT * FROM clientInfo");
    res.status(200).json({ success: true, data: contact.rows });
  } catch (err) {
    console.error(err);
  }
});

// create a new contact-list

contactRouter.post("/contact", async (req, res) => {
  const { user_email, first_name, last_name, phone_no, note } = req.body;
  console.log({ data: req.body });
  const id = uuid4();
  const is_verified = false;
  try {
    const newContactList = await pool.query(
      `INSERT INTO clientInfo(id, user_email, first_name, last_name, phone_no, note, is_verified) 
            VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [id, user_email, first_name, last_name, phone_no, note, is_verified]
    );
    console.log({ data: newContactList.rows });
    res.status(201).json({ success: true, data: newContactList.rows });
  } catch (err) {
    res.status(400).json({ success: false, data: { message: "Bad request" } });
  }
});

//Delete a contact-list

contactRouter.delete("/contact/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteContactList = await pool.query(
      "DELETE FROM clientInfo WHERE id=$1",
      [id]
    );
    res
      .status(200)
      .json({ success: true, data: { message: "Successfully deleted" } });
  } catch (err) {
    res.status(400).json({
      success: false,
      data: { message: "Contact delete unsuccessfull" },
    });
  }
});

//Mark as verified

contactRouter.put("/contact/verify/:id", async (req, res) => {
  const { id } = req.params;
  const is_verified = true;
  try {
    const editContactList = await pool.query(
      `UPDATE clientInfo SET is_verified=$1 WHERE id =$2 RETURNING *`,
      [is_verified, id]
    );
    res.status(200).json({ success: true, data: editContactList.rows });
  } catch (err) {
    res.status(400).json({ success: false, data: { message: "Bad request" } });
  }
});

export { contactRouter as contact };
